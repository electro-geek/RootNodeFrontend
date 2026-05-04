# RootNode: Technical Architecture & Project Understanding

## 1. Executive Summary
RootNode is a specialized **Online Judge (OJ) System** designed to facilitate real-time code evaluation in a secure, scalable, and isolated environment. Its primary purpose is to allow users to submit code for specific algorithmic challenges and receive immediate feedback on correctness, execution time, and memory usage.

## 2. System Architecture
The system follows a **decoupled Producer-Consumer architecture** to ensure high availability and responsiveness under heavy load.

### A. Component Breakdown
1.  **API Gateway (FastAPI):**
    *   Acts as the entry point for all frontend requests.
    *   Handles authentication via Firebase.
    *   Manages problem metadata and submission history.
    *   Enqueues judging tasks into the message broker.

2.  **Task Queue & Message Broker (Redis + Celery):**
    *   **Redis:** Serves as the message broker, storing pending tasks.
    *   **Celery:** Orchestrates the asynchronous task execution. This prevents the API from blocking while waiting for complex compilation or execution.

3.  **Judging Workers (Docker Containers):**
    *   The core "engine" of the project.
    *   Each submission is executed inside a **minimal, resource-constrained Docker container**.
    *   **Security:** Containers have zero network access and limited disk I/O to prevent malicious code from impacting the host system.
    *   **Resource Management:** Strict CPU and memory limits are enforced per problem.

4.  **Database (PostgreSQL):**
    *   Stores persistent data: Problems, Test Cases, Users (mapped to Firebase IDs), and Submission Results.

## 3. Technology Stack
*   **Backend:** FastAPI (Python)
*   **Asynchronous Processing:** Celery
*   **Message Broker:** Redis
*   **Database:** PostgreSQL
*   **Containerization:** Docker (for both services and sandboxing)
*   **Authentication:** Firebase Auth
*   **Deployment:** Vercel (Frontend), Docker Compose/Cloud Services (Backend)

## 4. Submission Lifecycle (Step-by-Step)
1.  **Submission:** The frontend sends a `POST` request with the user's code, problem ID, and language.
2.  **Validation:** FastAPI validates the session (Firebase Token) and checks if the problem exists.
3.  **Enqueued:** A `submission_id` is created in the DB with status `Pending`. A task is pushed to Redis.
4.  **Worker Receipt:** A Celery worker picks up the task.
5.  **Sandbox Initialization:** The worker spins up a Docker container based on the language specified (`python-runner`, `cpp-runner`, etc.).
6.  **Execution:** The user code is mounted into the container and executed against hidden test cases.
7.  **Result Capture:** The worker captures `stdout`, `exit_code`, execution time, and peak memory usage.
8.  **Status Update:** The `submission_id` record in the database is updated (e.g., `Accepted`, `TLE`, `Wrong Answer`).
9.  **Frontend Polling:** The frontend, which has been polling the `GET /submissions/{id}` endpoint, receives the updated status and displays the result to the user.

## 5. Security Posture
*   **Isolation:** Use of Docker ensure that code cannot access the host filesystem or environment variables.
*   **Network Silence:** Containers are started with `--network none` to prevent data exfiltration.
*   **Resource Quotas:** Memory and Time limits are enforced via the container runner to prevent denial-of-service attacks by "infinite loop" or "memory leak" submissions.

## 6. Language Support Matrix
| Language | Runner Environment | Features |
| :--- | :--- | :--- |
| **Python** | Python 3.x | Interpreted, robust error reporting |
| **C++** | GCC (Latest) | Compiled, low-level efficiency monitoring |
| **Java** | OpenJDK | JVM-based isolation, memory management |
| **Go** | Go SDK | Fast compilation and statically linked execution |

## 7. Future Scalability
The architecture allows for **Horizontal Scaling** of Judging Workers. As the number of concurrent users grows, additional worker instances can be deployed on separate servers to handle the increased load without affecting the API's performance.

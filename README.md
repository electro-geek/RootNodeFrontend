# RootNode: High-Performance Online Judge Backend Engine

[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/electro-geek/RootNodeFrontend)
[![Tech Stack](https://img.shields.io/badge/Stack-FastAPI%20|%20Celery%20|%20Redis%20|%20Postgres-blue)](https://fastapi.tiangolo.com)
[![Sandbox](https://img.shields.io/badge/Sandbox-Docker-2496ED)](https://www.docker.com/)

**RootNode** is a robust, secure, and highly scalable **Online Judge System** designed for real-time code execution and algorithmic challenge grading. Built with a focus on high-performance and absolute isolation, it allows developers to effortlessly host coding challenges in an environment that scales with user demand.

---

## 🚀 Key Features

*   **Isolated Code Execution:** Each submission runs within a dedicated, resource-constrained **Docker sandbox** with zero network access.
*   **Multi-Language Support:** First-class support for **Python 3**, modern **C++ (GCC)**, **Java (OpenJDK)**, and **Go**.
*   **Asynchronous Judging Pipe:** Leverages **Celery** and **Redis** for a modern Producer-Consumer architecture, preventing API blocking during long-running code execution.
*   **Precision Profiling:** Real-time monitoring of millisecond-level execution time and peak memory consumption (MB).
*   **Enterprise-Grade Security:** Seamlessly integrated with **Firebase Authentication** for secure user management.
*   **Detailed Feedback:** Provides granular results including **Accepted**, **Wrong Answer (WA)**, **Time Limit Exceeded (TLE)**, **Memory Limit Exceeded (MLE)**, and **Runtime Errors**.

---

## 🛠️ Tech Stack & Architecture

| Component | Responsibility |
| :--- | :--- |
| **FastAPI** | High-performance API Gateway and Problem Management. |
| **Celery** | Asynchronous Task Orchestration for Judging. |
| **Redis** | High-speed Message Broker and Task Queue. |
| **Docker** | Isolated Sandboxes for untrusted code execution. |
| **PostgreSQL** | Relational data persistence for problems, users, and results. |
| **Firebase** | OAuth2 and User Session Management. |

---

## 📂 Project Structure

```text
.
├── src/
│   ├── components/
│   │   └── SignUp.jsx      # High-fidelity registration component
│   ├── App.jsx             # Main application entry
│   ├── index.css           # Design system and kinetic-grid styles
│   └── main.jsx            # React root initialization
├── full_APi.md             # Complete API Specification
├── inspiration.md          # Visual design source
├── PROJECT_UNDERSTANDING.md # Architectural Deep-Dive
├── README.md               # Overview and Instructions
├── tailwind.config.js      # Custom theme & color tokens
└── .env                    # Environment variables (API Base URL)
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Quick Start (Development)
1. **Clone and Install:**
   ```bash
   git clone https://github.com/electro-geek/RootNodeFrontend.git
   cd RootNodeFrontend
   npm install
   ```

2. **Environment Configuration:**
   Ensure `.env` exists with your backend URL:
   ```env
   VITE_API_BASE_URL=http://localhost:8000
   ```

3. **Launch the Frontend:**
   ```bash
   npm run dev
   ```

---

## 📖 API Documentation

For the full endpoint descriptions, request payloads, and response schemas, see [**full_APi.md**](./full_APi.md).

### Core Endpoints:
- `GET /problems`: List all coding challenges.
- `GET /problems/{slug}`: Fetch detailed problem info.
- `POST /submissions`: Submit user code for judging.
- `GET /submissions/{id}`: Poll for judging results.
- `GET /me`: Authenticated user profile retrieval.

---

## 🛡️ Security Model
RootNode prioritizes security by ensuring all user-submitted code is:
1.  **Isolated:** Mounted into an ephemeral Docker container.
2.  **Muted:** Disconnected from all external networks (`--network none`).
3.  **Constrained:** Limited by CPU shares and memory caps (e.g., 256MB).
4.  **Ephemeral:** Containers are destroyed immediately after execution.

---

## 📄 License
This project is licensed under the [MIT License](./LICENSE).

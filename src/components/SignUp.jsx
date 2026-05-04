import React, { useState } from 'react';
import axios from 'axios';
import { ArrowRight, Terminal, ChevronDown } from 'lucide-react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        primaryLanguage: '',
        agreeToUpdates: false
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            // Since full_APi.md doesn't specify a registration endpoint, 
            // we assume a standard /auth/register or similar on the base URL.
            // If Firebase is used directly, this would be a firebase.auth() call.
            const response = await axios.post(`${API_BASE_URL}/auth/register`, {
                name: formData.fullName,
                email: formData.email,
                password: formData.password,
                language: formData.primaryLanguage
            });

            setMessage('Account initialized successfully. Deploying identity...');
        } catch (error) {
            setMessage(error.response?.data?.detail || 'Handshake failed. Check system logs.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex flex-col md:flex-row kinetic-grid bg-surface text-on-surface">
            {/* Left Column: Branding & Terminal Aesthetic */}
            <section className="hidden md:flex md:w-5/12 lg:w-4/12 flex-col justify-between p-12 bg-surface-container-low border-r border-outline-variant/10 relative overflow-hidden">
                <div className="z-10">
                    <div className="flex items-center gap-3 mb-12">
                        <img
                            alt="RootNode Logo"
                            className="h-10 w-10 object-contain"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGV2daj4jKC0lX2qQrORMilWFu8s6_dFZJ3hdZqotmsLvfjgUn0mCO0CHJzJ174IIxABWYad9D9f61cvnG4nM1Llyigr8AlyLfcKDVMB_dhoxQUq4r-CMJWkZ2r6Lk3MYgWRfF8BdLbeWxfIwJriq5zvGszyuM3EM01ViThIoafXsmatn445zd1dGFrl5QHAN1AysmPslA54A0VjooiMLwS1uF51W134jcZNPEO4Mv3m6BMGBnl1FXJOhBYYpUQoCJyu43S95ygSzo"
                        />
                        <span className="font-headline text-2xl font-bold tracking-tighter text-primary bg-secondary-container/20 px-2 py-1 rounded-sm">
                            RootNode
                        </span>
                    </div>
                    <h1 className="font-headline text-5xl font-extrabold tracking-tight leading-none mb-6">
                        INITIALIZE<br />
                        <span className="text-primary">YOUR NODE.</span>
                    </h1>
                    <p className="text-on-surface-variant max-w-xs leading-relaxed">
                        Deploy your developer identity into the Kinetic Terminal. Surgical precision for modern engineering.
                    </p>
                </div>

                <div className="z-10 space-y-4">
                    <div className="bg-surface-container-highest p-4 rounded-sm font-mono text-xs border-l-2 border-primary">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-on-surface uppercase font-bold tracking-wider">SYSTEM_AUTH_READY</span>
                        </div>
                        <p className="text-on-surface-variant">V2.4.0-STABLE // ASYNC_REGISTER_UP</p>
                    </div>
                </div>

                {/* Visual Texture Overlay */}
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-secondary-container/10 to-transparent pointer-events-none"></div>
            </section>

            {/* Right Column: Registration Form */}
            <section className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-y-auto">
                <div className="w-full max-w-xl">
                    {/* Mobile Branding */}
                    <div className="md:hidden flex items-center gap-3 mb-8">
                        <img
                            alt="RootNode Logo"
                            className="h-8 w-8 object-contain"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGV2daj4jKC0lX2qQrORMilWFu8s6_dFZJ3hdZqotmsLvfjgUn0mCO0CHJzJ174IIxABWYad9D9f61cvnG4nM1Llyigr8AlyLfcKDVMB_dhoxQUq4r-CMJWkZ2r6Lk3MYgWRfF8BdLbeWxfIwJriq5zvGszyuM3EM01ViThIoafXsmatn445zd1dGFrl5QHAN1AysmPslA54A0VjooiMLwS1uF51W134jcZNPEO4Mv3m6BMGBnl1FXJOhBYYpUQoCJyu43S95ygSzo"
                        />
                        <span className="font-headline text-xl font-bold tracking-tighter text-primary">RootNode</span>
                    </div>

                    <div className="mb-10">
                        <h2 className="font-headline text-3xl font-bold mb-2">Create Account</h2>
                        <p className="text-on-surface-variant">Join the high-performance developer ecosystem.</p>
                    </div>

                    {/* Google Sign Up Integration */}
                    <div className="space-y-6 mb-8">
                        <button
                            type="button"
                            onClick={() => console.log('Initializing Google Firebase Auth...')}
                            className="w-full h-12 bg-surface-container-high border border-outline-variant/30 hover:bg-surface-container-highest text-on-surface flex items-center justify-center gap-3 rounded-sm transition-all group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    className="text-[#4285F4]"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    className="text-[#34A853]"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                                    className="text-[#FBBC05]"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                    className="text-[#EA4335]"
                                />
                            </svg>
                            <span className="font-headline font-medium tracking-tight">Sign up with Google</span>
                        </button>

                        <div className="relative flex items-center justify-center">
                            <div className="flex-grow border-t border-outline-variant/20"></div>
                            <span className="flex-shrink mx-4 text-outline-variant text-[10px] font-mono tracking-widest uppercase">or continue with email</span>
                            <div className="flex-grow border-t border-outline-variant/20"></div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Standard Fields Group */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Full Name</label>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-primary text-on-surface h-12 px-4 rounded-sm placeholder:text-outline-variant transition-all outline-none"
                                    placeholder="ALAN TURING"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-primary text-on-surface h-12 px-4 rounded-sm placeholder:text-outline-variant transition-all outline-none"
                                    placeholder="root@node.dev"
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Password</label>
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-primary text-on-surface h-12 px-4 rounded-sm placeholder:text-outline-variant transition-all outline-none"
                                    placeholder="••••••••"
                                    type="password"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-primary text-on-surface h-12 px-4 rounded-sm placeholder:text-outline-variant transition-all outline-none"
                                    placeholder="••••••••"
                                    type="password"
                                />
                            </div>
                        </div>

                        {/* Developer Profile Section: Bento-style detail card */}
                        <div className="bg-surface-container p-6 rounded-md border-l-2 border-secondary">
                            <div className="flex items-center gap-2 mb-6">
                                <Terminal className="text-secondary w-5 h-5" />
                                <h3 className="font-headline text-lg font-bold">Developer Profile</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Primary Language</label>
                                    <div className="relative">
                                        <select
                                            name="primaryLanguage"
                                            value={formData.primaryLanguage}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-secondary text-on-surface h-12 px-4 pr-10 rounded-sm appearance-none cursor-pointer outline-none"
                                        >
                                            <option disabled value="">Select runtime stack...</option>
                                            <option value="python">Python</option>
                                            <option value="cpp">C++</option>
                                            <option value="java">Java</option>
                                            <option value="go">Go</option>
                                            <option value="rust">Rust</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline w-5 h-5" />
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-sm">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <input
                                            id="newsletter"
                                            name="agreeToUpdates"
                                            checked={formData.agreeToUpdates}
                                            onChange={handleChange}
                                            className="rounded-sm bg-surface-container-highest border-outline-variant text-primary focus:ring-primary h-4 w-4"
                                            type="checkbox"
                                        />
                                    </div>
                                    <label className="text-sm text-on-surface-variant cursor-pointer select-none" htmlFor="newsletter">
                                        I agree to receive tactical system updates and community logs.
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Status Message */}
                        {message && (
                            <div className={`p-4 rounded-sm text-sm font-mono ${message.includes('successfully') ? 'bg-secondary/10 text-secondary border border-secondary/20' : 'bg-error-container/10 text-error-container border border-error-container/20'}`}>
                                {message}
                            </div>
                        )}

                        {/* CTA Section */}
                        <div className="pt-4 space-y-6">
                            <button
                                disabled={loading}
                                className="w-full h-14 bg-gradient-to-r from-primary to-primary-fixed-dim text-on-primary-fixed font-headline font-bold text-lg rounded-sm shadow-xl shadow-primary/10 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-wait"
                                type="submit"
                            >
                                {loading ? 'INITIALIZING...' : 'Create Account'}
                                {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            </button>

                            <div className="flex flex-col items-center gap-4 py-4">
                                <p className="text-on-surface-variant text-sm">
                                    Already integrated?
                                    <a className="text-secondary font-bold hover:underline ml-1" href="#">Sign In</a>
                                </p>
                                {/* Tonal separation for legal */}
                                <div className="text-[10px] font-mono text-outline-variant text-center leading-relaxed opacity-60">
                                    BY REGISTERING, YOU AGREE TO THE <br className="md:hidden" />
                                    <a className="hover:text-on-surface underline" href="#">TERMS_OF_SERVICE</a> AND <a className="hover:text-on-surface underline" href="#">PRIVACY_PROTOCOL_2.0</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/* Visual Polish: Ghost elements */}
            <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none z-0"></div>
        </main>
    );
};

export default SignUp;

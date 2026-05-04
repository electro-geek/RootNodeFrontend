<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>RootNode - Join the Kinetic Terminal</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "surface-container": "#1a1a1a",
                        "outline": "#767575",
                        "on-secondary-fixed": "#510085",
                        "primary": "#ff9159",
                        "on-tertiary-fixed": "#372400",
                        "on-secondary": "#340058",
                        "on-primary": "#531e00",
                        "surface": "#0e0e0e",
                        "on-primary-container": "#401500",
                        "on-tertiary": "#5e4000",
                        "primary-fixed-dim": "#f66700",
                        "tertiary": "#ffc562",
                        "secondary-dim": "#c57eff",
                        "tertiary-container": "#fbb423",
                        "error-container": "#b92902",
                        "tertiary-fixed-dim": "#eba60f",
                        "surface-bright": "#2c2c2c",
                        "secondary-fixed": "#e7c5ff",
                        "primary-dim": "#ff7524",
                        "surface-variant": "#262626",
                        "primary-fixed": "#ff7a2f",
                        "surface-container-low": "#131313",
                        "on-surface-variant": "#adaaaa",
                        "on-tertiary-fixed-variant": "#5e4000",
                        "tertiary-fixed": "#fbb423",
                        "background": "#0e0e0e",
                        "on-error-container": "#ffd2c8",
                        "on-background": "#ffffff",
                        "secondary": "#c57eff",
                        "outline-variant": "#484847",
                        "surface-container-highest": "#262626",
                        "inverse-surface": "#fcf9f8",
                        "surface-container-high": "#20201f",
                        "secondary-container": "#6a0baa",
                        "inverse-on-surface": "#565555",
                        "on-error": "#450900",
                        "on-primary-fixed": "#000000",
                        "tertiary-dim": "#eba60f",
                        "surface-dim": "#0e0e0e",
                        "on-secondary-container": "#e6c3ff",
                        "surface-tint": "#ff9159",
                        "on-primary-fixed-variant": "#4f1c00"
                    },
                    fontFamily: {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Inter"],
                        "mono": ["JetBrains Mono"]
                    },
                    borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .kinetic-grid {
            background-image: radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0);
            background-size: 24px 24px;
        }
        .glow-mask {
            mask-image: linear-gradient(to bottom, black, transparent);
        }
    </style>
</head>
<body class="bg-surface font-body text-on-surface selection:bg-primary selection:text-on-primary-fixed">
<!-- Auth Shell Suppression: Per "Semantic Shell Mandate", Nav is excluded for transactional pages -->
<main class="min-h-screen flex flex-col md:flex-row kinetic-grid">
<!-- Left Column: Branding & Terminal Aesthetic -->
<section class="hidden md:flex md:w-5/12 lg:w-4/12 flex-col justify-between p-12 bg-surface-container-low border-r border-outline-variant/10 relative overflow-hidden">
<div class="z-10">
<div class="flex items-center gap-3 mb-12">
<img alt="RootNode Logo" class="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGV2daj4jKC0lX2qQrORMilWFu8s6_dFZJ3hdZqotmsLvfjgUn0mCO0CHJzJ174IIxABWYad9D9f61cvnG4nM1Llyigr8AlyLfcKDVMB_dhoxQUq4r-CMJWkZ2r6Lk3MYgWRfF8BdLbeWxfIwJriq5zvGszyuM3EM01ViThIoafXsmatn445zd1dGFrl5QHAN1AysmPslA54A0VjooiMLwS1uF51W134jcZNPEO4Mv3m6BMGBnl1FXJOhBYYpUQoCJyu43S95ygSzo"/>
<span class="font-headline text-2xl font-bold tracking-tighter text-orange-500 bg-purple-900/20 px-2 py-1 rounded-sm">RootNode</span>
</div>
<h1 class="font-headline text-5xl font-extrabold tracking-tight leading-none mb-6">
                    INITIALIZE<br/>
<span class="text-primary">YOUR NODE.</span>
</h1>
<p class="text-on-surface-variant max-w-xs leading-relaxed">
                    Deploy your developer identity into the Kinetic Terminal. Surgical precision for modern engineering.
                </p>
</div>
<div class="z-10 space-y-4">
<div class="bg-surface-container-highest p-4 rounded-sm font-mono text-xs border-l-2 border-primary">
<div class="flex items-center gap-2 mb-2">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="text-on-surface">SYSTEM_AUTH_READY</span>
</div>
<p class="text-on-surface-variant">V2.4.0-STABLE // ASYNC_REGISTER_UP</p>
</div>
</div>
<!-- Visual Texture Overlay -->
<div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-secondary-container/10 to-transparent pointer-events-none"></div>
</section>
<!-- Right Column: Registration Form -->
<section class="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-y-auto">
<div class="w-full max-w-xl">
<!-- Mobile Branding -->
<div class="md:hidden flex items-center gap-3 mb-8">
<img alt="RootNode Logo" class="h-8 w-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGV2daj4jKC0lX2qQrORMilWFu8s6_dFZJ3hdZqotmsLvfjgUn0mCO0CHJzJ174IIxABWYad9D9f61cvnG4nM1Llyigr8AlyLfcKDVMB_dhoxQUq4r-CMJWkZ2r6Lk3MYgWRfF8BdLbeWxfIwJriq5zvGszyuM3EM01ViThIoafXsmatn445zd1dGFrl5QHAN1AysmPslA54A0VjooiMLwS1uF51W134jcZNPEO4Mv3m6BMGBnl1FXJOhBYYpUQoCJyu43S95ygSzo"/>
<span class="font-headline text-xl font-bold tracking-tighter text-orange-500">RootNode</span>
</div>
<div class="mb-10">
<h2 class="font-headline text-3xl font-bold mb-2">Create Account</h2>
<p class="text-on-surface-variant">Join the high-performance developer ecosystem.</p>
</div>
<form class="space-y-8">
<!-- Standard Fields Group -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Full Name</label>
<input class="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-primary text-on-surface h-12 px-4 rounded-sm placeholder:text-outline-variant transition-all" placeholder="ALAN TURING" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Email</label>
<input class="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-primary text-on-surface h-12 px-4 rounded-sm placeholder:text-outline-variant transition-all" placeholder="root@node.dev" type="email"/>
</div>
<div class="space-y-2">
<label class="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Password</label>
<input class="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-primary text-on-surface h-12 px-4 rounded-sm placeholder:text-outline-variant transition-all" placeholder="••••••••" type="password"/>
</div>
<div class="space-y-2">
<label class="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Confirm Password</label>
<input class="w-full bg-surface-container-high border-none focus:ring-1 focus:ring-primary text-on-surface h-12 px-4 rounded-sm placeholder:text-outline-variant transition-all" placeholder="••••••••" type="password"/>
</div>
</div>
<!-- Developer Profile Section: Bento-style detail card -->
<div class="bg-surface-container p-6 rounded-md border-l-2 border-secondary-container">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">terminal</span>
<h3 class="font-headline text-lg font-bold">Developer Profile</h3>
</div>
<div class="space-y-6">
<div class="space-y-2">
<label class="block text-xs font-mono uppercase tracking-widest text-on-surface-variant">Primary Language</label>
<div class="relative">
<select class="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-secondary text-on-surface h-12 px-4 pr-10 rounded-sm appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select runtime stack...</option>
<option>Rust</option>
<option>Go</option>
<option>C++</option>
<option>Python</option>
<option>TypeScript</option>
<option>Zig</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-surface-container-low rounded-sm">
<div class="flex-shrink-0 mt-0.5">
<input class="rounded-sm bg-surface-container-highest border-outline-variant text-primary focus:ring-primary h-4 w-4" id="newsletter" type="checkbox"/>
</div>
<label class="text-sm text-on-surface-variant cursor-pointer" for="newsletter">
                                    I agree to receive tactical system updates and community logs.
                                </label>
</div>
</div>
</div>
<!-- CTA Section -->
<div class="pt-4 space-y-6">
<button class="w-full h-14 bg-gradient-to-r from-primary to-primary-fixed-dim text-on-primary-fixed font-headline font-bold text-lg rounded-sm shadow-xl shadow-primary/10 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group" type="submit">
                            Create Account
                            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<div class="flex flex-col items-center gap-4 py-4">
<p class="text-on-surface-variant text-sm">
                                Already integrated? 
                                <a class="text-secondary font-bold hover:underline ml-1" href="#">Sign In</a>
</p>
<!-- Tonal separation for legal -->
<div class="text-[10px] font-mono text-outline-variant text-center leading-relaxed">
                                BY REGISTERING, YOU AGREE TO THE <br class="md:hidden"/>
<a class="hover:text-on-surface underline" href="#">TERMS_OF_SERVICE</a> AND <a class="hover:text-on-surface underline" href="#">PRIVACY_PROTOCOL_2.0</a>
</div>
</div>
</div>
</form>
</div>
</section>
</main>
<!-- Visual Polish: Ghost elements per "Design System Strategy" -->
<div class="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none z-0"></div>
</body></html>
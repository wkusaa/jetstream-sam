<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>

    <Head title="Welcome" />

    <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <!-- Page content here -->
                <div class="
                sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100
                bg-base-100 text-base-content
                ">
                    <div class="navbar bg-base-100">
                        <div class="flex-none">
                            <label for="drawer" class="btn btn-square btn-ghost lg:hidden drawer-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="inline-block w-5 h-5 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div class="flex-1 lg:hidden">
                            <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                        </div>
                        <div class="flex-none">
                            <button class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="inline-block w-5 h-5 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="hero min-h-screen bg-base-100">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold">Hello there</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        </div>
                    </div>
                </div>
                <footer class="footer items-center p-4 bg-neutral text-neutral-content">
                    <div class="items-center grid-flow-col">
                        <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd" clip-rule="evenodd" class="fill-current">
                            <path
                                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
                            </path>
                        </svg>
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
                    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                class="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                                </path>
                            </svg>
                        </a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                class="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                                </path>
                            </svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                class="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                                </path>
                            </svg></a>
                    </div>
                </footer>
            </div>

            <div class="drawer-side" style="scroll-behavior: smooth; scroll-padding-top: 5rem;"><label for="drawer"
                    class="drawer-overlay"></label>
                <aside class="bg-base-200 w-80">
                    <div
                        class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex ">
                        <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
                            <div
                                class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                                <span class="lowercase">daisy</span> <span class="text-base-content uppercase">UI</span>
                            </div>
                        </a> <a href="/docs/changelog" class="link link-hover font-mono text-xs text-opacity-50">
                            <div data-tip="Changelog" class="tooltip tooltip-bottom">2.19.0</div>
                        </a></div>
                    <div class="h-4"></div>
                    <ul class="menu menu-compact flex flex-col p-0 px-4">
                        <li><a sveltekit:prefetch="" href="/docs/install" id="" class="flex gap-4   "><span
                                    class="flex-none"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20">
                                        </path>
                                    </svg></span> <span class="flex-1">Install</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/docs/use" id="" class="flex gap-4   "><span
                                    class="flex-none"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg></span> <span class="flex-1">Use</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/docs/customize" id="" class="flex gap-4   "><span
                                    class="flex-none"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                    </svg></span> <span class="flex-1">Customize components</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/docs/config" id="active-menu"
                                class="flex gap-4   active"><span class="flex-none"><svg width="24" height="24"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        class="w-6 h-6 stroke-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                                        </path>
                                    </svg></span> <span class="flex-1">Config</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/docs/colors" id="" class="flex gap-4   "><span
                                    class="flex-none"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                        <path
                                            d="M19,11.5C19,11.5 17,13.67 17,15C17,16.1 17.9,17 19,17C20.1,17 21,16.1 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z">
                                        </path>
                                    </svg></span> <span class="flex-1">Colors</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/docs/themes" id="" class="flex gap-4   "><span
                                    class="flex-none"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                                        </path>
                                    </svg></span> <span class="flex-1">Themes</span> <span
                                    class="badge badge-sm flex-none lowercase">updated</span></a> </li>
                        <li><a sveltekit:prefetch="" href="/theme-generator" id="" class="flex gap-4   "><span
                                    class="flex-none"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                        class="w-6 h-6 fill-current" viewBox="0 0 512 512">
                                        <title>ionicons-v5-m</title>
                                        <path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path>
                                        <line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line>
                                        <path
                                            d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z">
                                        </path>
                                        <path
                                            d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z">
                                        </path>
                                        <line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line>
                                        <path
                                            d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z">
                                        </path>
                                        <line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line>
                                        <path
                                            d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z">
                                        </path>
                                        <path
                                            d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z">
                                        </path>
                                        <path
                                            d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z">
                                        </path>
                                    </svg></span> <span class="flex-1">Theme Generator</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/docs/layout-and-typography" id=""
                                class="flex gap-4   "><span class="flex-none"><svg width="24" height="24"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        class="w-6 h-6 fill-current">
                                        <path
                                            d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z">
                                        </path>
                                    </svg></span> <span class="flex-1">Layout &amp; Typography</span> </a> </li>
                    </ul>
                    <ul class="menu menu-compact flex flex-col p-0 px-4">
                        <li></li>
                        <li class="menu-title"><span>Actions</span></li>
                        <li><a sveltekit:prefetch="" href="/components/button" id="" class="flex gap-4   "> <span
                                    class="flex-1">Button</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/dropdown" id="" class="flex gap-4   "> <span
                                    class="flex-1">Dropdown</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/modal" id="" class="flex gap-4   "> <span
                                    class="flex-1">Modal</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/swap" id="" class="flex gap-4   "> <span
                                    class="flex-1">Swap</span> </a> </li>
                    </ul>
                    <ul class="menu menu-compact flex flex-col p-0 px-4">
                        <li></li>
                        <li class="menu-title"><span>Data display</span></li>
                        <li><a sveltekit:prefetch="" href="/components/alert" id="" class="flex gap-4   "> <span
                                    class="flex-1">Alert</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/avatar" id="" class="flex gap-4   "> <span
                                    class="flex-1">Avatar</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/badge" id="" class="flex gap-4   "> <span
                                    class="flex-1">Badge</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/card" id="" class="flex gap-4   "> <span
                                    class="flex-1">Card</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/carousel" id="" class="flex gap-4   "> <span
                                    class="flex-1">Carousel</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/collapse" id="" class="flex gap-4   "> <span
                                    class="flex-1">Collapse</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/countdown" id="" class="flex gap-4   "> <span
                                    class="flex-1">Countdown</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/kbd" id="" class="flex gap-4   "> <span
                                    class="flex-1">Kbd</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/progress" id="" class="flex gap-4   "> <span
                                    class="flex-1">Progress</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/radial-progress" id="" class="flex gap-4   ">
                                <span class="flex-1">Radial progress</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/stat" id="" class="flex gap-4   "> <span
                                    class="flex-1">Stat</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/table" id="" class="flex gap-4   "> <span
                                    class="flex-1">Table</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/tooltip" id="" class="flex gap-4   "> <span
                                    class="flex-1">Tooltip</span> </a> </li>
                    </ul>
                    <ul class="menu menu-compact flex flex-col p-0 px-4">
                        <li></li>
                        <li class="menu-title"><span>Data input</span></li>
                        <li><a sveltekit:prefetch="" href="/components/checkbox" id="" class="flex gap-4   "> <span
                                    class="flex-1">Checkbox</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/input" id="" class="flex gap-4   "> <span
                                    class="flex-1">Text input</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/radio" id="" class="flex gap-4   "> <span
                                    class="flex-1">Radio</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/range" id="" class="flex gap-4   "> <span
                                    class="flex-1">Range</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/rating" id="" class="flex gap-4   "> <span
                                    class="flex-1">Rating</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/select" id="" class="flex gap-4   "> <span
                                    class="flex-1">Select</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/textarea" id="" class="flex gap-4   "> <span
                                    class="flex-1">Textarea</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/toggle" id="" class="flex gap-4   "> <span
                                    class="flex-1">Toggle</span> </a> </li>
                    </ul>
                    <ul class="menu menu-compact flex flex-col p-0 px-4">
                        <li></li>
                        <li class="menu-title"><span>Layout</span></li>
                        <li><a sveltekit:prefetch="" href="/components/artboard" id="" class="flex gap-4   "> <span
                                    class="flex-1">Artboard</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/button-group" id="" class="flex gap-4   "> <span
                                    class="flex-1">Button group</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/divider" id="" class="flex gap-4   "> <span
                                    class="flex-1">Divider</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/drawer" id="" class="flex gap-4   "> <span
                                    class="flex-1">Drawer</span> <span
                                    class="badge badge-sm flex-none lowercase">updated</span></a> </li>
                        <li><a sveltekit:prefetch="" href="/components/footer" id="" class="flex gap-4   "> <span
                                    class="flex-1">Footer</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/hero" id="" class="flex gap-4   "> <span
                                    class="flex-1">Hero</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/indicator" id="" class="flex gap-4   "> <span
                                    class="flex-1">Indicator</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/input-group" id="" class="flex gap-4   "> <span
                                    class="flex-1">Input group</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/mask" id="" class="flex gap-4   "> <span
                                    class="flex-1">Mask</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/stack" id="" class="flex gap-4   "> <span
                                    class="flex-1">Stack</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/toast" id="" class="flex gap-4   "> <span
                                    class="flex-1">Toast</span> </a> </li>
                    </ul>
                    <ul class="menu menu-compact flex flex-col p-0 px-4">
                        <li></li>
                        <li class="menu-title"><span>Navigation</span></li>
                        <li><a sveltekit:prefetch="" href="/components/breadcrumbs" id="" class="flex gap-4   "> <span
                                    class="flex-1">Breadcrumbs</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/bottom-navigation" id="" class="flex gap-4   ">
                                <span class="flex-1">Bottom navigation</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/link" id="" class="flex gap-4   "> <span
                                    class="flex-1">Link</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/menu" id="" class="flex gap-4   "> <span
                                    class="flex-1">Menu</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/navbar" id="" class="flex gap-4   "> <span
                                    class="flex-1">Navbar</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/pagination" id="" class="flex gap-4   "> <span
                                    class="flex-1">Pagination</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/steps" id="" class="flex gap-4   "> <span
                                    class="flex-1">Steps</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/tab" id="" class="flex gap-4   "> <span
                                    class="flex-1">Tab</span> </a> </li>
                    </ul>
                    <ul class="menu menu-compact flex flex-col p-0 px-4">
                        <li></li>
                        <li class="menu-title"><span>Mockup</span></li>
                        <li><a sveltekit:prefetch="" href="/components/mockup-code" id="" class="flex gap-4   "> <span
                                    class="flex-1">Code</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/mockup-phone" id="" class="flex gap-4   "> <span
                                    class="flex-1">Phone</span> </a> </li>
                        <li><a sveltekit:prefetch="" href="/components/mockup-window" id="" class="flex gap-4   "> <span
                                    class="flex-1">Window</span> </a> </li>
                    </ul>
                    <ul class="menu menu-compact flex flex-col p-0 px-4"> </ul>
                    <div
                        class="from-base-200 pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t to-transparent">
                    </div>
                </aside>
            </div>

        </div>
    </div>
</template>

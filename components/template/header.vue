<template>
    <header class="fixed z-10 top-0 left-1/2 -translate-x-1/2 bg-white h-[63px] w-full border-b">
        <div id="header-main" class="flex flex-row py-2 items-center justify-around mx-auto">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png" class="h-[30px]" />

            <div class="relative hidden md:block">
                <input type="text" class="rounded-full border focus:border-gray-300 border-gray-100 bg-gray-100 px-5 gap-4 h-[46px] md:w-full lg:w-[350px] pr-20 text-gray-600" placeholder="Search accounts and videos" />
                <div class="border-l border-gray-300 absolute top-1/2 -translate-y-1/2 right-5 pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div class="flex flex-row">
                <button class="font-bold px-4 py-2">Upload</button>
                <button class="font-bold px-8 py-2 rounded bg-primary text-white whitespace-nowrap" @click="$modal.show('login')">Log In</button>
                <div class="relative">
                    <button class="font-bold px-4 py-2 hidden sm:block" @click="show = !show">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                    <div class="absolute flex flex-col right-0 top-12 py-2 z-10 bg-white rounded shadow" style="width: max-content" v-if="show">
                        <nuxt-link to="/" class="flex flex-row gap-4 font-bold items-center hover:bg-gray-50 py-3 px-5 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            English
                        </nuxt-link>
                        <nuxt-link to="/" class="flex flex-row gap-4 font-bold items-center hover:bg-gray-50 py-3 px-5 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Feedback and help
                        </nuxt-link>
                        <nuxt-link to="/" class="flex flex-row gap-4 font-bold items-center hover:bg-gray-50 py-3 px-5 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Keyboard Shortcuts
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
}
</script>
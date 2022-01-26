<template>
    <div class="flex flex-col p-8 gap-5 min-h-full">
        <div class="flex flex-row gap-6 items-start">
            <img class="w-28 h-28 rounded-full" src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/36d03bffecfb83dee6f42db48736539a~c5_100x100.jpeg?x-expires=1643266800&x-signature=834tX9iFfztPyi74PgAkO2kjL8k%3D" />
            <div class="flex flex-col flex-1 justify-center flex-1">
                <span class="font-black text-3xl">johnliveeoroncillo</span>
                <span class="font-bold">jo</span>
                <div class="mt-3">
                    <button class="rounded bg-primary py-1 px-20 text-center text-white font-bold text-lg">Follow</button>
                </div>
            </div>  

            <div class="relative">
                <button @click="show = !show" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </button>

                <div class="absolute flex flex-col right-0 top-8 py-2 z-10 bg-white rounded shadow" style="width: max-content" v-if="show">
                    <nuxt-link to="/" class="flex flex-row gap-5 font-bold items-center hover:bg-gray-50 py-3 px-10 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                        Report
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-5">
            <span>
                <span class="font-bold text-gray-600">593</span> 
                <span class="opacity-60 font-thin text-sm">Following</span>
            </span>

            <span>
                <span class="font-bold text-gray-600">4.1M</span> 
                <span class="opacity-60 font-thin text-sm">Followers</span>
            </span>

            <span>
                <span class="font-bold text-gray-600">4.1M</span> 
                <span class="opacity-60 font-thin text-sm">Likes</span>
            </span>
        </div>
        <div class="opacity-70">
            No bio yet.
        </div>

        <div class="flex flex-row">
            <span class="flex-1 cursor-pointer font-bold text-center text-gray-500 pb-2" :class="{' !text-black border-b-2 border-black ' : selected == 'videos'}" @click="selected = 'videos'">Videos</span>
            <span class="flex-1 cursor-pointer font-bold text-center text-gray-500 pb-2" :class="{' !text-black border-b-2 border-black ' : selected == 'liked'}" @click="selected = 'liked'">Liked</span>
        </div>
        <div class="flex-1 flex flex-col">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" v-if="selected === 'videos'">
                <div class="rounded flex-1 h-[300px] bg-gray-100 relative group overflow-hidden cursor-pointer" v-for="d in 10" :key="d">
                    
                    <span class="bg-black opacity-50 absolute w-full h-full top-0 left-0 rounded z-10"></span>
                    <span class="flex flex-row text-white gap-1 absolute bottom-2 left-2 z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>74.1K</span>
                    </span>

                    <video class="h-full w-full object-cover object-center rounded group-hover:scale-125 transition-transform" src="https://v16-webapp.tiktok.com/50ca971b2a0b567e8fec78b358a7e262/61f14e9c/video/tos/alisg/tos-alisg-pve-0037/3985a339105e4e50b0ef8b6cc979c808/?a=1988&br=3890&bt=1945&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3Adnz7Thu.KGlXq&l=20220126073630010245241015160D5ADA&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzt4dmY6ZnV2OjMzODgzNEApPDM8M2Y4MztnNzQ3OzpmOGdwYXNkcjRvNGVgLS1kLy1zc2MuXjVgLjA1Ni9fXjU2Li46Yw%3D%3D&vl=&vr=" />
                </div>
            </div>
            <div class="grid place-items-center flex-1" v-else>
                <div class="flex flex-col gap-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span class="font-black text-2xl">This user's liked videos are private</span>
                    <span class="font-thin opacity-60">Videos liked by kimjxnniejane are currently hidden</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            selected: 'videos',
        }
    }
}
</script>
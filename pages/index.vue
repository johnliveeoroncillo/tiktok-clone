<template>
    <div class="flex flex-col p-8 gap-8">

        <reusable-feed-card />

        <div class="inline-flex flex-col gap-4 border-b pb-8">
            <div class="flex flex-row items-start gap-4">
                <img loading="lazy" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a50a0eff18403fdbf1d0b25bc03976e5.jpeg?x-expires=1643191200&amp;x-signature=NtwHCdDuRENkzcbnoqaCbNdjC0I%3D" class="h-16 w-16 rounded-full">
                <span class="flex-1 pt-2 overflow-hidden">
                    <span class="font-black flex flex-col lg:flex-row items-end gap-2">
                        <span class="truncate overflow-hidden whitespace-nowrap">USERNAME</span>
                        <span class="font-thin text-xs opacity-60 truncate overflow-hidden whitespace-nowrap mb-[2px]">JOHN</span>
                    </span>

                    <p class="font-thin hidden lg:block tracking-wide opacity-80">
                        Nulla adipisicing laborum deserunt est ut eiusmod cillum quis qui.
                    </p>
                </span>

                <button class="border-primary text-primary border rounded px-5 font-semibold tracking-wider">Follow</button>
            </div>
            
            <p class="font-thin tracking-wide opacity-80 w-full lg:hidden truncate whitespace-nowrap overflow-hidden">
                Nulla adipisicing laborum deserunt est ut eiusmod cillum quis qui.
            </p>

            <div class="flex overflow-hidden flex-row p-0 lg:pl-20 gap-4">
                <div class="rounded w-full sm:w-[582px] max-h-[582px] max-w-[582px]">
                    <video class="w-full object-fit rounded" src="https://v16-webapp.tiktok.com/e6f361ff93c1b8a202f25c4d776612b1/61f148da/video/tos/useast2a/tos-useast2a-pve-0037-aiso/cc8d3fe27f264f599fb8cd9b8ff15bff/?a=1988&br=1764&bt=882&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3Adnz7Th2IKGlXq&l=20220126071241010245245011140A7CDA&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anNtd2g6Zm46OjMzZjgzM0ApPDY1aTU5Z2U7Nzo0Mzs5NWdmNmAwcjQwM2tgLS1kL2Nzcy0uNl8vYDReNC8yYGNiLzE6Yw%3D%3D&vl=&vr="  playsinline controls ></video>
                </div>
                <div class="flex flex-col gap-4 justify-end">
                    <div class="text-center">
                        <button class="rounded-full bg-gray-100 p-2 sm:p-3 mb-1 sm:mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <span class="text-xs font-bold block">1.6M</span>
                    </div>

                    <div class="text-center">
                        <button class="rounded-full bg-gray-100 p-2 sm:p-3 mb-1 sm:mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <span class="text-xs font-bold block">1.6M</span>
                    </div>

                    <div class="text-center">
                        <button class="rounded-full bg-gray-100 p-2 sm:p-3 mb-1 sm:mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                        </button>
                        <span class="text-xs font-bold block">1.6M</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {}
</script>

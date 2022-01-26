<template>
    <div class="inline-flex flex-col gap-4 border-b pb-8">
        <div class="flex flex-row items-start gap-4">
            <img src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a50a0eff18403fdbf1d0b25bc03976e5.jpeg?x-expires=1643191200&amp;x-signature=NtwHCdDuRENkzcbnoqaCbNdjC0I%3D" class="h-16 w-16 rounded-full cursor-pointer" @click="$router.push('/jl');">
            <span class="flex-1 pt-2 overflow-hidden">
                <span class="font-black inline-flex flex-col lg:flex-row items-end gap-2 cursor-pointer">
                    <span class="truncate overflow-hidden whitespace-nowrap flex flex-row items-center gap-1 hover:underline">
                        USERNAME
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </span>
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
            <div class="rounded h-full sm:h-[582px] max-h-[582px] max-w-[582px]">
                <video class="w-full h-full object-fit rounded" src="https://v16-webapp.tiktok.com/b86e7f367d381a2475c176334d509131/61f1417e/video/tos/useast2a/tos-useast2a-pve-0037-aiso/fb9795680b714c588601bec211a5fe1e/?a=1988&amp;br=1912&amp;bt=956&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3Adnz7Th5LBGlXq&amp;l=202201260641250102440750480E058DA6&amp;lr=tiktok&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=M3I5NDs6ZmVrOjMzZjgzM0ApM2g8OjdlNmQ8N2U0NDZoZ2dfajZxcjRncTBgLS1kL2NzczQuNS9eYGMyXmNhYl9hYWM6Yw%3D%3D&amp;vl=&amp;vr=" playsinline controls ></video>
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
</template>
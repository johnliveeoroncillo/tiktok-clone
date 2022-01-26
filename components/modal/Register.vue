<template>
    <div class="fixed top-0 right-0 w-screen h-screen modal-overlay z-20 flex items-start justify-center" v-if="show">
        <div class="absolute top-0 right-0 overflow-auto w-full h-full">
            <div class="bg-white rounded my-10 z-50 w-[90%] md:w-[60%] lg:w-[50%] xl:w-[30%] mx-auto relative">

                <div class="px-16 py-10 flex flex-col gap-10">
                    <span class="font-extrabold tracking-wide text-2xl block text-center">Sign up for Tiktok</span>

                    <button class="rounded-full p-2 bg-gray-100 absolute top-5 right-5 hover:bg-gray-200" @click="close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>


                    <div class="flex flex-col gap-3">

                        <button class="border rounded flex flex-row items-center">
                            <span class="border-r p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="p-3 font-bold text-[16px] text-center flex-1">Use email/phone/username</span>
                        </button>

                        <button class="border rounded flex flex-row items-center">
                            <span class="border-r p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="h-8 w-8">
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/>
                                    <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/>
                                </svg>
                            </span>

                            <span class="p-3 font-bold text-[16px] text-center flex-1">Continue with Facebook</span>
                        </button>

                        <button class="border rounded flex flex-row items-center">
                            <span class="border-r p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="h-8 w-8">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                                </svg>
                            </span>

                            <span class="p-3 font-bold text-[16px] text-center flex-1">Continue with Google</span>
                        </button>


                    </div>
                </div>

                <div class="border-t px-10 py-5 text-[14px]">
                    <span class="font-medium">Already have an account ? 
                        <span class="text-primary font-bold cursor-pointer" @click="$modal.show('login'); close();">Log in</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modal: 'register',
            show: false,
            options: {},
        }
    },
    mounted() {
        this.$modal.on(`show_${this.modal}`, this.showModal);
    },
    beforeDestroy() {
        this.$off(`show_${this.modal}`)
    },
    methods: {
        showModal(data) {
            this.options = data;
            this.show = true;
        },
        close() {
            this.show = false;
            this.options = {};
        },
    },
}
</script>

<style lang="scss" scoped>
.modal-overlay {
    &:after {
        background: #0000008c;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }
}
</style>
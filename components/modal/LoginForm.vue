<template>
    <div class="fixed top-0 right-0 w-screen h-screen modal-overlay z-20 flex items-start justify-center" v-if="show">
        <div class="absolute top-0 right-0 overflow-auto w-full h-full">
            <div class="bg-white rounded my-10 z-50 w-[90%] md:w-[60%] lg:w-[50%] xl:w-[30%] mx-auto relative">

                <div class="px-16 py-10 flex flex-col gap-10">

                    <button class="p-2 absolute top-5 left-5" @click="$modal.show('login'); close();">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <span class="font-extrabold tracking-wide text-2xl block text-center">
                        Login {{type}}
                    </span>

                    <button class="rounded-full p-2 bg-gray-100 absolute top-5 right-5 hover:bg-gray-200" @click="close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>


                    <div class="flex flex-col gap-10 items-center" v-if="options.type === 'qr'">

                        <img class="w-40 w-40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="qrcode">

                        <ol type="1" class="text-sm flex flex-col list-decimal">
                            <li>Open the TikTok app on your mobile device and tap <span class="font-bold">Discover</span></li>
                            <li>Tap  and scan QR code</li>
                            <li>Confirm your login on your mobile device</li>
                        </ol>
                    </div>

                    <div v-if="options.type === 'username'">
                        <div class="flex flex-col gap-1">
                            <label class="flex flex-row justify-between font-bold">
                                <span v-if="login_phone">Phone</span>
                                <span v-else>Email or Username</span>
                                <span class="text-sm cursor-pointer" @click="login_phone = !login_phone">{{login_phone ? 'Use email or username' : 'Login with phone'}}</span>
                            </label>

                            <div class="flex flex-col gap-2" v-if="login_phone">

                                <input type="text" class="border bg-gray-100 rounded py-2 px-4 w-full" placeholder="Phone number" />
                                
                                <div class="flex flex-row" v-if="login_code">
                                    <input type="text" class="border bg-gray-100 rounded-tl rounded-bl py-2 px-4 flex-1" placeholder="Enter 4-digit code" />
                                    <button class="border bg-white py-2 px-4 font-bold text-sm rounded-tr rounded-br">Send Code</button>
                                </div>
                                <div class="relative" v-else>
                                    <input :type="show_password ? 'text' : 'password'" class="border bg-gray-100 rounded py-2 pl-4 pr-12 w-full" placeholder="Password" />

                                    <span class="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4" @click="show_password = !show_password">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="show_password">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </span>
                                </div>

                                <div class="flex flex-row gap-4">
                                    <small class="tracking-wide text-xs font-bold cursor-pointer border-r pr-4" v-if="!login_code">Forgot Password</small>
                                    <small class="tracking-wide text-xs font-bold cursor-pointer" @click="login_code = !login_code">Login with {{login_code ? 'password' : 'code'}}</small>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2" v-else>
                                <input type="text" class="border bg-gray-100 rounded py-2 px-4 w-full" placeholder="Email or Username" />
                                <div class="relative">
                                    <input :type="show_password ? 'text' : 'password'" class="border bg-gray-100 rounded py-2 pl-4 pr-12 w-full" placeholder="Password" />

                                    <span class="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4" @click="show_password = !show_password">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="show_password">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </span>
                                </div>
                                <small class="tracking-wide text-xs font-bold cursor-pointer border-r pr-4">Forgot Password</small>

                                <button class="rounded bg-primary text-white py-3 mt-2 text-center" disabled>Log in</button>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="border-t px-10 py-5 text-[14px]">
                    <span class="font-medium">Don't have an account ? 
                        <span class="text-primary font-bold cursor-pointer" @click="$modal.show('register'); close();">Sign Up</span>
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
            modal: 'login_form',
            show: false,
            options: {},
            login_phone: true,
            login_code: true,
            show_password: false,
        }
    },
    computed: {
        type() {
            switch(this.options.type) {
                case "qr":
                    return "with QR Code"

                default:
                    return "";
            }
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
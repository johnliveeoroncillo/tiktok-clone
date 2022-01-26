<template>
    <div class="overflow-hidden flex flex-col w-full h-screen max-w-[1150px] mx-auto">
        <template-header />

        <div class="main flex-1 flex flex-row justify-center pt-[63px] w-full">
            <template-sidenav />
            <perfect-scrollbar class="absolute w-full lg:w-[692px]">
                <nuxt />
            </perfect-scrollbar>
        </div>

        <ModalLogin />
        <ModalLoginForm />
        <ModalRegister />
        <ModalRegisterForm />
    </div>
</template>

<script>
export default {
    beforeMount() {
        this.initWidth();
    },
    mounted() {
        window.addEventListener('resize', this.initWidth, true);
    },
    methods: {
        initWidth() {
            const container = document.getElementsByClassName('main');
            if(!container.length) return;

            const width = container[0].offsetWidth;
            const header = document.getElementsByTagName('header');
            if(!header.length) return;

            document.getElementById('header-main').style.width = `${width}px`;
        }
    }
}
</script>

<style>

</style>
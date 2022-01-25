<template>
    <div class="flex flex-row gap-5">
        <template-sidenav />
        <main class="flex-1 bg-black relative">
            <div class="absolute w-full overflow-auto">
                <div class="block text-white" v-for="d in 100" :key="d">
                    {{d}}
                </div>
            </div>
        </main>
    </div>
</template>
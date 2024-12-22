<script setup>
import { ModalsContainer } from 'vue-final-modal'
</script>

<template>
    <TheHeader />

    <main class="bg-white max-w-screen-lg m-auto px-3">
        <slot />
    </main>

    <TheFooter />

    <ModalsContainer />
</template>

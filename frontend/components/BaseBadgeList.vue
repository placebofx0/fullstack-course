<script setup>
const props = defineProps({
    badges: Array,
});
</script>

<template>
    <ul class="[&>li]:inline-block">
        <li
            class="mr-1 mt-1 md:mr-2 md:mt-2"
            v-for="item in badges"
        >
            <BaseBadgeItem>{{ item }}</BaseBadgeItem>
        </li>
    </ul>
</template>
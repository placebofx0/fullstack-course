<script setup>
import moment from 'moment';

defineProps({
    cover: String,
    title: String,
    excerpt: String,
    badges: Array,
    datetime: String,
});
</script>

<template>
    <div class="shadow-md rounded-md overflow-hidden">
        <div
            class="bg-cover w-full h-[200px] bg-center"
            :style="`background-image: url('${cover}')`"
        >
        </div>
        <h4 class="font-bold text-primary pt-3 px-2.5 md:text-lg">{{ title }}</h4>
        <p class="text-xs px-2.5 pt-2 md:text-base">{{ excerpt }}</p>
        <div class="flex items-end justify-between p-2.5">
            <BaseBadgeList :badges="badges" />
            <span class="text-sm pl-2 min-w-[100px]">{{ datetime }}</span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    size: String,
    variant: String,
    onClick: Function,
});

const elementSizeClass = useActionableSizeClass(props.size);

const elementVariantClass = useActionableVariantClass(props.variant);
</script>

<template>
    <NuxtLink :class="[elementVariantClass, elementSizeClass]">
        <slot />
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    size: String,
    variant: String,
});

const elementSizeClass = useActionableSizeClass(props.size);

const elementVariantClass = useActionableVariantClass(props.variant);
</script>

<template>
    <button :class="[elementVariantClass, elementSizeClass]">
        <slot />
    </button>
</template>
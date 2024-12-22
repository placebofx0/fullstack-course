<script setup>
defineOptions({
    inheritAttrs: false,
});

defineProps({
    url: String,
})
</script>

<template>
    <img
        v-if="useIsValidUrl(url)"
        :src="url"
        v-bind="$attrs"
    >
    <slot
        v-else
        name="placeholder"
    >
        <IconPlaceholder v-bind="$attrs" />
    </slot>
</template>
<script setup>
defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    name: String,
    modelValue: String,
});

const { value, errorMessage } = useField(() => props.name, undefined, {
    syncVModel: true,
});

const style = computed(() => {
    if (errorMessage.value) {
        return 'w-full border-2 border-red rounded-md px-3 py-2 bg-white focus:outline-0';
    }

    return 'w-full border-2 border-tertiary rounded-md px-3 py-2 bg-white focus:border-secondary focus:outline-0';
})
</script>

<template>
    <div class="block mb-1">
        <input
            v-model="value"
            :class="style"
            v-bind="$attrs"
        />
        <BaseErrorMessage v-if="errorMessage">{{ errorMessage }}</BaseErrorMessage>
    </div>
</template>
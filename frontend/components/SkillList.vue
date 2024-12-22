<script setup>
defineProps({
    skills: Array,
    canEdit: Boolean,
});

defineEmits(['edit']);
</script>

<template>
    <h2 class="text-xl font-bold mb-3 flex justify-between">
        <span>Skills</span>
        <BaseButton
            v-if="canEdit"
            size="small"
            variant="secondary"
            @click="$emit('edit')"
        >
            Edit
        </BaseButton>
    </h2>
    <BaseBadgeList
        v-if="skills.length > 0"
        :badges="skills"
    />
    <span
        v-else
        class="text-grey"
    >
        None
    </span>
</template>
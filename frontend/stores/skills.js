import { defineStore } from 'pinia';
import { saveProfileAPI } from '@/repositories/profile';
import { useAuthStore } from './auth';

export const useSkillsStore = defineStore('skills', () => {
    const skills = ref([]);
    const editMode = ref(false);

    const hasSkills = computed(() => {
        return skills.value.length > 0
    });

    async function saveSkills(draftedSkills) {
        const authStore = useAuthStore();

        try {
            const { data: response, error, status } = await saveProfileAPI(draftedSkills, authStore.token);
            if (status == 'error') {
                throw new Error(error);
            }

            if (response.value.status) {
                editMode.value = false;

                skills.value = draftedSkills.skills;
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    function setSkills(newSkills) {
        skills.value = newSkills;
    }

    function enterEditMode() {
        editMode.value = true;
    }

    function enterViewMode() {
        editMode.value = false;
    }

    return {
        skills,
        hasSkills,
        editMode,
        setSkills,
        saveSkills,
        enterEditMode,
        enterViewMode,
    }
})
import { useProfileValidationSchema } from '#app/utils/validation';

export default ({ profileRepo }) => {
    const validateSchema = useProfileValidationSchema();

    function sanitizeProfile(profile) {
        const output = {};

        if (profile.overallSkills) {
            output.overallSkills = profile.overallSkills;
        }

        if (profile.experiences) {
            output.experiences = profile.experiences;
        }

        return output;
    }

    async function getProfile() {
        let profile;

        try {
            profile = await profileRepo.getProfile();

            if (!profile) {
                return {
                    overallSkills: [],
                    experiences: [],
                };
            }
        } catch (error) {
            throw new Error(error);
        }

        return {
            overallSkills: profile.overallSkills ?? [],
            experiences: profile.experiences ?? [],
        };
    }

    async function updateProfile(newProfile) {
        let id;

        try {
            const profile = await validateSchema.validate(newProfile);

            const sanitizedProfile = sanitizeProfile(profile);

            const updatedProfile = await profileRepo.updateProfile(sanitizedProfile);

            id = updatedProfile.id;
        } catch (error) {
            throw new Error(error);
        }

        return {
            id,
        };
    }

    return {
        getProfile,
        updateProfile,
    };
}
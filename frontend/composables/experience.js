export const useExperienceTypes = () => [
    { value: 'fulltime', name: 'Full-Time' },
    { value: 'parttime', name: 'Part-Time' },
    { value: 'contract', name: 'Contract' }
];

export const useExperienceType = (experienceType) => {
    const allTypes = useExperienceTypes();

    const founded = allTypes.filter((item) => item.value == experienceType)

    if (founded.length <= 0) {
        return experienceType;
    }

    return founded[0].name;
}
export const useActionableSizeClass = (size) => {
    switch (size) {
        case 'small':
            return 'text-xs px-4 py-2 space-x-2';

        case 'large':
        default:
            return 'text-base px-7 py-3 space-x-2';
    }
}

export const useActionableVariantClass = (theme) => {
    switch (theme) {
        case 'secondary':
            return 'text-center text-primary bg-transparent rounded-lg align-middle border-2 !py-1.5 border-primary [&>*]:align-middle hover:text-secondary hover:border-secondary active:text-dark-primary active:border-dark-primary';

        case 'danger':
            return 'text-center text-white bg-red rounded-lg align-middle shadow-md [&>*]:align-middle hover:bg-red active:shadow-inner active:shadow-dark-red active:bg-red';

        case 'disabled':
            return 'text-center text-grey bg-transparent rounded-lg align-middle border-2 !py-1.5 border-grey [&>*]:align-middle';

        case 'primary':
        default:
            return 'text-center text-white bg-primary rounded-lg align-middle shadow-md shadow-tertiary [&>*]:align-middle hover:bg-secondary active:shadow-inner active:shadow-darker-primary active:bg-dark-primary';
    }
}
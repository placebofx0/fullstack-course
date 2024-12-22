export const useCustomError = (error, callback) => {
    if (error.statusCode >= 400 && error.statusCode < 500) {
        return callback(error);
    }

    throw new Error(error);
}
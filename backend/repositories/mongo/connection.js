import mongoose from 'mongoose';

export default (url, options) => {
    return mongoose.createConnection(url, options);
}

import mongoose from 'mongoose';
const connectDB = (url) => {
    mongoose.connect(url).then(() => console.log('db conected'));
};

export default connectDB;

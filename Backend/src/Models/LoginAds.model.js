import mongoose from "mongoose";

const loginAdsSchema = new mongoose.Schema({

    adsImagePath: {
        type: String,
        required: true
    },

}, { timestamps: true });
const LoginAds = mongoose.model("LoginAds", loginAdsSchema);
export default LoginAds;
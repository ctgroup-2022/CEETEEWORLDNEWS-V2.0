import mongoose from "mongoose";

const SignUpAdsSchema = new mongoose.Schema({

    adsImagePath: {
        type: String,
        required: true
    },

}, { timestamps: true });
const SignupAds = mongoose.model("SignupAds", SignUpAdsSchema);
export default SignupAds;
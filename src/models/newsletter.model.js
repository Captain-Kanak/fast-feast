import mongoose from "mongoose";

// Define the Newsletter schema
const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create or retrieve the old Newsletter model
if (mongoose.models.Newsletter) {
  mongoose.deleteModel("Newsletter");
}

// Create and export the Newsletter model
const Newsletter = mongoose.model("Newsletter", newsletterSchema);

// Export the Newsletter model
export default Newsletter;

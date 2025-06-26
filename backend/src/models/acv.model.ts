import mongoose, { Schema } from "mongoose";

const acvSchema = new Schema(
  {
    count: {
      type: Number,
    },
    acv: {
      type: Number,
    },
    closed_fiscal_quarter: {
      type: String, 
    },
    ACV_Range: {
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

export const Acv = mongoose.model("Acv", acvSchema);
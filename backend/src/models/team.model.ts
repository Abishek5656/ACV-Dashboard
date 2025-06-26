import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema(
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
    Team: {
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

export const Team = mongoose.model("Team", teamSchema);
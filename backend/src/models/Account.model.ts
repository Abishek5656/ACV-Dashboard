import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema(
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
    Acct_Industry: {
        type: String,
    },
    query_key:{
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

export const Account = mongoose.model("Account", accountSchema);
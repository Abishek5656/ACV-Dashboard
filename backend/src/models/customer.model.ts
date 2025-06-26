import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema(
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

    Cust_Type: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export const Customer = mongoose.model("Customer", customerSchema);
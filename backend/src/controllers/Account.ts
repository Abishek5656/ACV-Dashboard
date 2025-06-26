import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Account } from "../models/Account.model.js";

import { Request, Response } from "express";

const getAllAccounts = asyncHandler(async (req: Request, res: Response) => {
  const accounts = await Account.aggregate([
    {
      $group: {
        _id: {
          closed_fiscal_quarter: "$closed_fiscal_quarter",
          Acct_Industry: "$Acct_Industry"
        },
        count: { $sum: "$count" },
        acv: { $sum: "$acv" }
      }
    },
    {
      $project: {
        _id: 0,
        closed_fiscal_quarter: "$_id.closed_fiscal_quarter",
        Acct_Industry: "$_id.Acct_Industry",
        count: 1,
        acv: 1,
        query_key: { $literal: "industry" }
      }
    },
    {
      $sort: {
        closed_fiscal_quarter: 1,
        Acct_Industry: 1
      }
    }
  ]);

  res.status(200).json(new ApiResponse(200, accounts));
});

export { getAllAccounts };

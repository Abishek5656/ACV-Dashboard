import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Acv } from "../models/acv.model.js";

import { Request, Response } from "express";

const getAllAcvs = asyncHandler(async (req: Request, res: Response) => {
  const acvData = await Acv.aggregate([
    {
      $group: {
        _id: {
          closed_fiscal_quarter: "$closed_fiscal_quarter",
          ACV_Range: "$ACV_Range"
        },
        count: { $sum: "$count" },
        acv: { $sum: "$acv" }
      }
    },
    {
      $project: {
        _id: 0,
        closed_fiscal_quarter: "$_id.closed_fiscal_quarter",
        ACV_Range: "$_id.ACV_Range",
        count: 1,
        acv: 1
      }
    },
    {
      $sort: {
        closed_fiscal_quarter: 1,
        ACV_Range: 1
      }
    }
  ]);

  res.status(200).json(new ApiResponse(200, acvData));
});

export { getAllAcvs };

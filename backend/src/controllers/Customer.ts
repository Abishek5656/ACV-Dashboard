import { Request, Response } from "express";
import { Customer } from "../models/customer.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



const getAllCustomers = asyncHandler(async (req: Request, res: Response) => {
  const customers = await Customer.aggregate([
    {
      $group: {
        _id: {
          closed_fiscal_quarter: "$closed_fiscal_quarter",
          Cust_Type: "$Cust_Type"
        },
        count: { $sum: 1 },    
        acv: { $sum: "$acv" }
      }
    },
    {
      $project: {
        _id: 0,
        closed_fiscal_quarter: "$_id.closed_fiscal_quarter",
        Cust_Type: "$_id.Cust_Type",
        count: 1,
        acv: 1
      }
    },
    {
      $sort: {
        closed_fiscal_quarter: 1,
        Cust_Type: 1
      }
    }
  ]);


  return res.status(200).json(new ApiResponse(200, customers, "Customer summary"));
});


export { getAllCustomers };

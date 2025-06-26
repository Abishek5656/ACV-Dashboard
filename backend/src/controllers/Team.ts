// controllers/getAllTeamMembers.ts
import { Request, Response } from "express";
import { Team } from "../models/team.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllTeamMembers = asyncHandler(async (req: Request, res: Response) => {
  const teamData = await Team.aggregate([
    {
      $group: {
        _id: {
          closed_fiscal_quarter: "$closed_fiscal_quarter",
          Team: "$Team"
        },
        count: { $sum: "$count" },
        acv: { $sum: "$acv" }
      }
    },
    {
      $project: {
        _id: 0,
        closed_fiscal_quarter: "$_id.closed_fiscal_quarter",
        Team: "$_id.Team", 
        count: 1,
        acv: 1
      }
    },
    {
      $sort: {
        closed_fiscal_quarter: 1,
        Team: 1
      }
    }
  ]);

  res.status(200).json(new ApiResponse(200, teamData, "Success"));
});

export { getAllTeamMembers };

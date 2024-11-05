import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader("Content-Type", "application/json");

    const aasa = {
      applinks: {
        apps: ["xyz.snowballtools.passkeys-exp-0001"],
      },
      webcredentials:{"apps":["xyz.snowballtools.passkeys-exp-0001"]},
      appclips:{}
    };

    res.status(200).json(aasa);
}

import type { NextApiResponse } from "next";

export default function handler(res: NextApiResponse) {
  res.setHeader("Content-Type", "application/json");

  const aasa = {
    applinks: {
      apps: ["xyz.snowballtools.passkeys-exp-0001"],
    },
    webcredentials: { apps: ["xyz.igloo.passkeys-exp-0001"] },
    appclips: {},
  };

  res.status(200).json(aasa);
}

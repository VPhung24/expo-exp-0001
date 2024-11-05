import type { NextApiResponse } from "next";

export default function handler(res: NextApiResponse) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const assetlinks = [
    {
      relation: [
        "delegate_permission/common.handle_all_urls",
        "delegate_permission/common.get_login_creds",
      ],
      target: {
        namespace: "android_app",
        package_name: "xyz.snowballtools.passkeys-exp-0001",
        sha256_cert_fingerprints: [],
      },
    },
  ];

  res.status(200).json(assetlinks);
}

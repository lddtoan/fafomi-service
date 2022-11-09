import * as user from "models/user";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = await user.login({
      email: "admin@email.com",
      password: "admin",
    });
    if (data) {
      res.status(200).json(data);
    }
    res.status(400);
  }
  res.status(405);
};

export default handler;

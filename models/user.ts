import * as bcrypt from "bcrypt";
import { db } from "./_firebase";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const ref = db.collection("user").doc(email);
    const user = await ref.get();
    if (user.exists) {
      if (await bcrypt.compare(password, user.data()?.password || "")) {
        return user.data();
      }
    }
  } finally {
    return null;
  }
};

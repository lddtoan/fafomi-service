import * as admin from "firebase-admin";
import config from "firebase.json";

if (!admin.apps) {
  admin.initializeApp({
    credential: admin.credential.cert(config as admin.ServiceAccount),
    databaseURL: process.env.DATABASE_URL,
  });
}

const db = admin.firestore();

export { db };

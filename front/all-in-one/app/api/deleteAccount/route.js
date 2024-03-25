import { connectDb } from "../../../lib/dbConnection";
import { User } from "../../../models/user";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { username, password } = await req.json();
    await connectDb();
    const res = await User.findOne({ username: username });
    if (res) {
      console.log("voulez vous réellement supprimer votre compte ?");
    }
  } catch (e) {
    console.log("erreur lors de la suppression de compte");
  }
}

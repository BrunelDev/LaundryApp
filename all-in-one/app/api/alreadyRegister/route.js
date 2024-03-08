import { connectDb } from "../../../lib/dbConnection";
import { User } from "../../../models/user";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { username } = await req.json();
    await connectDb();
    const user = await User.findOne({ username }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (e) {
    console.log("erreur api already");
  }
}

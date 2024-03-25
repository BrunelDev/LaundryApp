import { connectDb } from "../../../lib/dbConnection";
import { User } from "../../../models/user";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { username, password } = await req.json();
    await connectDb();
    const user = await User.findOne({ username, password }).select([
      "username",
      "password",
    ]);
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (e) {
    console.log("erreur api already");
  }
}

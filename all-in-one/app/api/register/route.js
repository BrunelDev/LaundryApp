import { NextResponse } from "next/server";
import { connectDb } from "../../../lib/dbConnection";
import { User } from "../../../models/user";
export async function POST(req) {
  try {
    const { username, password } = await req.json();
    console.log(username, password);
    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectDb();
    await User.create({ username, password: hashedPassword });
    console.log("Création de compte réussie");
    return NextResponse.json({ message: "User created" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ status: 500 });
  }
}

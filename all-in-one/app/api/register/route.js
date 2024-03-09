import { NextResponse } from "next/server";
import { bcrypt } from "bcryptjs";
import { connectDb } from "../../../lib/dbConnection";
import { User } from "../../../models/user";
export async function POST(req) {
  try {
    const { username, password } = await req.json();
    console.log(username, password);
    const hashedPassword = bcrypt.hash(password, 10);
    console.log(hashedPassword);
    await connectDb();
    await User.create({ username, password: hashedPassword });
    console.log("Création de compte réussie");
    return NextResponse({ message: "User created" }, { status: 200 });
  } catch (e) {
    console.log("erreur lors de la création de compte");
    return NextResponse({ status: 500 });
  }
}

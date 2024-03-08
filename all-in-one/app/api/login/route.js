import { NextResponse } from "next/server";
import { User } from "../../../models/user";
import { connectDb } from "../../../lib/dbConnection";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    console.log(username, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    await connectDb();
    await User.create({ username, password });
    console.log(username, password);
    return NextResponse.json({ message: "Form data posted" }, { status: 200 });
  } catch (e) {
    console.log(
      "erreur de l'envoie des données de l'api vers la base de donnée"
    );
    return NextResponse.json({ status: 500 });
  }
}

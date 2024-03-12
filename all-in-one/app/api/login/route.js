import { NextResponse } from "next/server";
import { User } from "../../../models/user";
import { connectDb } from "../../../lib/dbConnection";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    await connectDb();
    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(password, 10);
    let users = await User.find({
      username: username,
    });
    let isRegistered = false;

    for (const user of users) {
      const res = await bcrypt.compare(password, user.password);
      console.log(
        "user :",
        user.username,
        "password: ",
        user.password,
        "compare: ",
        res
      );
      if (res) {
        console.log(isRegistered);
        isRegistered = true;
        break;
      }
    }

    return NextResponse.json({ isRegistered }, { status: 200 });
  } catch (e) {
    console.log(
      "erreur de l'envoie des données de l'api vers la base de donnée",
      e
    );
    return NextResponse.json({ status: 500 });
  }
}
/*crypt:  $2b$10$krlgTGSHEKQ.ZOUns1kQpucQV005QAmZsxOPiRsaLXdCGU3Rl4gSG*/

"use client";
import { Navbar } from "../components/navbar2/navbar2";
import { signOut } from "next-auth/react";

export default function accueil() {
  return (
    <div>
      {" "}
      <Navbar />
      <button onClick={(e) => signOut({ callbackUrl: "/login" })}>
        Se deconnecter
      </button>
      ;
    </div>
  );
}

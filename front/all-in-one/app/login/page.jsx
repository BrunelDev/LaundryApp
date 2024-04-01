"use client";
import { FacebookLogo } from "../components/logo/logo";

import "../components/style/laundry.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { SigninForm } from "../components/register/register";
import { LoginForm } from "../components/login/login";
import { useShowFormStore } from "@/hooks/useStore";
import "./index.css";

export default function AuthPage() {
  const { showLoginForm, showSigninForm, setShowLoginForm, setShowSigninForm } =
    useShowFormStore();

  function showLogin(show) {
    setShowLoginForm(show);
    setShowSigninForm(!show);
  }
  function showSignin(show) {
    setShowSigninForm(show);
    setShowLoginForm(!show);
  }
  return (
    <div className="container">
      <div className="top">
        <img src="hero.png" alt="machine a laver" />
      </div>
      <div className="form-back">
        <h2>Welcome</h2>
        Bienvenue sur notre site ! 🌟 Nous sommes ravis de vous accueillir parmi
        nous ! 🎉 Que vous soyez un nouveau visiteur ou un client fidèle, votre
        présence est précieuse pour nous. Chez{" "}
        <p class="text-2xl text-blue-500">ALL IN ONE</p> Laverie, nous nous
        efforçons constamment de fournir une expérience exceptionnelle à nos
        visiteurs. Que ce soit pour découvrir nos produits, trouver des
        informations utiles ou simplement parcourir notre site, nous espérons
        que votre séjour sera agréable et enrichissant. N'hésitez pas à explorer
        notre site et à découvrir tout ce que nous avons à offrir. Si vous avez
        des questions, des commentaires ou des préoccupations, notre équipe est
        là pour vous aider. N'hésitez pas à nous contacter à tout moment.
        <br />
        <div className="mt-8">
          <input
            type="button"
            value="Créer un compte"
            className="button"
            onClick={(e) => {
              showSignin(true);
            }}
          />
          <br />
          <input
            type="button"
            value="Se connecter"
            className="button"
            onClick={() => {
              showLogin(true);
            }}
          />
        </div>
        <div className={showLoginForm ? "login-form" : "login-form hidden"}>
          <LoginForm />
        </div>
        <div className={showSigninForm ? "login-form" : "login-form hidden"}>
          <SigninForm />
        </div>
      </div>
    </div>
  );
}

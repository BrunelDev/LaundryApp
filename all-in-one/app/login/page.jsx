"use client";
import { FacebookLogo } from "../components/logo/logo";

import "../components/portfolioStyle/portfolio.css";
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime
        accusamus praesentium corporis harum, quaerat iusto? Dicta voluptatem
        nam consequatur in soluta ad dolorum, iure ratione, distinctio sunt
        ipsum commodi! <br />
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

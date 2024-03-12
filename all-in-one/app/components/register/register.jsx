"use client";
import { Fragment } from "react";
import { FacebookLogo, GmailLogo } from "../logo/logo";
import "../style/laundry.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useShowFormStore } from "@/hooks/useStore";

export function SigninForm() {
  const { showLoginForm, showSigninForm, setShowLoginForm, setShowSigninForm } =
    useShowFormStore();
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [hide, setHide] = useState(false);

  function showLogin(show) {
    setShowLoginForm(show);
    setShowSigninForm(!show);
  }
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (username === "" || password === "" || ConfirmPassword === "") {
        setError("Tous les champs sont obligatoires !");
        return;
      }
      if (password !== ConfirmPassword) {
        setError("Mots de passes non identiques");
        return;
      }

      const res = await fetch("api/alreadyRegister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.error) {
        console.log("erreur lors de la connexion");
        return;
      }
      const user = await res.json();
      if (user.user !== null) {
        console.log(user);
        setError("L'utilisateur existe déjà");
        return;
      }
      const resB = await fetch("api/register", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!resB.ok) {
        console.log("données non postées");
        return;
      }

      showLogin(true);
      return;
    } catch (e) {
      console.log("erreur lors de la connexion a l'api");
      return;
    }
  }

  return (
    <>
      <div
        className={
          showSigninForm
            ? "register-container"
            : hide
            ? "register-container-hide"
            : "register-container register-container-animated"
        }
        onAnimationEnd={() => {
          setHide(true);
        }}
      >
        Bonjour...
        <div className="flex">
          <h2>Inscription</h2>
          <svg
            onClick={(e) => {
              setHide(false);
              setShowSigninForm(false);
            }}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6375 8.3625C17.5213 8.24534 17.3831 8.15235 17.2308 8.08888C17.0784 8.02542 16.9151 7.99275 16.75 7.99275C16.585 7.99275 16.4216 8.02542 16.2693 8.08888C16.117 8.15235 15.9787 8.24534 15.8625 8.3625L13 11.2375L10.1375 8.3625C9.90216 8.12712 9.58291 7.99488 9.25004 7.99488C8.91716 7.99488 8.59792 8.12712 8.36254 8.3625C8.12716 8.59788 7.99492 8.91712 7.99492 9.25C7.99492 9.58288 8.12716 9.90212 8.36254 10.1375L11.2375 13L8.36254 15.8625C8.24538 15.9787 8.15238 16.117 8.08892 16.2693C8.02546 16.4216 7.99279 16.585 7.99279 16.75C7.99279 16.915 8.02546 17.0784 8.08892 17.2307C8.15238 17.383 8.24538 17.5213 8.36254 17.6375C8.47874 17.7547 8.61699 17.8477 8.76932 17.9111C8.92164 17.9746 9.08502 18.0072 9.25004 18.0072C9.41505 18.0072 9.57843 17.9746 9.73076 17.9111C9.88308 17.8477 10.0213 17.7547 10.1375 17.6375L13 14.7625L15.8625 17.6375C15.9787 17.7547 16.117 17.8477 16.2693 17.9111C16.4216 17.9746 16.585 18.0072 16.75 18.0072C16.9151 18.0072 17.0784 17.9746 17.2308 17.9111C17.3831 17.8477 17.5213 17.7547 17.6375 17.6375C17.7547 17.5213 17.8477 17.383 17.9111 17.2307C17.9746 17.0784 18.0073 16.915 18.0073 16.75C18.0073 16.585 17.9746 16.4216 17.9111 16.2693C17.8477 16.117 17.7547 15.9787 17.6375 15.8625L14.7625 13L17.6375 10.1375C17.7547 10.0213 17.8477 9.88304 17.9111 9.73072C17.9746 9.5784 18.0073 9.41501 18.0073 9.25C18.0073 9.08498 17.9746 8.9216 17.9111 8.76928C17.8477 8.61695 17.7547 8.4787 17.6375 8.3625ZM21.8375 4.1625C20.6845 2.96862 19.3051 2.01634 17.7801 1.36123C16.255 0.70612 14.6148 0.361292 12.9551 0.346869C11.2953 0.332447 9.64932 0.648718 8.11311 1.27723C6.57691 1.90574 5.18126 2.8339 4.0076 4.00756C2.83394 5.18122 1.90578 6.57687 1.27727 8.11307C0.648756 9.64928 0.332485 11.2953 0.346908 12.955C0.36133 14.6148 0.706158 16.255 1.36127 17.7801C2.01638 19.3051 2.96866 20.6844 4.16254 21.8375C5.31562 23.0314 6.69493 23.9837 8.21998 24.6388C9.74503 25.2939 11.3853 25.6387 13.045 25.6531C14.7048 25.6676 16.3508 25.3513 17.887 24.7228C19.4232 24.0943 20.8188 23.1661 21.9925 21.9924C23.1661 20.8188 24.0943 19.4231 24.7228 17.8869C25.3513 16.3507 25.6676 14.7047 25.6532 13.045C25.6387 11.3852 25.2939 9.74499 24.6388 8.21994C23.9837 6.69489 23.0314 5.31558 21.8375 4.1625ZM20.075 20.075C18.4401 21.7118 16.2882 22.731 13.986 22.9591C11.6838 23.1872 9.37379 22.6101 7.44944 21.326C5.52509 20.0419 4.10549 18.1303 3.4325 15.9169C2.75952 13.7034 2.87479 11.3252 3.75868 9.18723C4.64257 7.04928 6.24038 5.28393 8.2799 4.19195C10.3194 3.09997 12.6745 2.74891 14.9438 3.19859C17.2131 3.64827 19.2563 4.87086 20.7253 6.65808C22.1943 8.44529 22.9982 10.6865 23 13C23.0045 14.3141 22.7483 15.6161 22.2462 16.8305C21.7441 18.0449 21.0062 19.1477 20.075 20.075Z"
              fill="#EF5858"
            />
          </svg>
        </div>
        <form action="" method="POST" onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <legend>username/email</legend>
            <input
              type="text"
              placeholder="Username"
              required={true}
              value={username}
              onChange={(e) => {
                setError("");
                setUsername(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Mot de passe</legend>
            <div className="flex relative">
              <input
                type="password"
                placeholder="Password"
                required={true}
                value={password}
                minLength={8}
                onChange={(e) => {
                  setError("");
                  setPassword(e.target.value);
                }}
              />
              <svg
                className="lock"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z"
                  fill="#A0936B"
                />
              </svg>
            </div>
          </fieldset>
          <fieldset>
            <legend>Confirmez votre mot de passe</legend>
            <div className="flex relative">
              <input
                type="password"
                placeholder="Confirm password"
                required={true}
                value={ConfirmPassword}
                minLength={8}
                onChange={(e) => {
                  setError("");
                  setConfirmPassword(e.target.value);
                }}
              />
              <svg
                className="lock"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z"
                  fill="#A0936B"
                />
              </svg>
            </div>
          </fieldset>

          <input type="submit" value="S'inscrire" className="register-button" />
        </form>
        {error != "" && <span className="form-error">{error}</span>}
        <div className="already-have-account">
          Vous avez déjà un compte ?{" "}
          <span className="text-red-400 login-link">S'inscrire</span>
          <br />
          <span className="text-center">or</span>
          <div className="logo-for-login">
            <div className="mr-6">
              <FacebookLogo />
            </div>
            <div>
              <GmailLogo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

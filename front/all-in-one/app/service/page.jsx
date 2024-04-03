"use client";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import "./service.css";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import Link from "next/link";
export default function Service() {
  const [value, setValue] = useState(12.5);
  const label = `${Math.floor(value) * 1000} FCFA`;
  const [pound, setPound] = useState(5);
  const increase = () => {
    if (value < 100) {
      setValue((v) => v + 2.5);
      setPound((v) => v + 1);
    } else {
      alert("Le maximum est de 40 kg!");
    }
  };
  const decrease = () => {
    if (value > 2.5) {
      setValue((v) => v - 2.5);
      setPound((v) => v - 1);
    } else {
      alert("Le mininmum est de 5 kg!");
    }
  };
  function changeInput(input) {
    if (!/^\d+$/.test(input)) {
      return;
    } else {
      input = parseInt(input);
      if (input > 40) {
        alert("le maximum est 40 kg !");
        setPound(40);
        return;
      }
      setPound(input);
      return;
    }
  }
  return (
    <div>
      <Navbar />
      <div className="mt-20 ml-4">
        <span className="title">Lavage Séchage</span> <br />
        <span className="text">A partir de 5000FCFA</span>
      </div>
      <Link href="/weightSimulator">
        <div className="register">
          Enregistrer votre linge({" "}
          <span className="text-red-500">Facultatif</span>
          ) <br />
          <span className="text">
            Afin d'assurer un suivi optimal de votre linge, nous vous
            recommandons d'enregistrer les différentes pièces à traiter.
          </span>
        </div>
      </Link>

      <div className="jauge">
        <CircularProgressbarWithChildren
          value={value}
          styles={{
            trail: {
              stroke: "#f7feff",
            },
          }}
        >
          <div style={{ fontSize: 12, marginTop: -5 }}>
            <strong>{label}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="flex justify-between quantifier">
        <CircleMinus
          color="#3cb6c4"
          className="cursor-pointer"
          onClick={() => {
            decrease();
          }}
        />
        <input
          className="inputPound"
          type="text"
          value={pound}
          onChange={(e) => {
            changeInput(e.target.value);
          }}
        />

        <CirclePlus
          color="#3cb6c4"
          className="cursor-pointer"
          onClick={() => {
            increase();
          }}
        />
      </div>
      <div className="bottom">
        <span>Prix</span>
        <div className="flex justify-between">
          <span>{label}</span>
          <input type="button" value="Valider" className="validation" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

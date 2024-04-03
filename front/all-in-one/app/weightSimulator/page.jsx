"use client";
import { title } from "process";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { Quantifier } from "../components/icons/SimulatorIcons";
import {
  Cap,
  Tank,
  Bra,
  Boxer,
  Shirt,
  Jacket,
  Vest,
  Dress,
  Skirt,
  Trouser,
  Jean,
  Socket,
} from "../components/icons/clothesIcons";
import { useState } from "react";
import { UseWeigth } from "@/context/useStore";
import "./weightSimulator.css";
export default function WeightSimulator() {
  const { quantity, weight, setQuantity, setWeight } = UseWeigth();
  const increaseLaundry = () => {
    setQuantity(1);
    setWeight(1);
  };
  const icons = [
    [<Cap />, 0.05],
    [<Tank />, 0.1],
    [<Bra />, 0.1],
    [<Boxer />, 0.075],
    [<Shirt />, 0.15],
    [<Jacket />, 0.6],
    [<Vest />, 0.75],
    [<Dress />, 0.55],
    [<Skirt />, 0.35],
    [<Trouser />, 0.55],
    [<Jean />, 0.5],
    [<Socket />, 0.1],
  ];
  const clothes = [
    "Casquette",
    "Débardeur",
    "Soutien-gorge",
    "Boxer/Slip",

    "Chemise",
    "Veste",
    "Gilet",
    "Robe",
    "Short/Jupe",
    "Pantalon",
    "Jean",
    "Chaussetes",
  ];
  let Q = [];
  icons.map((a, index) => {
    Q.push(
      <div className="mx-8">
        <Quantifier icon={a[0]} title={clothes[index]} weightValue={a[1]} />
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="mt-3">{Q.map((q) => q)}</div>
      <div className="flex justify-between ml-8">
        <div className="flex mt-8">
          <div>
            <span className="total mr-8">Poids Total</span> <br />
            {Math.round(weight)} Kg
          </div>

          <div className="mb-10">
            <span className="total">Quantité de linge</span> <br />
            {quantity} pièce(s)
          </div>
        </div>
        <br />
        <input type="button" value="Valider" className="validation" />
      </div>

      <Footer />
    </div>
  );
}

"use client";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { UseWeigth } from "@/context/useStore";
export function Quantifier({ icon, title, weightValue }) {
  const [number, setNumber] = useState(0);
  const { quantity, weight, setQuantity, setWeight } = UseWeigth();

  return (
    <div className="flex justify-between my-3">
      <div className="flex">
        {title} <div className="absolute left-40">{icon}</div>
      </div>

      <div className="flex">
        <CircleMinus
          color="#3cb6c4"
          onClick={() => {
            if (number > 0) {
              setNumber((v) => v - 1);
              setQuantity(-1);
              setWeight(-weightValue);
            }
          }}
        />

        <input
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            setQuantity(number);
          }}
          className="bg-transparent text-center w-10 outline-none"
        />

        <CirclePlus
          color="#3cb6c4"
          onClick={() => {
            setNumber((v) => v + 1);
            setQuantity(1);
            setWeight(weightValue);
          }}
        />
      </div>
    </div>
  );
}

"use client";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
export function Quantifier({ icon, title }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex justify-between">
      <div>
        {icon} {title}
      </div>

      <div className="flex">
        <CircleMinus
          color="#3cb6c4"
          onClick={() => {
            if (quantity > 0) {
              setQuantity((v) => v - 1);
            }
          }}
        />

        <input
          type="text"
          value={quantity}
          className="bg-transparent text-center w-10 outline-none"
        />

        <CirclePlus
          color="#3cb6c4"
          onClick={() => {
            setQuantity((v) => v + 1);
          }}
        />
      </div>
    </div>
  );
}

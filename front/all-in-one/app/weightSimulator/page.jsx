import { Quantifier } from "../components/icons/SimulatorIcons";
import {
  Cap,
  Tank,
  Bra,
  Boxer,
  Set,
  Shirt,
  Jacket,
  Vest,
  Dress,
  Skirt,
  Trouser,
  Jean,
  Socket,
} from "../components/icons/clothesIcons.jsx";
export default function WeightSimulator() {
  const icons = [];
  const cloths = [
    "Casquette",
    "Bonnet de bain",
    "Débardeur",
    "Soutien-gorge",
    "Boxer/Slip",
    "Ensemble(haut+ bas)",
    "T-shirt/Polo",
    "Chemise",
    "Veste",
    "Gilet",
    "Robe",
    "Short/Jupe",
    "Pantalon",
    "Jean",
    "Chaussetes(paire)",
  ];
  return (
    <div>
      <Quantifier icon={"+"} title={"Casquette"} />
    </div>
  );
}

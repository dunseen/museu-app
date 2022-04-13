import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import "./specieCard.style.scss";

const SpecieCard: React.FC = () => {
  return (
    <div className="specie-card">
      <span>NOME</span>

      <div>
        <p>SAIBA MAIS</p>
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

export default SpecieCard;

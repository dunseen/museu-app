import React from "react";
import Button from "@mui/material/Button";
import { useMainContext } from "../../context/MainContext";

interface CardFilterProps {
  title: string;
}

const CardFilter: React.FC<CardFilterProps> = ({ title, children }) => {
  const { handleRenderList } = useMainContext();
  return (
    <div className="cardfilter-container">
      <h1>{title}</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {children}
        <Button onClick={handleRenderList} variant="contained">
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default CardFilter;

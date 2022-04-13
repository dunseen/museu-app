import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import CardFilter from "../CardFilter";

import list from "../../mock/list.json";

interface FilmOptionType {
  title: string;
  year: number;
}

const defaultProps = {
  options: list,
  getOptionLabel: (option: FilmOptionType) => option.title,
};

const Card2: React.FC = () => {
  return (
    <CardFilter title="Filtro por morfologia">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <Autocomplete
          {...defaultProps}
          autoComplete
          includeInputInList
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Categoria" variant="standard" />
          )}
        />
        <Autocomplete
          {...defaultProps}
          autoComplete
          includeInputInList
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Resultado da categoria"
              variant="standard"
            />
          )}
        />
      </div>
    </CardFilter>
  );
};
export default Card2;

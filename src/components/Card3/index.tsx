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

const Card3: React.FC = () => {
  return (
    <CardFilter title="Filtro por espécie">
      <Autocomplete
        {...defaultProps}
        autoComplete
        includeInputInList
        freeSolo
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Digite um nome"
            variant="standard"
          />
        )}
      />
      <Autocomplete
        {...defaultProps}
        autoComplete
        includeInputInList
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Metamorfose" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        autoComplete
        includeInputInList
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Fase" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        autoComplete
        includeInputInList
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Habitat" variant="standard" />
        )}
      />
    </CardFilter>
  );
};
export default Card3;

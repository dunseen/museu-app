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

const Card1: React.FC = () => {
  return (
    <CardFilter title="Filtro por classificação">
      <Autocomplete
        {...defaultProps}
        id="auto-complete2"
        autoComplete
        includeInputInList
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Classe" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete3"
        autoComplete
        includeInputInList
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Ordem" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete3"
        autoComplete
        includeInputInList
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Gênero" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete3"
        autoComplete
        includeInputInList
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label="Família" variant="standard" />
        )}
      />
    </CardFilter>
  );
};
export default Card1;

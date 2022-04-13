import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { BiSearch } from "react-icons/bi";

import list from "../mock/list.json";

export default function TagsSearch() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        height: "fit-content",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Autocomplete
        multiple
        id="tags-filled"
        sx={{ width: "100%" }}
        options={list.map((option) => option.title)}
        defaultValue={[list[13].title]}
        freeSolo
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip variant="filled" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Busca por tags"
            placeholder="Adicione ou selecione uma tag"
          />
        )}
      />
      <IconButton size="medium">
        <BiSearch size={25} />
      </IconButton>
    </div>
  );
}

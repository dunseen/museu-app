import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";
import { BiSearch } from "react-icons/bi";

import list from "../mock/list.json";
import { useMainContext } from "../context/MainContext";

export default function TagsSearch() {
  const { handleRenderList } = useMainContext();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "fit-content",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {/* <Autocomplete
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
      /> */}
      <IconButton size="medium" onClick={handleRenderList}>
        <BiSearch size={25} />
      </IconButton>
    </div>
  );
}

import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

const SearchBar = (props) => {
  const { perFiltered } = props;

  return (
    <Input
      color="Black"
      borderRadius="28px"
      placeholder="Buscar tarea"
      onChange={(e) => {
        perFiltered(e.target.value);
      }}
    />
  );
};

export default SearchBar;

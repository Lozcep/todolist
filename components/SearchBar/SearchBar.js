import React, { useState } from "react";

const SearchBar = (props) => {
  const { perFiltered } = props;

  return (
    <input
      className="form-control form-control-lg mb-3"
      placeholder="Buscar tarea"
      onChange={(e) => {
        perFiltered(e.target.value);
      }}
    />
  );
};

export default SearchBar;

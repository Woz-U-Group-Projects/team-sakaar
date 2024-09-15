import React, { useState } from "react";

function capitalizeAndFormat(whatToFormat) {
  let build = "";
  const [Built, setBuilt] = useState("");

  const words = whatToFormat.split(" ");

  words.forEach(word => {
    const [firstWord, rest] = word;
    build += `${firstWord.toUpperCase()}${rest}`;
  });

  setBuilt(build);
  console.log("Built - ", Built);

  return Built;
}

export default capitalizeAndFormat;

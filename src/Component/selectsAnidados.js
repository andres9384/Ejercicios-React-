import React, { useState } from "react";
import SelectList from "./selectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN ="d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";
  return (
    <div>
      <h2>Select Anidados </h2>
      <h3>Colombia</h3>
      <SelectList
        url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
        title="estado"
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />

      {state && (
        <SelectList
          url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          title="municipios"
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          title="colonia"
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;





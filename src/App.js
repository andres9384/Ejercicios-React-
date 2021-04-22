import CrudAPI from "./Component/crudAPI";
import CrudApp from "./Component/crudApp";
import SelectsAnidados from "./Component/selectsAnidados";
import SongSearch from "./Component/songSearch";

function App() {
  return (
    <div >
      <h1> Ejercicios con React</h1>
      <SelectsAnidados/>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudAPI/>
      <hr/>
      <CrudApp/>
      <hr />

    </div>
  );
}

export default App;

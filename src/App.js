
import './App.css';
// Componentes
import Navbar from'./Components/navbar/navbar'
import ItemList from './Components/ItemListContainer/ItemList';
// Estilos
import './Components/styles/itemList.css';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ItemList
         dato1='Coders'
      ></ItemList>
    </div>
  );
}

export default App;

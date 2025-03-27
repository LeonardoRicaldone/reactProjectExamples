import { Routes, Route } from 'react-router-dom';
/*import Home from './pages/Home';
import About from './pages/About';    ejemplos de rutas*/
import Card from "../src/components/Todo/card"
import Inputs from "./components/calculadora/inputs";
import "./App.css";
import Todo from "./components/List/todoList";
import RegistroEstudiante from "./components/ResgistroEstudiantes/registroEstudiante";

function App() {
  return (
    <>

    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>


      <Card
        titulo={"Hola, mi nombre es Leonardo"}
        descripcion={
          "Soy un estudiante de programacion que esta en su tercer año bachillerato en un instituto Tecnico, me gustan mucho programar, jugar videojuegos y hacer deporte"
        }
        videojuegos={
          "Me gustan todos los juego pero si tengo que elejir seria Stardey Valley o Terraria, entre los que juego estan alien warframe, mario 64 y Don't Starve Together"
        }
        deporte={
          "Entre los deportas que practico estan: Basketball y natacion, sobre todo me gusta mas nadar, desde pequeño me gustaba"
        }
        comida={"Entre la comida que me gusta es la carne asada y la pizza"}
      />
      <br />
      <br />
      <Inputs />
      <br />
      <br />
      <Todo/>
      <br />
      <br />
      <RegistroEstudiante/>
    </>
  );
}

export default App;

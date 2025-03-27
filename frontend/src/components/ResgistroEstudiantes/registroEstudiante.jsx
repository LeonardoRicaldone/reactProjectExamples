import React, { useState } from "react";
import "./resgistroEstudiante.css";

const RegistroEstudiante = () => {

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [carnet, setCarnet] = useState("");
    const [estudiantes, setEstudiantes] = useState([]);

    const agregarEstudiante = () => {
        if (nombre.trim() === "" || edad.trim() === "" || carnet.trim() === "") {
            alert("Por favor, complete todos los campos");
            return;
        }

        const nuevoEstudiante = {
            id: Date.now(), 
            nombre,
            edad,
            carnet
        };

        setEstudiantes([...estudiantes, nuevoEstudiante]);

        setNombre("");
        setEdad("");
        setCarnet("");
    };

    return (
        <div className="container">
            <h1>Registro de Estudiantes</h1>
            
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Carnet"
                    value={carnet}
                    onChange={(e) => setCarnet(e.target.value)}
                />
            </div>

            <button 
                className="agregar-btn" 
                onClick={agregarEstudiante}
            >
                Agregar
            </button>

            <h2>Listado:</h2>
            <div className="student-list">
                {estudiantes.map((estudiante) => (
                    <div key={estudiante.id} className="student-item">
                        <span>Nombre: {estudiante.nombre}</span>
                        <span>Edad: {estudiante.edad}</span>
                        <span>Carnet: {estudiante.carnet}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RegistroEstudiante;
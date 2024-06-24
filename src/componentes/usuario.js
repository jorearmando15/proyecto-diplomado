import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Error al obtener usuarios', error);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Lista de Usuarios</h1>
            <ul className="list-group">
                {usuarios.map(usuario => (
                    <li key={usuario.id} className="list-group-item">
                        <strong>{usuario.nombre}</strong> - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Usuarios;

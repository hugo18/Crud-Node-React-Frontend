import { useState } from "react";
import axios from 'axios';
export default function TableList({handleOpen, searchTerm, tableData, setTableData, error, setError}){
    
    const filteredData = tableData.filter(client => 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.job.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Você deseja deletar esse cliente?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/api/clients/${id}`); // API call to delete client
                setTableData((prevData) => prevData.filter(client => client.id !== id)); // Update state
            } catch (err) {
                setError(err.message); // Handle any errors
            }
        }
    };
    
    return (
        <>
        {error && <div className="alert alert-error">{error}</div>}
        <div className="overflow-x-auto">
            <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Nome</th>
                <th>Email</th>
                <th>Emprego</th>
                <th>Avaliação</th>
                <th>Estado</th>

            </tr>
            </thead>
            <tbody className="hover">
            {/* row 1 */}
            {filteredData.map((client) => (
                 <tr key={client.id}>
                 <th>{client.id}</th>
                 <td>{client.name}</td>
                 <td>{client.email}</td>
                 <td>{client.job}</td>
                 <td>{client.rate}</td>
                 <td>
                    <button className={`btn rounded-full w-20 ${client.isactive ? `btn-accent` : `btn-outline btn-accent`}`}>
                        {client.isactive ? "Ativo" : "Inativo"}
                    </button>
                 </td>
                 <td>
                    <button className="btn btn-primary" onClick={() => handleOpen('edit', client)}>
                        Atualizar
                    </button>
                 </td>
                 <td>
                    <button className="btn btn-secondary" onClick={() => handleDelete(client.id)}>
                        Apagar
                    </button>
                 </td>   
                </tr>

            ))}
           
            </tbody>
            </table>
        </div>
        </>
    );
}
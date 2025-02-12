export default function TableList({handleOpen}){
    const clients = [{id: 1, name: 'João da Silva', email:'joaoSilva@gmail.com', job:'Dev', rate:'100', isActive:true},
        {id: 2, name: 'Pedro da Silva', email:'pedroSilva@gmail.com', job:'Dev1', rate:'101', isActive:true},        
        {id: 3, name: 'Gabriel da Silva', email:'gabrielSilva@gmail.com', job:'Dev2', rate:'102', isActive:false}
    ]
    
    return (
        <>
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
            {clients.map((client) => (
                 <tr>
                 <th>{client.id}</th>
                 <td>{client.name}</td>
                 <td>{client.email}</td>
                 <td>{client.job}</td>
                 <td>{client.rate}</td>
                 <td>
                    <button className={`btn rounded-full w-20 ${client.isActive ? `btn-accent` : `btn-outline btn-accent`}`}>
                        {client.isActive ? "Ativo" : "Inativo"}
                    </button>
                 </td>
                 <td>
                    <button className="btn btn-primary" onClick={() => handleOpen('edit')}>
                        Atualizar
                    </button>
                 </td>
                 <td>
                    <button className="btn btn-secondary">
                        Apagar
                    </button>
                 </td>   
                </tr>

            ))}
           
            </tbody>
            </table>
        </div>
        </>
    )
}
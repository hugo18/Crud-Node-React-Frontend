import { useState } from "react"

export default function ModalForm({isOpen, onClose, modal, onSubimit}){
    const [rate, setRate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState(false);

    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Ativo');
    };
   
    const handleSubimit = (e) => {
        e.preventDefault();
        onClose();
    }; 
    return (
        <>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        
        <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
            <h3 className="font-bold text-lg py-4">{modal === 'edit'? 'Editar Cliente': 'Informações do Cliente'}</h3>
            <form method="dialog" onSubmit={handleSubimit}>
            
                <label className="input input-bordered flex items-center gap-2 my-4">
                    Nome
                    <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-4">
                    Email
                    <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-4">
                    Emprego
                    <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)}/>
                </label>
                <div className="flex mb-4 justify-between my-4">
                    <label className="input input-bordered flex items-center gap-2">
                        Classificação
                        <input type="number" className="grow" value={rate} onChange={(e) => setRate(e.target.value)} />
                    </label>
                    <select value={status ? 'Ativo':'Inativo'}  className="select select-bordered w-full max-w-xs mx-4" onChange={handleStatusChange}>
                        <option>Ativo</option>
                        <option>Inativo</option>
                    </select>
                </div>

                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                <button className = "btn btn-success">{modal === 'edit'? 'Salvar mudanças': 'Adicionar Cliente'}</button>
            </form>
           
           
        </div>
        </dialog>
        
        </>
    )
}
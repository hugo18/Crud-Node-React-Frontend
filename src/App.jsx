import { useState, useEffect } from 'react';
import './App.css';
import ModalForm from './components/ModalForm';
import Navbar from './components/Navbar';
import TableList from './components/TableList';
import axios from 'axios';

function App() {
  const [isOpen, setIsOpen] = useState(false);  
  const [modalMode, setModalMode] = useState('add');  
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState([]);
  const [clientData, setClientData] = useState(null);
  const [error, setError] = useState(null);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setIsOpen(true);
    setModalMode(mode);
  };
  
  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData); // Replace with your actual API URL
        console.log('Cliente adicionado:', response.data); // Log the response
        setTableData((prevData) => [...prevData, response.data]);
        // Optionally, update your state here to reflect the newly added client
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error); // Log any errors
        }
      console.log('modal = add');

    } else {
      console.log('Alterando cliente com ID:', clientData.id); // Log the ID being updated
            try {
                const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
                console.log('Cliente alterado:', response.data);
                setTableData((prevData) =>
                  prevData.map((client) => (client.id === clientData.id ? response.data : client))
                );
                } catch (error) {
                console.error('Erro ao alterar cliente:', error); 
            }

    }
  };

  const fetchData = async () => {
    try{
        const response = await axios.get('http://localhost:3000/api/clients');
        setTableData(response.data);
    }catch(err){
        setError(err.message);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      <Navbar onOpen={() => handleOpen('add', {name:'', email:'', job:'', rating: 0, isactive:false})} onSearch = {setSearchTerm}/>
      <TableList handleOpen={handleOpen} searchTerm = {searchTerm} tableData={tableData} setTableData={setTableData} error={error} setError={setError}/>
      <ModalForm isOpen={isOpen} onSubmit={handleSubmit} onClose={()=> setIsOpen(false)}
        modal={modalMode} clientData={clientData} setClientData={setClientData}
        />
    </>
  );
}

export default App

import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);  
  const [modalMode, setModalMode] = useState('add');  
  
  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };
  
  const handleSubimit = () => {
    if(modalMode === 'add'){
      console.log('modal mode Add');
    }else{
      console.log('modal mode Edit');
    }
  };
  return (
    <>
      <Navbar onOpen={() => handleOpen('add')}/>
      <TableList handleOpen={handleOpen}/>
      <ModalForm isOpen={isOpen} onSubimit={handleSubimit} onClose={()=> setIsOpen(false)}
        modal={modalMode} 
        />
    </>
  )
}

export default App

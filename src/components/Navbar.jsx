export default function Navbar({onOpen, onSearch}){
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };
  
  return (
        <>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          
          <a className="btn btn-ghost text-xl">Clientes</a>
        </div>
        <div className="navbar-center">
            <div className="form-control">
                <input  type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto"  onChange={handleSearchChange}/>
            </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={onOpen}>Adicionar Cliente</a>
         
        </div>
      </div>
    </>
    );
}
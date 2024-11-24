import React from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import "../index.css"


function Navbar() {
    const navigate = useNavigate();
  
    function navegar(ruta) {
      navigate("/" + ruta);
    }
  
    const startContent = (
      <React.Fragment>
        <span className="text-white font-bold text-2xl ml-2">Gestioná tus Productos</span>
      </React.Fragment>
    );
  
    const endContent = (
      <React.Fragment>
        {/* <Button
          label="Productos"
          icon="pi pi-box"
          className="mr-2 bg-orange-600 text-white border-none hover:cursor-pointer hover:bg-orange-400"
          onClick={() => navegar("")}
        /> */}
        <Button
          label="Salir"
          icon="pi pi-sign-out"
          className="mr-2 bg-orange-600 text-white border-none hover:cursor-pointer hover:bg-orange-400"
          onClick={() => navegar("")}
        />
      </React.Fragment>
    );

    return (
        <div className="w-full flex align-items-center m-0 p-0">
          <Toolbar
            className="bg-orange-500 w-full h-auto flex align-items-center border-none border-noround m-0"
            start={startContent}
            end={endContent}
          ></Toolbar>
        </div>
    );
}

export default Navbar;
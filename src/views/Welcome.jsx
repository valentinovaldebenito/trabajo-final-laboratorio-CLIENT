import { Button } from "primereact/button";
import "../index.css";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex justify-content-center align-items-center w-full h-screen bg-orange-500">
        <Card className="flex flex-column align-items-center">
          <div className="flex flex-column justify-content-center text-center gap-4">
            <span className="text-orange-500 font-semibold text-2xl">Bienvenido</span>
            <span className="text-orange-500 font-semibold text-xl">Pulse el siguiente botón para iniciar</span>
          </div>
          <div className="flex justify-content-center text-center p-4">
            <Button className="hover:bg-orange-400 hover:border-orange-500 bg-orange-500 border-orange-600" onClick={() => navigate("/products")}>Continuar</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Welcome;

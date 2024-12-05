import { Button } from "primereact/button";
import "../index.css";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";

function Welcome() {
  const navigate = useNavigate();
  const { correo, setCorreo } = useState();
  const { password, setPassword } = useState();

  return (
    <>
      <div className="flex flex-column justify-content-center align-items-center w-full h-screen bg-darker-blue gap-4 bg-gradient">
        <div className="flex flex-column justify-content-center text-center gap-4">
          <span className="text-semiwhite font-semibold text-2xl">Inicia Sesión</span>
        </div>
        <Card className="flex flex-column align-items-center h-20rem">
          <div className="flex flex-column gap-5 w-full">
            <div className="flex flex-column w-full">
              <FloatLabel>
                <InputText className="w-full" value={correo} onChange={(e) => setCorreo(e.target.value)} name="correo" />
                <label htmlFor="correo">Correo</label>
              </FloatLabel>
            </div>
            <div className="flex flex-column w-full">
              <FloatLabel>
                <Password
                  className="w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  feedback={false}
                  toggleMask
                  name="password"
                />
                <label htmlFor="password">Contraseña</label>
              </FloatLabel>
            </div>
          </div>
          <div className="flex justify-content-center text-center mt-8">
            <Button className="bg-dark-blue" onClick={() => navigate("/products")}>
              Continuar
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Welcome;

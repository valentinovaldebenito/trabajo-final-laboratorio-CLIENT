import { Card } from "primereact/card";
import Navbar from "../components/Navbar";
import "../index.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function User() {
  return (
    <>
      <div className="flex flex-column w-full h-screen surface-200">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full h-full flex justify-content-center align-items-center">
          <div className="flex justify-content-center align-items-center w-6 h-full">
            <Card className="flex flex-column w-6 h-30rem">
                <p className="text-3xl font-bold">Imagen</p>
                <span className="text-2xl font-semibold">Hola &quot;user&quot;</span>
            </Card>
          </div>
          <div className="flex flex-column justify-content-center align-items-center w-6 h-full">
            <span className="text-2xl text-semibold">info sobre el user</span>
            <span className="text-2xl text-semibold">info sobre el user</span>
            <span className="text-2xl text-semibold">info sobre el user</span>
            <span className="text-2xl text-semibold">info sobre el user</span>
            <span className="text-2xl text-semibold">info sobre el user</span>
            <span className="text-2xl text-semibold">info sobre el user</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

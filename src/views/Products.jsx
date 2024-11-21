import axios from "axios";
import Navbar from "../components/Navbar";
import "../index.css";
import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { InputNumber } from "primereact/inputnumber";

function Productos() {
  //const navigate = useNavigate();
  const options = [
    { label: "Activo", value: "true" },
    { label: "Inactivo", value: "false" },
  ];
  const [activo, setActivo] = useState(options[0]);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [products, setProducts] = useState([]);
  const [marca, setMarca] = useState([]);
  const [descripcion, setDescripcion] = useState([]);
  const [valorUnidad, setValorUnidad] = useState([]);
  const [stock, setStock] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4250/productos", {});
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      //navigate("/login");
    }
  };

  const cargarProducto = async () => {
    if (marca && descripcion && valorUnidad && stock && activo) {
      console.log(marca, descripcion, valorUnidad, stock, activo);

      try {
        const response = await axios.post("http://localhost:4250/productos", {
          marca: marca,
          descripcion: descripcion,
          valorUnidad: valorUnidad,
          stock: stock,
          activo: activo,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Debe llenar todos los campos!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-column w-full h-screen surface-200">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full h-full flex flex-column align-items-center pt-8">
          <div className="flex justify-content-space-between w-10 py-3">
            <div className="w-6 flex justify-content-start align-items-center">
              <span className="text-2xl font-semibold text-700">Productos</span>
            </div>
            <div className="w-6 flex justify-content-end align-items-center">
              <Button
                className="bg-orange-500 text-white border-none hover:cursor-pointer hover:bg-orange-400"
                label="Cargar Producto"
                icon="pi pi-plus"
                onClick={() => setDisplayDialog(true)}
              />
            </div>
          </div>
          <Card className="flex flex-column w-10 overflow-x-hidden overflow-y-hidden">
            <DataTable value={products} className="w-full">
              <Column field="id" header="Id" />
              <Column field="marca" header="Marca" />
              <Column field="descripcion" header="Descripción" />
              <Column field="valorUnidad" header="Valor Unidad" />
              <Column field="stock" header="Stock" />
              <Column field="activo" header="Activo" />
            </DataTable>
          </Card>
        </div>
      </div>
      <Dialog className="w-4" header="Cargar Producto" draggable={false} visible={displayDialog} onHide={() => setDisplayDialog(false)}>
        <div className="flex flex-column align-items-center w-full gap-3">
          <InputText className="w-full" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Marca" />
          <InputText className="w-full" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" />
          <InputNumber
            className="w-full"
            value={valorUnidad}
            onChange={(e) => {
              setValorUnidad(e.value);
            }}
            placeholder="Valor por Unidad"
          />
          <InputNumber
            className="w-full"
            value={stock}
            onChange={(e) => {
              setStock(e.value);
            }}
            placeholder="Stock"
          />
          <SelectButton className="w-full" value={activo} onChange={(e) => setActivo(e.value)} options={options} placeholder="Estado" />

          <div className="flex w-full justify-end">
            <div className="w-full flex justify-content-end">
              <Button label="Guardar" className="bg-green-500 border-0 hover:bg-green-600" icon="pi pi-check" onClick={cargarProducto} />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Productos;

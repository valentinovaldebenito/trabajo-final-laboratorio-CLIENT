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
    { label: "Activo", value: 1 },
    { label: "Inactivo", value: 0 },
  ];
  const [displayCreateDialog, setDisplayCreateDialog] = useState(false);
  const [displayEditDialog, setDisplayEditDialog] = useState(false);
  const [products, setProducts] = useState([]);
  const [itemEdit, setItemEdit] = useState({});
  const [activo, setActivo] = useState(options[0]);
  const [marca, setMarca] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [valorUnidad, setValorUnidad] = useState(0);
  const [stock, setStock] = useState(0);

  const productsMuestra = [
    { id: 1, marca: "Ilolay", descripcion: "Leche", valorUnidad: 900, stock: 100, activo: 1 },
    { id: 2, marca: "La Serenisima", descripcion: "Leche", valorUnidad: 600, stock: 300, activo: 1 },
    { id: 3, marca: "Sancor", descripcion: "Leche", valorUnidad: 500, stock: 400, activo: 1 },
    { id: 4, marca: "Las tres hermanas", descripcion: "Leche", valorUnidad: 700, stock: 230, activo: 1 },
  ];

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/getAll", {});
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Create
  const cargarProducto = async () => {
    if (marca && descripcion && valorUnidad && stock && activo) {
      console.log(marca, descripcion, valorUnidad, stock, activo);

      try {
        const response = await axios.post("http://localhost:3000/product/upload", {
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

  //Delete
  const eliminarProducto = async (id) => {
    console.log(id);
    if (marca && descripcion && valorUnidad && stock && activo) {
      try {
        const response = await axios.put(`http://localhost:3000/product/delete/:${id}`, {
          marca: marca,
          descripcion: descripcion,
          valorUnidad: valorUnidad,
          stock: stock,
          activo: activo,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  //Update
  const editarProducto = async () => {
    if (itemEdit) {
      try {
        const response = await axios.put(`http://localhost:3000/product/update/:${itemEdit.id}`, {
          marca: marca,
          descripcion: descripcion,
          valorUnidad: valorUnidad,
          stock: stock,
          activo: 1,
        });
        console.log(response)
        setItemEdit({});
        setDisplayEditDialog(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Error al obtener el ItemEdit");
    }
  };

  const handleEditClick = (rowData) => {
    setItemEdit(rowData);
    setMarca(rowData.marca);
    setDescripcion(rowData.descripcion);
    setValorUnidad(rowData.valorUnidad);
    setStock(rowData.stock);

    setDisplayEditDialog(true);
  };

  useEffect(() => {
    getProducts();
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
                onClick={() => setDisplayCreateDialog(true)}
              />
            </div>
          </div>
          <Card className="flex flex-column w-10 overflow-x-hidden overflow-y-hidden">
            <DataTable value={products || productsMuestra} className="w-full">
              <Column field="id" header="Id" />
              <Column field="marca" header="Marca" />
              <Column field="descripcion" header="Descripción" />
              <Column field="valorUnidad" header="Valor Unidad" />
              <Column field="stock" header="Stock" />
              <Column field="activo" header="Activo" />
              <Column
                body={(rowData) => (
                  <Button
                    key={rowData.id}
                    icon="pi pi-pencil"
                    rounded
                    text
                    severity="primary"
                    aria-label="Editar"
                    onClick={() => handleEditClick(rowData)}
                  />
                )}
              />
              <Column
                body={(rowData) => (
                  <Button
                    key={rowData.id}
                    icon="pi pi-times"
                    rounded
                    text
                    severity="danger"
                    aria-label="Eliminar"
                    onClick={() => eliminarProducto(rowData.id)}
                  />
                )}
              />
            </DataTable>
          </Card>
        </div>
      </div>

      {/* Dialog Para Cargar Productos */}
      <Dialog className="w-4" header="Cargar Producto" draggable={false} visible={displayCreateDialog} onHide={() => setDisplayCreateDialog(false)}>
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
          <SelectButton className="w-full" value={activo} onChange={(e) => setActivo(e.value)} options={options} />

          <div className="flex w-full justify-end">
            <div className="w-full flex justify-content-end">
              <Button label="Guardar" className="bg-green-500 border-0 hover:bg-green-600" icon="pi pi-check" onClick={cargarProducto} />
            </div>
          </div>
        </div>
      </Dialog>

      {/* Dialog Para Editar Productos */}
      <Dialog className="w-4" header="Editar Producto" draggable={false} visible={displayEditDialog} onHide={() => setDisplayEditDialog(false)}>
        <div className="flex flex-column align-items-center w-full gap-3">
          <div className="flex flex-column w-full">
            <span className="font-semibold mb-2 ml-2">ID Producto</span>
            <InputText className="w-full" value={"ID Producto: " + itemEdit?.id || null} disabled={true} name="ID" />
          </div>
          <div className="flex flex-column w-full">
            <span className="font-semibold mb-2 ml-2">Marca</span>
            <InputText className="w-full" value={marca} onChange={(e) => setMarca(e.target.value)} />
          </div>
          <div className="flex flex-column w-full">
            <span className="font-semibold mb-2 ml-2">Descripción</span>
            <InputText className="w-full" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </div>
          <div className="flex flex-column w-full">
            <span className="font-semibold mb-2 ml-2">Valor Unitario</span>
            <InputNumber
              className="w-full"
              value={valorUnidad}
              onChange={(e) => {
                setValorUnidad(e.value);
              }}
            />
          </div>
          <div className="flex flex-column w-full">
            <span className="font-semibold mb-2 ml-2">Cantidad Stock</span>
            <InputNumber
              className="w-full"
              value={stock}
              onChange={(e) => {
                setStock(e.value);
              }}
            />
          </div>

          <div className="flex w-full justify-end">
            <div className="w-full flex justify-content-end">
              <Button label="Guardar" className="bg-green-500 border-0 hover:bg-green-600" icon="pi pi-check" onClick={editarProducto} />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Productos;

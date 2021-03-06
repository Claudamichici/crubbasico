import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemProducto = (props) => {

    const eliminarProducto = (id)=>{
        Swal.fire({
            title: '¿Está seguro de eliminar el producto?',
            text: "¡No puede volver atrás esta operación luego de eliminar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then(async(result) => {
            if (result.isConfirmed) {
                //agregar la logica para borrar el producto
                try{
                    const URL = `${process.env.REACT_APP_API_URL}/${id}`;
                    const respuesta = await fetch (URL,{
                        method: "DELETE",
                        headers:{"Content-Type":"application/json"}
                        });
                        if(respuesta.status === 200){
                            //muestro el cartel al usuario
                            Swal.fire(
                                'Producto eliminado',
                                'El producto seleccionado fue eliminado correctamente',
                                'success'
                              )
                              //actualizar los datos
                              props.consultarAPI();
                        }
                }catch (error){
                    console.log(error);
                    //mostrar ventana alert de error
                   
                }
            }
          })
    }

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          {props.producto.nombreProducto} <span className="font-weight-bold"> $ {props.producto.precioProducto}</span>
        </p>
        <div>
          <Button variant="warning" className="mr-3">Editar</Button>
          <Button variant="danger" onClick={()=> eliminarProducto(props.producto.id)}>Borrar</Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemProducto;

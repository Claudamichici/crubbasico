import React from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const EditarProducto = () => {
  return (
    <Container>
      <Form>
        <h1 className="text-center my-5">Agregar nuevo producto</h1>
        <Form.Group>
          <Form.Label>Nombre de producto*</Form.Label>
          <Form.Control type="text" placeholder="Té"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio producto*</Form.Label>
          <Form.Control type="number" placeholder="40"></Form.Control>
        </Form.Group>
        <h3 className="text-center">Categoria</h3>
        <div className="text-center my-4">
          <Form.Check
            name="categoria"
            type="radio"
            label="Bebida Caliente"
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Bebida Fria"
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Dulce"
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Salado"
            inline
          ></Form.Check>
        </div>
        <Button variant="danger" className="w-100 mb-4">
          Guardar
        </Button>
        <Alert variant="warning">Todos los campos son obligatorios</Alert>
      </Form>
    </Container>
  );
};

export default EditarProducto;

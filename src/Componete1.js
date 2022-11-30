import React, { useState, useEffect } from "react";
import UsuariosTabela from "./UsuariosTabela";

export default function Componete1() {
  const [contador, setContador] = useState(0);
  const [dados, setDados] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  function incContador() {
    setContador(contador + 1);
  }

  const decrement = function decContador() {
    setContador((contador) => contador - 1);
  };

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  useEffect(() => {
    console.log("componentDidMount");
    console.log("Requisitando dados por um fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setDados(resp));
  }, [url]);

  useEffect(() => {
    console.log("componentDidMount com dependencia");
    console.log(contador);
  }, [contador]);

  return (
    <>
      <div>Componete1 de exemplo na aula dev</div>
      <p>Paragrafo de teste</p>
      <button onClick={incContador}>Incrementar</button>
      <button onClick={decrement}>Decremento</button>
      <p> {contador} </p>
      <UsuariosTabela dados={dados}></UsuariosTabela>

      </>
  );
}

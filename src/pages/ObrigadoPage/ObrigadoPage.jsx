import React, { useState } from "react";
import { CartState } from "../../context/Context";
import "./ObrigadoPage.css";
import entregaImg from "../../img/entrega.svg";
import price from "../../img/price.svg";
import loc from "../../img/loc.svg";
import tempo from "../../img/tempo.svg";

const ObrigadoPage = () => {
  const {
    state: { cart },
  } = CartState();
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
  };
  const tst = JSON.parse(localStorage.getItem("endereco"));

  const [endereco1, setEndereco1] = useState(
    `Entrega em ${tst?.street}, ${tst?.number}`
  );
  const [endereco2, setEndereco2] = useState(
    ` ${tst.neighborhood} - ${tst.city}, ${tst.state}`
  );
  // const totalFrete = ()  => {
  //     if(endereco){
  //         return parseFloat(parseFloat(calculateTotal()) + 10.40).toFixed(2)

  //     }
  //     return (calculateTotal())
  // }

  return (
    <div className="Cart">
      <div>
        <h1 className="obgTitle">Uhu! Pedido confirmado</h1>
        <h3 className="obgSubtitle">
          Agora é só aguardar que logo o café chegará até você
        </h3>
        <div style={{ border: "2px solid #4AA366", padding: 20, borderRadius: "6px 36px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{
                background: "#C47F17",
                borderRadius: 80,
                width: 30,
                height: 30,
                padding: 5,
              }}
              src={price}
            ></img>
            <p>{calculateTotal()?.toFixed(2)}</p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{
                background: "#8047F8",
                borderRadius: 80,
                width: 30,
                height: 30,
                padding: 5,
              }}
              src={loc}
            ></img>
            <div style={{ lineHeight: 0 }}>
              <p>{endereco1}</p>
              <p>{endereco2}</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{
                background: "#DBAC2C",
                borderRadius: 80,
                width: 30,
                height: 30,
                padding: 5,
              }}
              src={tempo}
            ></img>
            <p>
              Previsao de entrega: <br /> <b>20 min - 30 min</b>{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={entregaImg}></img>
      </div>
    </div>
  );
};

export default ObrigadoPage;

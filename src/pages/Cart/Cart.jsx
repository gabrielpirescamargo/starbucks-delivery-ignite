import React, { useState } from "react";
import List from "../../components/Cart/List";
import Statement from "../../components/Cart/Statement";
import "./Cart.css";

const Cart = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    street: "",
    number: "",
    city: "",
    neighborhood: "",
    state: "",
  });

  const handleCepChange = (e) => {
    const newCep = e.target.value;
    setCep(newCep);
 
  };

  const handleAddressFetch = () => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          setAddress({
            street: "",
            number: "",
            city: "",
            neighborhood: "",
            state: "",
          });
        } else {
          setAddress({
            street: data.logradouro,
            number: "",
            city: data.localidade,
            neighborhood: data.bairro,
            state: data.uf,
          });
          localStorage.setItem("endereco", JSON.stringify({
            street: data.logradouro,
            number: "",
            city: data.localidade,
            neighborhood: data.bairro,
            state: data.uf,
          }))
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
        setAddress({
          street: "",
          number: "",
          city: "",
          neighborhood: "",
          state: "",
        });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    localStorage.setItem("endereco", JSON.stringify({
      ...address,
      [name]: value,
    }))
  };

  return (
    <div className="Cart">
      <div className="form">
        <span className="complete">Complete seu pedido</span>
        <div className="pedido">
          <span className="enderecoTitle">Endereço da entrega</span>
          <span className="enderecoSubtitle">Informe o endereço onde deseja receber seu pedido</span>
          <div>
            <div>
              <input
                onBlur={handleAddressFetch}
                placeholder="CEP"
                type="text"
                value={cep}
                onChange={handleCepChange}
              />
            </div>

            <input
              type="text"
              name="street"
              placeholder="Rua"
              className="rua"
              value={address.street}
              onChange={handleInputChange}
            />

            <input
              type="number"
              name="number"
              placeholder="Numero"
              className="numero"
              value={address.number}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="city"
              placeholder="Cidade"
              value={address.city}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="neighborhood"
              placeholder="Bairro"
              value={address.neighborhood}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="state"
              className="uf"
              placeholder="UF"
              value={address.state}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="cafes">
        <span style={{color: 'black'}}>Cafés selecionados</span>
        <List endereco={address.street? true: false} />
      </div>
    </div>
  );
};

export default Cart;

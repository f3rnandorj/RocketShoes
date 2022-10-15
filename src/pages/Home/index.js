import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1665494059&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nike</strong>
        <span>R$279,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1665494059&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nike</strong>
        <span>R$279,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1665494059&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nike</strong>
        <span>R$279,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1665494059&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nike</strong>
        <span>R$279,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1665494059&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nike</strong>
        <span>R$279,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom2.jpg?ts=1665494059&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nike</strong>
        <span>R$279,99</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;

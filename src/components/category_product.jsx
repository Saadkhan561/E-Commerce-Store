import { React, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../context/cartContext';

const CategoryProduct = ({
  id,
  title,
  image,
  specs,
  features,
  price,
  stock,
}) => {
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);

  return (
    <>
      <Title>
        <h1>
          <Link to={`/products/${id}`}>{title}</Link>
        </h1>
      </Title>
      <GridContainer>
        <ContainerGrid>
          <img
            src={`/assets/${image}`}
            alt={title}
            height='400px'
            width='400px'
          ></img>
        </ContainerGrid>
        <ContainerGrid>
          <h3>Dimensions</h3>
          <div>
            <h5>{specs.dimensions}</h5>
          </div>
          <div>
            <h5>{specs.capacity}</h5>
          </div>
          <div>
            <h4>Features</h4>
            <ul>
              {features.map((f, i) => {
                return (
                  <li key={`feature${i}`}>
                    <h5>{f}</h5>
                  </li>
                );
              })}
            </ul>
          </div>
        </ContainerGrid>
        <ContainerGrid>
          <h2>{price}/Rs</h2>
          <Stock>Stock Level: {stock}</Stock>
          <div>
            <ProductButton onClick={() => navigate(`/products/${id}`)}>
              View Product
            </ProductButton>
          </div>
          <div>
            <CartButton onClick={() => addProduct({ id, title, price })}>
              Add to Basket
            </CartButton>
          </div>
        </ContainerGrid>
      </GridContainer>
    </>
  );
};

export default CategoryProduct;

// STYLED COMPONENTS
const Title = styled.div`
  padding-left: 30px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 600px 600px 200px;
`;

const ContainerGrid = styled.div`
  padding: 30px;
`;

const Stock = styled.h4`
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 7px;
  width: 120px;
`;

const CartButton = styled.button`
  border-radius: 5px;
  padding: 7px;
  background-color: black;
  color: white;
  margin-top: 5px;
`;

const ProductButton = styled.button`
  border-radius: 5px;
  padding: 7px;
  background-color: black;
  color: white;
`;

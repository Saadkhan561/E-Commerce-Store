import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fetcher';
import styled from 'styled-components';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({ errorMessage: '', data: {} });

  useEffect(() => {
    const responseObject = async () => {
      const data = await getProductById(productId);
      setProduct(data);
    };
    responseObject();
  }, [productId]);

  // dangerouslySetInnerHTML function to use actual HTML inside react components
  const createMarkup = () => {
    return { __html: product.data?.description };
  };

  return (
    <div>
      <Title>
        {console.log(product)}
        <h1>{product.data.title}</h1>
      </Title>
      <GridContainer>
        <ContainerGrid>
          <img
            src={`/assets/${product.data.image}`}
            alt={product.data.title}
            height='400px'
            width='400px'
          ></img>
        </ContainerGrid>
        <ContainerGrid>
          <h3>Dimensions</h3>
          {product.data.specs && product.data.specs.dimensions && (
            <div>
              <h5>{product.data.specs.dimensions}</h5>
            </div>
          )}

          {product.data.specs && product.data.specs.capacity && (
            <div>
              <h5>{product.data.specs.capacity}</h5>
            </div>
          )}
          <div>
            <h4>Features</h4>
            <ul>
              {product.data.features?.map((f, i) => {
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
          <h2>{product.data.price}/Rs</h2>
          <Stock>Stock Level: {product.data.stock}</Stock>
          <div>
            <CartButton>Add to Cart</CartButton>
          </div>
        </ContainerGrid>
      </GridContainer>
      <ProdectDescription
        dangerouslySetInnerHTML={createMarkup()}
      ></ProdectDescription>
    </div>
  );
};

export default ProductDetail;

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
`;

const ProdectDescription = styled.div``;

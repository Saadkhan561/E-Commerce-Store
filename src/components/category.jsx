import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../fetcher';
import CategoryProduct from './category_product';

const Category = () => {
  const [products, setProduct] = useState({ errorMessage: '', data: [] });
  const { categoryId } = useParams();

  useEffect(() => {
    const responseObject = async () => {
      const data = await getProducts(categoryId);
      setProduct(data);
    };
    responseObject();
  }, [categoryId]);

  const renderProducts = () => {
    return products.data.map((p) => {
      return (
        <CategoryProduct
          key={p.id}
          id={p.id}
          title={p.title}
          image={p.image}
          specs={p.specs}
          features={p.features}
          price={p.price}
          stock={p.stock}
        />
      );
    });
  };

  return (
    <>
      <div>{products.errorMessage}</div>
      <article>{renderProducts()}</article>
    </>
  );
};

export default Category;

import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductByQuery } from '../fetcher';
import CategoryProduct from './category_product';

const SearchResults = () => {
  const [products, setProduct] = useState({ errorMessage: '', data: [] });
  const [searchParams] = useSearchParams();
  const query = searchParams.get('s');

  useEffect(() => {
    const responseObject = async () => {
      const data = await getProductByQuery(query);
      setProduct(data);
    };
    responseObject();
  }, [query]);

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

export default SearchResults;

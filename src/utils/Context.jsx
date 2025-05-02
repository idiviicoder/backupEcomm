import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import instance from './Axios'

export const productContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

  // const getProducts = async () => {
  //   try {
  //       const { data } = await instance.get("/api/products");
  //       setProducts(data.products);
  //   //   console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );
};

export default Context;

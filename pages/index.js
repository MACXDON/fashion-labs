import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Home() {
  const [contentDisplay , setContentDisplay] = useState(true);
  const [listOfProducts, setListOfProducts] = useState();

  // useEffect(() => {
  //   setListOfProducts(getProducts());
  //   console.log(listOfProducts)
  // }, [])

  return (
    <div>
      
    </div>
  )
}
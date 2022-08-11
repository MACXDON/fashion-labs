import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Shopper from './shopper';
import Admin from './admin'

import { getProducts } from '../util/products';

export default function Home() {
  const [contentDisplay , setContentDisplay] = useState(true);
  const [listOfProducts, setListOfProducts] = useState();

  // useEffect(() => {
  //   setListOfProducts(getProducts());
  //   console.log(listOfProducts)
  // }, [])

  return (
    <div className={styles.container}>
      
    </div>
  )
}
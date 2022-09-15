import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='section-1'>
        <img src='images/page-images/page-image-2.jpg'/>
        <img src='images/page-images/page-image-4.jpg'/>
      </div>
      <div className='section-2'>
        <img src='images/page-images/page-image-ensemble1.jpg'/>
        <img src='images/product-images/accessories.jpg'/>
        <img src='images/page-images/page-image-ensemble2.jpg'/>
      </div>
    </div>
  )
}
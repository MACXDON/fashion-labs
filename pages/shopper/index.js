import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { queryProduct } from "../../util/productFunctions";
import styles from '../../styles/Home.module.css'
import { downloadProductImage } from "../../util/cloudStorageFunctions";

const Shopper = (props) => {
    const shopperNavCategories = ['TOPS', 'BOTTOMS', 'OUTERWEAR', 'SHOES', 'ATHLETIC'];

    const [category, setCategory] = useState('');
    const [listOfProducts, setListOfProducts] = useState([]);

    function handleCategory(e) {
        const newCategory = e.target.value.toLowerCase();

        setCategory(newCategory);
    }

    useEffect(() => {
        async function getProductCards() {
            const productList = await queryProduct(category)
            setListOfProducts(productList);
        }

        getProductCards();
    }, [category]);
    
    return (
        <div className={styles.container} id="shopper-container" style={{ display: props.display }}>
            <div className="shopper-container-nav">
                <div onChange={handleCategory}>
                    <ul>
                        {
                            shopperNavCategories.map((category, index) => {
                                return (
                                    <li key={index}>
                                        
                                        <input type='radio' value={category} name='category' id={category} />
                                        <label htmlFor={category}>{category}</label>
                                            
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="shopper-container-search">
                    <Link href='/checkout'>
                        <a>
                            <img className="shopping-bag" src='/images/icons/bag.jpg'/>
                        </a>
                    </Link>
                    <input id="search" className="shopper-product-search-bar" type='text' placeholder="Search"/>
                </div>
            </div>
            
            <div className="product-container">
                {   
                    listOfProducts.map((product, index) => {
                        return <ProductCard
                                    key={index}
                                    product={product}
                                    image={downloadProductImage(product.imageLink)}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default Shopper;
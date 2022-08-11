import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { queryProduct } from "../../util/products";

const Shopper = (props) => {
    const shopperNavCategories = ['Tops', 'Bottoms', 'Outerwear', 'Shoes', 'Athletic'];

    const [category, setCategory] = useState('tops');
    const [listOfProducts, setListOfProducts] = useState([]);

    function handleCategory(e) {
        const newCategory = e.target.value.toLowerCase();

        setCategory(newCategory);
    }

    useEffect(() => {
        async function getProducts() {
            const productList = await queryProduct(category)
            setListOfProducts(productList);
        }

        getProducts();
    }, [category]);
    
    return (
        <div className="shopper-container" style={{ display: props.display }}>
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
            <div className="product-container">
                {   
                    listOfProducts.map((product, index) => {
                        return <ProductCard
                                    key={index}
                                    product={product}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default Shopper;
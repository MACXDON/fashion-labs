import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { queryProduct, getProducts } from "../../util/productFunctions";
import styles from '../../styles/Home.module.css'

const style = {
    checkoutListNumber: {
        padding: '0.25rem',
        backgroundColor: '#F00',
        fontSize: '0.5rem',
        color: '#FFF',
        borderRadius: '10px',
        display: 'inline-block'

    }
}

const Shopper = ({ dataList }) => {
    const shopperNavCategories = ['TOPS', 'BOTTOMS', 'OUTERWEAR', 'SHOES', 'ATHLETIC'];

    const [category, setCategory] = useState('');
    const [listOfProducts, setListOfProducts] = useState([]);
    const [checkoutList, setCheckoutList] = useState([]);
    const [search, setSearch] = useState('');

    function handleSearchSubmit(e) {
        e.preventDefault();
        
        console.log(dataList)
        
        if(search) {
            const productList = dataList.filter(data => {
                const description = data.description.toLowerCase();
                const category = data.category.toLowerCase();

                if(description.includes(search) || category.includes(search)) return data;
            })

            setListOfProducts(productList);
        }

        setSearch('');
    }

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

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

    function addToCheckoutList(product) {
        const checkoutItem = {
            id: product.id,
            image: product.imageSrc,
            description: product.description,
            price: product.price,
        }

        setCheckoutList(prev => [...prev, checkoutItem]);
        console.log(checkoutList);
    }
    
    return (
        <div className={styles.container} id="shopper-container">
            <div className="shopper-container-nav">
                <div className="shooper-nav-items" onChange={handleCategory}>
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
                    <Link href='shopper/checkout'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <img className="shopping-bag" src='/images/icons/bag.jpg'/>
                            {/* <p style={style.checkoutListNumber} className="checkout-list-number">{checkoutList.length}</p> */}
                        </div>
                    </Link>
                    <form  onSubmit={handleSearchSubmit}>
                        <input value={search} onChange={handleSearchChange} id="search" className="shopper-product-search-bar" type='text' placeholder="Search"/>
                    </form>
                </div>
            </div>
            
            <div className="product-container">
                {   
                    listOfProducts.map((product, index) => {
                        return <ProductCard
                                    key={index}
                                    product={product}
                                    src={product.imageSrc}
                                    handleClick={() => {
                                        addToCheckoutList(product)
                                    }}
                                />
                    })
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const data = await getProducts();

    return {
        props: {
            dataList: data,
        },
    }
}

export default Shopper;
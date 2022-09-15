import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import ProductCard from "../../components/ProductCard";
import { queryProduct, getProducts } from "../../util/productFunctions";
import styles from '../../styles/Home.module.css'
import CheckOutButton from "../../components/CheckOutButton";
import { AppContext } from "../../util/contextAPI/ContextAPI";

const Shopper = ({ dataList }) => {
    const shopperNavCategories = ['TOPS', 'BOTTOMS', 'OUTERWEAR', 'SHOES', 'ATHLETIC'];
    const router = useRouter();

    const [category, setCategory] = useState('');
    const [listOfProducts, setListOfProducts] = useState([]);
    const [search, setSearch] = useState('');

    const { checkoutList, setCheckoutList } = useContext(AppContext);
    const { totalCheckoutItems, setTotalCheckoutItems } = useContext(AppContext);
    // list.forEach(element => {
    //     console.log(element)    
    // })
    
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

    function updateCheckoutBag() {
        const totalQuantity = 0;

        for(let i of checkoutList) {
            totalQuantity += i.quantity;
        }
        console.log(totalQuantity);
        setTotalCheckoutItems(totalQuantity);
    }

    function addToCheckoutList(product) {
        const checkoutItem = {
            id: product.id,
            imageSrc: product.imageSrc,
            description: product.description,
            price: product.price,
            quantity: 1,
        }

        if(checkoutList.length === 0) {
            setCheckoutList([checkoutItem])
            setTotalCheckoutItems(1);
            return
        }

        // increase quantity of item if its already in the list
        for(let i of checkoutList) {
            if(checkoutItem.id === i.id) {
                i.quantity += 1;
                updateCheckoutBag();

                return;
            }
        }

        updateCheckoutBag();
        setCheckoutList(prev => [...prev, checkoutItem])
    }

    function sendCheckoutList() {
        if(checkoutList) router.push('shopper/checkout')    
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
                    
                    <CheckOutButton 
                        checkoutList={checkoutList} 
                        handleClick={sendCheckoutList}
                        totalCheckoutItems={totalCheckoutItems}
                    />

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
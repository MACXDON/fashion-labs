import ProductSubmitForm from "../../components/ProductSubmitForm";
import { useEffect, useState } from "react";
import { addProducts, getProducts } from "../../util/products";
import ProductList from "../../components/ProductList";
import SearchBar from "../../components/SearchBar";

function Products ({ listOfProducts }) {
    const [description, setDescription] = useState();
    const [category, setCategory] = useState('000');
    const [discount, setDiscount] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [price, setPrice] = useState();
    const [sizes, setSizes] = useState([]);
    const [quantity, setQuantity] = useState();
    const [type, setType] = useState([]);
    const [id, setId] = useState();

    const [list, setList] = useState(listOfProducts);

    const [display, setDisplay] = useState('none');

    function handleProductFormDisplay() {
        if(display === 'block') {
            setDisplay('none')
            return
        }
        setDisplay('block');
    }

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 999).toString();

        let baseNumber;

        if(category === 'top') baseNumber = '101';
        if(category === 'bottom') baseNumber = '201';
        if(category === 'outerwear') baseNumber = '301';
        if(category === 'shoes') baseNumber = '401';
        if(category === 'athletic') baseNumber = '501';

        let newId = Number(baseNumber + randomNumber);

        setId(newId)
    }, [category])

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }

    function handleDiscountChange(e) {
        setDiscount(e.target.value);
    }

    function handleDiscountPriceChange(e) {
        setDiscountPrice(e.target.value);
    }

    function handlePriceChange(e) {
        setPrice(e.target.value);
    }

    function handleSizesChange(e) {
        setSizes(prev => [...prev, e.target.value]);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleTypeChange(e) {
        setType(prev => [...prev, e.target.value]);
    }

    async function handleSubmit() {
        const data = {
            id: id,
            description: description,
            category: category,
            discount: discount,
            discountPrice: discountPrice,
            price: price,
            sizes: sizes,
            totalQuantity: quantity,
            type: type,
        }

        console.log(data);

        await addProducts(data);
        alert('Added');

        setDescription();
        setCategory();
        setDiscount();
        setDiscountPrice();
        setPrice();
        setSizes([]);
        setQuantity();
        setType([]);
    }

    /*
    * SEARCH ALLOWS YOU TO FILTER ANY SPECIFIC PRODUCTS
    */
    const [search, setSearch] = useState('');

    useEffect(() => {
        let newList;

        if(search === '') {
            newList = listOfProducts;
            
            setList(newList);
            return
        }

        newList = list.filter(product => {
            const description = product.description.toLowerCase();

            if(description.includes(search)) {
                return product;
            }
        })

        setList(newList);

    }, [search]);

    function handleSearchValue(e) {
        setSearch(e.target.value)
    }

    return ( 
        <div className="admin-product-page-container">
            <SearchBar 
                search={search}
                handleSearchValue={handleSearchValue}
            />
            <ProductList productList={list}/>
            <button className="product-add-button" onClick={handleProductFormDisplay}>Add Item</button>
            <ProductSubmitForm
                display={display}
                handleSubmit={handleSubmit}
                handleDescriptionChange={handleDescriptionChange}
                handleCategoryChange={handleCategoryChange}
                handleDiscountChange={handleDiscountChange}
                handleDiscountPriceChange={handleDiscountPriceChange}
                handlePriceChange={handlePriceChange}
                handleSizesChange={handleSizesChange}
                handleQuantityChange={handleQuantityChange}
                handleTypeChange={handleTypeChange}
                handleProductFormDisplay={handleProductFormDisplay}
            />
        </div>
    );
}

export async function getStaticProps() {
    const data = await getProducts();
    console.log(data)

    return {
        props: {
            listOfProducts: data,
        },
    }
}

export default Products ;
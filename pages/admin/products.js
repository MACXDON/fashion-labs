import ProductSubmitForm from "../../components/ProductSubmitForm";
import { useEffect, useState } from "react";
import { addProducts } from "../../util/products";

function Products () {
    const [category, setCategory] = useState('000');
    const [discount, setDiscount] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [price, setPrice] = useState();
    const [sizes, setSizes] = useState([]);
    const [quantity, setQuantity] = useState();
    const [type, setType] = useState([]);
    const [id, setId] = useState();

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
            category: category,
            discount: discount,
            discountPrice: discountPrice,
            price: price,
            sizes: sizes,
            totalQuantity: quantity,
            type: type,
        }

        console.log(data);

        // await addProducts(data);

        setCategory();
        setDiscount();
        setDiscountPrice();
        setPrice();
        setSizes([]);
        setQuantity();
        setType([]);
    }

    return ( 
        <div>
            <h3>Add New Item:</h3>
            <ProductSubmitForm 
                handleSubmit={handleSubmit}
                handleCategoryChange={handleCategoryChange}
                handleDiscountChange={handleDiscountChange}
                handleDiscountPriceChange={handleDiscountPriceChange}
                handlePriceChange={handlePriceChange}
                handleSizesChange={handleSizesChange}
                handleQuantityChange={handleQuantityChange}
                handleTypeChange={handleTypeChange}
            />
        </div>
    );
}

export default Products ;
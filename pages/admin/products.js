import ProductSubmitForm from "../../components/ProductSubmitForm";
import { useEffect, useState } from "react";
import { addProducts, deleteProduct, getProducts } from "../../util/productFunctions";
import ProductList from "../../components/ProductList";
import SearchBar from "../../components/SearchBar";
import { uploadProductImage } from "../../util/cloudStorageFunctions";

function Products ({ listOfProducts }) {
    const [imageFile, setImageFile] = useState(null);
    const [imageName, setImageName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [discount, setDiscount] = useState(false);
    const [discountPrice, setDiscountPrice] = useState('');
    const [price, setPrice] = useState('');
    const [sizes, setSizes] = useState([]);
    const [quantity, setQuantity] = useState('');
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

        if(category === 'tops') baseNumber = '101';
        if(category === 'bottoms') baseNumber = '201';
        if(category === 'outerwear') baseNumber = '301';
        if(category === 'shoes') baseNumber = '401';
        if(category === 'athletic') baseNumber = '501';

        let newId = baseNumber + randomNumber;
        newId = Number(newId);

        setId(newId)
    }, [category])

    function handleImageFileChange(e) {
        e.preventDefault();
        const imageList = [];

        const files = e.target.files
        
        for(const image in files) {
            if(typeof files[image] === 'object') imageList.push(files[image]);
        }

        if(imageList.length === 0) console.log('List is empty')

        let imageFile = imageList[0];
        let imageName = imageList[0].name

        setImageName(imageName);
        setImageFile(imageFile);
    }

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
        // const productImagesBaseRef = 'images/product-images/';

        const data = {
            id: id,
            image: imageName,
            description: description,
            category: category,
            discount: discount,
            discountPrice: discountPrice,
            price: price,
            sizes: sizes,
            totalQuantity: quantity,
            type: type,
        }
        
        await uploadProductImage(imageName, imageFile);

        await addProducts(data);
        
        setImageFile(null);
        setImageName('');
        setDescription('');
        setCategory('');
        setDiscount(false);
        setDiscountPrice(0);
        setPrice(null);
        setSizes([]);
        setQuantity(null);
        setType([]);
        setDisplay('none')

        alert('Added');

        setSearch('a');
        setSearch('');
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

    async function deleteProductById(e) {
        let productId = (e.target.value);

        if(typeof productId === 'string') productId = Number(productId);
        await deleteProduct(productId)
        
        setSearch('a');
        setSearch('');
    }

    return ( 
        <div className="admin-product-page-container">
            <SearchBar 
                search={search}
                handleSearchValue={handleSearchValue}
            />
            <ProductList 
                productList={list}
                deleteProduct={deleteProductById}
            />
            <button className="product-add-button" onClick={handleProductFormDisplay}>Add Item</button>
            <ProductSubmitForm
                display={display}
                handleSubmit={handleSubmit}
                handleImageFileChange={handleImageFileChange}
                handleDescriptionChange={handleDescriptionChange}
                handleCategoryChange={handleCategoryChange}
                handleDiscountChange={handleDiscountChange}
                handleDiscountPriceChange={handleDiscountPriceChange}
                handlePriceChange={handlePriceChange}
                handleSizesChange={handleSizesChange}
                handleQuantityChange={handleQuantityChange}
                handleTypeChange={handleTypeChange}
                handleProductFormDisplay={handleProductFormDisplay}
            
                description={description}
                category={category}
                discount={discount}
                discountPrice={discountPrice}
                price={price}
                sizes={sizes}
                quantity={quantity}
                type={type}
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
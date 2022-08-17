const ProductSubmitForm = (
    {
        display,
        handleSubmit,
        handleImageFileChange,
        handleDescriptionChange,
        handleCategoryChange,
        handleDiscountChange,
        handleDiscountPriceChange,
        handlePriceChange,
        handleSizesChange,
        handleQuantityChange,
        handleTypeChange,
        handleProductFormDisplay,
        description,
        category,
        discount,
        discountPrice,
        price,
        sizes,
        quantity,
        type,
    }) => {
        function handleFormSubmit(e) {
            e.preventDefault();
            handleSubmit();
        }

        function disableIfDiscountIsFalse() {
            if(discount === false) return ( 'disabled' )
            
            return 'enabled'
        }
    return ( 
        <div className="product-form" style={{ display: display }}>
            <button className="close-product-form" onClick={handleProductFormDisplay}>X</button>
            <h3>Add New Item:</h3>
            <form onSubmit={handleFormSubmit}>
                {/* image */}
                <div>
                    <span>Add an Image:</span> <input accept="image/*" multiple onChange={handleImageFileChange} type='file' id='image-file-input'/>
                </div>

                {/* name */}
                <div>
                    <input placeholder="Description" onChange={handleDescriptionChange} value={description} type='text' id='description' name='description' required/>
                </div>

                {/* category */}
                <div>
                    <legend>Category:</legend>
                    <div>
                        <input onChange={handleCategoryChange} checked={category === 'tops'} type='radio' id='category' name='category'  value='tops'/>
                        <label htmlFor='category'>Top</label>
                    </div>
                    <div>
                        <input onChange={handleCategoryChange} checked={category === 'bottoms'} type='radio' id='category' name='category'  value='bottoms'/>
                        <label htmlFor='category'>Bottom</label>
                    </div>
                    <div>
                        <input onChange={handleCategoryChange} checked={category === 'outerwear'} type='radio' id='category' name='category'  value='outerwear'/>
                        <label htmlFor='category'>Outerwear</label>
                    </div>
                    <div>
                        <input onChange={handleCategoryChange} checked={category === 'shoes'} type='radio' id='category' name='category'  value='shoes'/>
                        <label htmlFor='category'>Shoes</label>
                    </div>
                    <div>
                        <input onChange={handleCategoryChange} checked={category === 'athletic'} type='radio' id='category' name='category'  value='athletic'/>
                        <label htmlFor='category'>Athletic</label>
                    </div>
                </div>

                {/* discount */}
                <div>
                    <legend>Discount:</legend>
                    <div>
                        <input onChange={handleDiscountChange} checked={discount === 'true'} type='radio' id='discount' name='discount' value={true}/>
                        <label htmlFor='discount'>True</label>
                    </div>
                    <div>
                        <input onChange={handleDiscountChange} checked={discount === 'false'} type='radio' id='discount' name='discount' value={false}/>
                        <label htmlFor='discount'>False</label>
                    </div>
                </div>

                {/* discount price */}
                <div>
                <input onChange={handleDiscountPriceChange} value={discountPrice} type='number' name="discountPrice" placeholder="Discount Price" />
                </div>

                {/* price */}
                <div>
                <input onChange={handlePriceChange} value={price} type="number" name="price" placeholder="Price" required/>
                </div>
                
                {/* sizes */}
                <div>
                    <legend>Sizes:</legend>
                    <div>
                        <input onChange={handleSizesChange} checked={sizes.includes('large')} type="checkbox" id="large" name="large"  value='large'/>
                        <label htmlFor="sizes">Large</label>
                    </div>

                    <div>
                        <input onChange={handleSizesChange} checked={sizes.includes('medium')} type="checkbox" id="medium" name="medium"  value='medium'/>
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div>
                        <input onChange={handleSizesChange} checked={sizes.includes('small')} type="checkbox" id="small" name="small"  value='small'/>
                        <label htmlFor="small">Small</label>
                    </div>

                    <div>
                        <input onChange={handleSizesChange} checked={sizes.includes('extra-small')} type="checkbox" id="extra-small" name="extra-small"  value='extra-small'/>
                        <label htmlFor="extra-small">Extra Small</label>
                    </div>
                </div>

                {/* totalquantity */}
                <div>
                    <input placeholder="Quantity" onChange={handleQuantityChange} value={quantity} type='number' name="totalQuantity" required/>
                </div>

                {/* type */}
                <div>
                    <legend>Type:</legend>
                    <div>
                        <input onChange={handleTypeChange} checked={type.includes('men')} type="checkbox" id="men" name="men"  value='men'/>
                        <label htmlFor="men">Men</label>
                    </div>

                    <div>
                        <input onChange={handleTypeChange} checked={type.includes('women')} type="checkbox" id="women" name="women"  value='women'/>
                        <label htmlFor="women">Women</label>
                    </div>
                    <div>
                        <input onChange={handleTypeChange} checked={type.includes('boy')} type="checkbox" id="boy" name="boy"  value='boy'/>
                        <label htmlFor="boy">Boy</label>
                    </div>

                    <div>
                        <input onChange={handleTypeChange} checked={type.includes('girl')} type="checkbox" id="girl" name="girl"  value='girl'/>
                        <label htmlFor="girl">Girl</label>
                    </div>
                </div>
                <input className="product-form-submit" type='submit'/>
            </form>
        </div>
    );
}
 
export default ProductSubmitForm;
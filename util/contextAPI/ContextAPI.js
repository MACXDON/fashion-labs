import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const initialState = [
        {
            discountPrice: 0,
            sizes: [ 'medium', 'small', 'large', 'extra-small' ],
            id: 101380,
            price: 35,
            category: 'tops',
            description: 'Pink Crop Top',
            imageSrc: 'https://firebasestorage.googleapis.com/v0/b/fashion-labs.appspot.com/o/images%2Fproduct-images%2Fpink-croptop.jpg?alt=media&token=d103759b-9a92-4faf-81f9-9ac20961f3e5',
            type: [ 'women', 'girl' ],
            discount: true,
            totalQuantity: 10000
          },
          {
            type: [ 'women' ],
            price: 400,
            discount: true,
            category: 'outerwear',
            id: 301376,
            description: 'White Coat',
            imageSrc: 'https://firebasestorage.googleapis.com/v0/b/fashion-labs.appspot.com/o/images%2Fproduct-images%2Fproduct-image-coat.jpg?alt=media&token=ac842850-771f-43f1-8680-79da8c2c96a2',
            discountPrice: 0.05,
            sizes: [ 'medium', 'large' ],
            totalQuantity: 4000
          },
          {
            description: 'Yellow Hoodie',
            price: 25,
            totalQuantity: 6000,
            id: 101654,
            imageSrc: 'https://firebasestorage.googleapis.com/v0/b/fashion-labs.appspot.com/o/images%2Fproduct-images%2Fyellow-hoodie.jpg?alt=media&token=c26a27d4-5155-4d70-905a-c37f423ba009',
            discountPrice: 0.05,
            category: 'tops',
            sizes: [ 'medium', 'large', 'small' ],
            discount: true,
            type: [ 'men', 'boy' ]
          }
    ];
    const [checkoutList, setCheckoutList] = useState(initialState);

    return (
        <AppContext.Provider value={{ checkoutList, setCheckoutList }} >
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext };
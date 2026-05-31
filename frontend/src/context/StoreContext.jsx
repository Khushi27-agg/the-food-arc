import { createContext, useState } from "react";

export const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        setCartItems,
        removeFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;

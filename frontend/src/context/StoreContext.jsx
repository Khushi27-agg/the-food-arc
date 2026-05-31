import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/food/list");

      setFoodList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        setCartItems,
        removeFromCart,
        foodList,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;

import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { foodData as localFoodData } from "../data/foodData";

export const StoreContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const getTotalAmount = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  const fetchFoods = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/food/list`);
      if (res.data.success && res.data.data.length > 0) {
        setFoodList(res.data.data);
      } else {
        setFoodList(localFoodData);
      }
    } catch {
      setFoodList(localFoodData);
    }
  };

  const login = async (email, password) => {
    const res = await axios.post(`${API_URL}/api/user/login`, { email, password });
    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  };

  const register = async (name, email, password) => {
    const res = await axios.post(`${API_URL}/api/user/register`, { name, email, password });
    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const placeOrder = async (address) => {
    const subtotal = getTotalAmount();
    const deliveryFee = subtotal > 0 ? 40 : 0;
    const res = await axios.post(
      `${API_URL}/api/order/place`,
      { items: cartItems, amount: subtotal + deliveryFee, address },
      { headers: { token } }
    );
    if (res.data.success) setCartItems([]);
    return res.data;
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
        token,
        login,
        register,
        logout,
        placeOrder,
        getTotalAmount,
        API_URL,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;

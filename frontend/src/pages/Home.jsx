import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import Footer from "../components/Footer";

function Home() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <Header />
      <div id="menu">
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "90%",
          margin: "20px auto",
          display: "block",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <FoodDisplay category={category} search={search} />
      <Footer />
    </>
  );
}

export default Home;

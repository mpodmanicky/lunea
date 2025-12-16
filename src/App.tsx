import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Button props={"Click"} />

      <div className="overflow-x-auto">
        <div className="flex flex-nowrap">
          <ProductCard
            title="Product 1"
            description="This is a short description of the product"
            price="129,99"
          />
          <ProductCard
            title="Product 2"
            description="This is a short description of the product"
            price="119,99"
          />
          <ProductCard
            title="Product 3"
            description="This is a short description of the product"
            price="224,99"
          />
          <ProductCard
            title="Product 4"
            description="This is a short description of the product"
            price="349,90"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

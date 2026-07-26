import "./assets/app.css";
import Header from "./invento_components/Header";
import Form from "./invento_components/Form";
import Content from "./invento_components/Content";
import Footer from "./invento_components/Footer";
import {useState} from "react";

const Invento = () => {
  const [products, setProducts] = useState([
    {
        id: 1,
        name: "Fish",
        quantity: 5
    },
    {
        id: 2,
        name: "Pomo",
        quantity: 10
    },
    {
        id: 3,
        name: "Meat",
        quantity: 15
    }
  ]);

  return (
    <div className="container">
      <Header products={products} />
      <Form products={products} setProducts={setProducts} />
      <Content products={products} setProducts={setProducts} />
      <Footer />
    </div>
  );
};

export default Invento;
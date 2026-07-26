
import Products from "./Products";

function Main({abc, products}) {
  return (
    <section>
      <h2 className="text-center my-4">Products</h2>
      <Products products={products} />
    </section>
  );
}

export default Main;
//how to embed an image in the src folder, use an alias
import heropng from "../assets/hero.png"

const Products = ({products}) => {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((pro) => (
              <tr key={pro.id}>
                <td>{pro.id}</td>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>
                  <img src={heropng} alt="an hero logo" style={{ maxWidth: "50px" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
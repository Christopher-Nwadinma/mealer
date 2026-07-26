import { useState } from "react";

const Form = ({ setProducts }) => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.quantity) return;

    const newProduct = {
      id: Date.now() + Math.floor(Math.random() * 1000000),
      name: formData.name.trim(),
      quantity: Number(formData.quantity),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setFormData({ name: "", quantity: "" });
  };

  return (
    <div className="row text-center formy">
      <div className="col-md-6 offset-md-3">
        <h3>Add Product</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <form className="py-3 px-5 brr" onSubmit={handleSubmit}>
          <div className="row my-4">
            <div className="col-md-7">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="product name"
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="form-control"
                placeholder=" Qty"
              />
            </div>

            <div className="col-md-2 text-end">
              <input
                type="submit"
                value="Add Product"
                className="btn btn-primary mine"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
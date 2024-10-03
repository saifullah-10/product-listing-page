import PropTypes from "prop-types";
import { useState } from "react";

const ProductForm = ({ data, type }) => {
  const formateText = type ? type[0].toUpperCase() + type.slice(1) : "";
  console.log(formateText);
  const [formData, setFormData] = useState({
    title: data ? data.title : "",
    description: data ? data.description : "",
    category: data ? data.category : "",
    price: data ? data.price : "",
    discountPercentage: data ? data.discountPercentage : "",
    stock: data ? data.stock : "",
    tags: "",
    brand: data ? data.brand : "",
    sku: data ? data.sku : "",
    weight: data ? data.weight : "",
    dimensions: {
      width: data ? data.dimensions.width : "",
      height: data ? data.dimensions.height : "",
      depth: data ? data.dimensions.depth : "",
    },
    warrantyInformation: data ? data.warrantyInformation : "",
    shippingInformation: data ? data.shippingInformation : "",
    availabilityStatus: data ? data.availabilityStatus : "",
    returnPolicy: data ? data.returnPolicy : "",
    minimumOrderQuantity: data ? data.minimumOrderQuantity : "",
    meta: {
      createdAt: "",
      updatedAt: "",
      barcode: "",
      qrCode: "",
    },
    images: data ? data.images[0] : "",
    thumbnail: data ? data.thumbnail : "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dimensions: {
        ...formData.dimensions,
        [name]: value,
      },
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" font-poopins">
      <div className=" mb-3  border-b-2 pb-2 font-semibold md:text-2xl text-xl ">
        <h2>{formateText} Product</h2>
      </div>
      <div className=" font-extralight">
        <form onSubmit={formSubmit} className=" flex flex-col gap-3 md:gap-5">
          <div className=" flex flex-col gap-1">
            {" "}
            <label className=" font-light">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <div className=" flex flex-col gap-1">
            <label className=" font-light">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={5}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            ></textarea>
          </div>
          <div className=" flex gap-5 justify-between">
            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>
          </div>
          <div className=" flex gap-5 justify-between">
            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Discount Percentage:</label>
              <input
                type="number"
                step="0.01"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Stock:</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>
          </div>

          <div className=" flex gap-5 justify-between">
            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Tags (comma-separated):</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Brand:</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label className=" font-light">SKU:</label>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label className=" font-light">Weight:</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <fieldset>
            <legend className=" mb-1 font-light">Dimensions:</legend>
            <div className=" flex items-center gap-2">
              <div className="flex-1 items-center flex gap-2">
                {" "}
                <label className=" font-light">Width:</label>
                <input
                  type="number"
                  name="width"
                  value={formData.dimensions.width}
                  onChange={handleDimensionChange}
                  className="outline-none w-full bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
                />
              </div>
              <div className="flex-1  items-center flex gap-2">
                <label className=" font-light">Height:</label>
                <input
                  type="number"
                  name="height"
                  value={formData.dimensions.height}
                  onChange={handleDimensionChange}
                  className="outline-none w-full bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
                />
              </div>
              <div className="flex-1 items-center flex gap-2">
                <label className=" font-light">Depth:</label>
                <input
                  type="number"
                  name="depth"
                  value={formData.dimensions.depth}
                  onChange={handleDimensionChange}
                  className="outline-none w-full bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
                />
              </div>
            </div>
          </fieldset>

          <div className=" flex gap-5 justify-between">
            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Warranty Information:</label>
              <input
                type="text"
                name="warrantyInformation"
                value={formData.warrantyInformation}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Shipping Information:</label>
              <input
                type="text"
                name="shippingInformation"
                value={formData.shippingInformation}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>
          </div>

          <div className=" flex gap-5 justify-between">
            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Return Policy:</label>
              <input
                type="text"
                name="returnPolicy"
                value={formData.returnPolicy}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className=" font-light">Minimum Order Quantity:</label>
              <input
                type="number"
                name="minimumOrderQuantity"
                value={formData.minimumOrderQuantity}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label className=" font-light">
              Images (comma-separated URLs):
            </label>
            <input
              type="text"
              name="images"
              value={formData.images}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label className=" font-light">Thumbnail URL:</label>
            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>
          {type === "update" ? (
            <button
              className=" font-medium py-2 bg-blue-400 text-white rounded-lg"
              type="submit"
            >
              Update Product
            </button>
          ) : (
            <button
              className=" font-medium py-2 bg-blue-400 text-white rounded-lg"
              type="submit"
            >
              Add Product
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

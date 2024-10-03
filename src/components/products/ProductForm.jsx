import { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "",
    stock: "",
    tags: "",
    brand: "",
    sku: "",
    weight: "",
    dimensions: {
      width: "",
      height: "",
      depth: "",
    },
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    returnPolicy: "",
    minimumOrderQuantity: "",
    meta: {
      createdAt: "",
      updatedAt: "",
      barcode: "",
      qrCode: "",
    },
    images: "",
    thumbnail: "",
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
  return (
    <div className=" font-poopins">
      <div className=" mb-3  border-b-2 pb-2 font-semibold md:text-2xl text-xl ">
        <h2>Add Product</h2>
      </div>
      <div className=" font-extralight">
        <form className=" flex flex-col gap-3">
          <div className=" flex flex-col gap-1">
            {" "}
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <div className=" flex flex-col gap-1">
            <label>Description:</label>
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
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label>Price:</label>
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
              <label>Discount Percentage:</label>
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
              <label>Stock:</label>
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
              <label>Tags (comma-separated):</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label>Brand:</label>
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
            <label>SKU:</label>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label>Weight:</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <fieldset>
            <legend className=" mb-1">Dimensions:</legend>
            <div className=" flex items-center gap-2">
              <div className="flex-1 items-center flex gap-2">
                {" "}
                <label>Width:</label>
                <input
                  type="number"
                  name="width"
                  value={formData.dimensions.width}
                  onChange={handleDimensionChange}
                  className="outline-none w-full bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
                />
              </div>
              <div className="flex-1  items-center flex gap-2">
                <label>Height:</label>
                <input
                  type="number"
                  name="height"
                  value={formData.dimensions.height}
                  onChange={handleDimensionChange}
                  className="outline-none w-full bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
                />
              </div>
              <div className="flex-1 items-center flex gap-2">
                <label>Depth:</label>
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
              <label>Warranty Information:</label>
              <input
                type="text"
                name="warrantyInformation"
                value={formData.warrantyInformation}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label>Shipping Information:</label>
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
              <label>Return Policy:</label>
              <input
                type="text"
                name="returnPolicy"
                value={formData.returnPolicy}
                onChange={handleInputChange}
                className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label>Minimum Order Quantity:</label>
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
            <label>Images (comma-separated URLs):</label>
            <input
              type="text"
              name="images"
              value={formData.images}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label>Thumbnail URL:</label>
            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleInputChange}
              className="outline-none bg-slate-100 border rounded-lg px-2 py-1 border-slate-300"
            />
          </div>

          <button
            className=" font-medium py-2 bg-blue-400 text-white rounded-lg"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;

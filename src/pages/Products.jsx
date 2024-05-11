import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  const allProducts = data.products;
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = allProducts.filter(product =>
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="mt-6 mb-[50px] border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block  w-[30%] p-2 outline-none shadow-sm sm:text-sm  rounded-md"
        />

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* Display filtered products */}
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={product.images[1]} alt="" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-red-600">{product.price} $</p>
              </div>
              <Link to={`/productsdetails/${product.id}`} className="bg-blue-600 py-2 mt-3 text-white rounded-md block text-center">Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

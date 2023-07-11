import React, { useEffect, useState } from 'react';
import CategoryData from 'api/categories.json';
import Category from 'components/ui/Category';
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CategoryData);
  }, []);

  return (
    <div className=" flex flex-col bg-white">
      <div className="container mx-auto w-10/12">
        <h3 className="flex text-sm font-semibold mb-4 mt-4">Kategoriler</h3>
        <div className="flex flex-wrap gap-x-3 items-center justify-start mb-6 gap-y-8 p-1">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

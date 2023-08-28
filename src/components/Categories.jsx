import { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "~/components/ui/SectionTitle";
import CategoryItem from "~/components/ui/CategoryItem";

function Categories() {
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/category").then((res) => {
      setcategoryList(res.data);
    });
  }, []);

  console.log("category", categoryList);

  return (
    <div>
      <SectionTitle>Categories</SectionTitle>
      {categoryList.map((object, index) => (
        <CategoryItem
          key={index}
          index={index}
          url={object.url}
          title={object.name}
          img={object.img}
          posts={object.posts}
        />
      ))}
    </div>
  );
}

export default Categories;

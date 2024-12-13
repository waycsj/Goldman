import './Category.css';
import { categories } from "../../dummyData";
import CategoryItem from "../components/categoryItem/CategoryItem";

import CategoryItem from "../categoryItem/CategoryItem";

const Category = () => {
  return (
    <div className="category">
      {categories.map(data =>(
        <CategoryItem data={data} key={data.id} />
      ))}
    </div>
  )
}

export default Category;
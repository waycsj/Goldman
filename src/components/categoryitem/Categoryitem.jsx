import { Category } from "@mui/icons-material"
import { categories } from "../../dummyData"
import './categoryItem.css'
import CategoryItem from "../components/categoryItem/CategoryItem";

const CategoryItem = ({data}) => {
  // { prop: { } }
  // { prop2: { } }
  // { data: [{}, {}] }

  return (
    <div className="categoryItem">
      <img src={data.img} alt="" className="catImg"/>
      <div className="catInfo">
        <div className="catTitle">{data.title}</div>
        <button className="catBtn">BUY NOW</button>
      </div>  
    </div>
  )
}

export default CategoryItem;

//구조
//b  b  b
//b  b
//b
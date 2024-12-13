import { FavoriteBorder, SearchOffOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import './Products.css';
import { products } from "./dummyData";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.img} alt="" className="productImg" />
        <div className="productInfo">
          <ShoppingCartOutlined className='productIcon' />
          <SearchOutlined className='productIcon'/>
          <FavoriteBorder className='productIcon'/>
        </div>
    </div>
  )
}

// export default Product;
// const Products = () => {
//   return (
//     <div className="products">
//       {products.map((item) => (
//         <div className="productItem" key={item.id}>
//           <img src={item.img} alt={item.title} />
//           <h3>{item.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Products;
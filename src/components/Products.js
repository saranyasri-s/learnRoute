import { Link } from "react-router-dom";
import { useParams } from "react-router";
const Products = () => {
  const params = useParams();
  return (
    <>
      <h3>This is products page</h3>
      <ul>
        <li>
          <Link to="/products/book">A book</Link>
        </li>
        <li>
          <Link to="/products/note">A Note</Link>
        </li>
        <li>
          <Link to="/products/paper">A paper</Link>
        </li>
      </ul>
    </>
  );
};
export default Products;

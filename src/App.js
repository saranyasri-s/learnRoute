import NavigationHeader from "./components/NavigationHeader";
import Welcome from "./components/Welcome";
import { Route } from "react-router-dom";
import Products from "./components/Products";
import classes from "./App.module.css";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div className={classes.App}>
      <NavigationHeader></NavigationHeader>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route exact path="/products">
        <Products></Products>
      </Route>
      <Route path="/products/:product">
        <ProductDetail></ProductDetail>
      </Route>
    </div>
  );
}

export default App;

import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "./components/styled-components";

function App() {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Container>
  );
}

export default App;

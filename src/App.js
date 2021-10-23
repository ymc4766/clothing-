import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/Hompage/Hompage";
import ShopPage from "./pages/Shop/ShopPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" exact component={Hompage} />
        <Route path="/shop" exact component={ShopPage} />
      </BrowserRouter>
      {/* <Hompage /> */}
    </div>
  );
}

export default App;

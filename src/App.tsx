import { Routing } from "./pages/Routing/Routing";

function App() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", '{"cartData":[], "totalValue": 0 }');
  }

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;

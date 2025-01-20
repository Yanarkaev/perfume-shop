import { Routing } from "./pages/Routing/Routing";
import "./App.scss";
import { SuccessOrderModal } from "./shared/ui";
import { useAppSelector } from "./app/providers/storeProvider/hooks";
import { getOrderSelector } from "./entities/Order/model/selectors/brand.selector";

function App() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", '{"cartData":[], "totalValue": 0 }');
  }

  if (!localStorage.getItem("pagination")) {
    localStorage.setItem("pagination", '{"limit": 3, "page": 1}');
  }

  const { isSuccessOrder } = useAppSelector(getOrderSelector);

  return (
    <div className="App">
      {isSuccessOrder && <SuccessOrderModal />}
      <Routing />
    </div>
  );
}

export default App;

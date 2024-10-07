import { Routing } from "./pages/Routing/Routing";

function App() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  return (
    <>
      <Routing />
    </>
  );
}

export default App;

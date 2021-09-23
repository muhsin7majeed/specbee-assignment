import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

import Navbar from "_components/Navbar/Navbar";
import PurchaseReciept from "Pages/CreateReceipt/PurchaseReciept";

function App() {
  return (
    <div>
      <Navbar />
      <PurchaseReciept />
    </div>
  );
}

export default App;

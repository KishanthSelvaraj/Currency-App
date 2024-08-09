import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/currencyimg.jpeg')" }}
    >
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;

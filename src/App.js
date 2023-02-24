import "bulma/css/bulma.css";
import ProductList from "./components/ProductList";
import Hero from "./components/Hero";
import { ErrorBoundary } from "react-error-boundary";

const Fallback = () => {
  return (
    <div>
      <h1> Cannot get the product information</h1>
    </div>
  );
};

const ErrorHandling = (error, errorInfo) => {
  console.log("Logging", "Error:", error, "ErrorInfo:", errorInfo);
};

function App() {
  return (
    <div>
      <Hero />
      <ErrorBoundary FallbackComponent={Fallback} onError={ErrorHandling}>
        <ProductList />
      </ErrorBoundary>
    </div>
  );
}

export default App;

import "bulma/css/bulma.css";
import ProductList from "./components/ProductList";
import Hero from "./components/Hero";
import ErrorFallback from "./components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

const LogError = (error, errorInfo) => {
  console.log("Logging", "Error:", error, "ErrorInfo:", errorInfo.componentStack);
};

function App() {
  return (
    <div>
      <Hero />
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={LogError}>
        <ProductList />
      </ErrorBoundary>
    </div>
  );
}

export default App;

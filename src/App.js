import "bulma/css/bulma.css";
import { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import ErrorFallback from "./components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import Spinner from "./components/Spinner";

const ProductList = lazy(() => import("./pages/ProductList"));

const LogError = (error, errorInfo) => {
  console.log("Logging Error:", error, "ErrorInfo:", errorInfo.componentStack);
};

function App() {
  return (
    <div>
      <Hero />
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={LogError}>
        <Suspense fallback={<Spinner />}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;

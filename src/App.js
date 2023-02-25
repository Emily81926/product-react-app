import "bulma/css/bulma.css";
import { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import ErrorFallback from "./components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import Spinner from "./components/Spinner";
import LogError from "./hooks/log-error-function";

const ProductList = lazy(() => import("./pages/ProductList"));

function App() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={LogError}>
          <Suspense fallback={<Spinner />}>
            <ProductList />
          </Suspense>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;

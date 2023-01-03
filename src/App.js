import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/main.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import { Spinner } from "reactstrap";

const Main = lazy(() => import("./Pages/main"));

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense
          fallback={
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <Spinner />
            </div>
          }
        >
          <ToastContainer />
          <Main />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;

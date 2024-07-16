import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import router from "./Routes/Routes";
import store from "./App/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </HelmetProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";

// Configuraciones de Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Configuraciones de react-router-dom
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

// Estilos
import "./assets/sass/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import 'atropos/css'
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("wrapper") as HTMLElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

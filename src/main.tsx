import ReactDOM from "react-dom/client";
import App from "./App";
// Router
import { BrowserRouter as Router } from "react-router-dom";
// ReactQuery
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("wrapper") as HTMLElement).render(
  <QueryClientProvider client={client}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
);

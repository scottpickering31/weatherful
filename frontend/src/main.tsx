import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./state/store/store.tsx";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/loginpage.tsx";
import SignupPage from "./pages/signuppage.tsx";
import ErrorPage from "./pages/errorpage.tsx";
import PrivateRoute from "./routes/PrivateRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

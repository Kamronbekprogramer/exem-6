import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Product from "../pages/product/product";
import Main from "../pages/main/main";
import Todo from "../pages/todo/todo";
import ProductDetails from "../components/singlepage";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="main/*" element={<Main />}>
          <Route index element={<Product />} />
          <Route path="index/:id" element={<ProductDetails />} />
          <Route path="todo" element={<Todo />} />
        </Route>
        //{" "}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default Index;

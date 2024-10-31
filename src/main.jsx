import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from './components/footer/Footer'

const Home = lazy(() => import("./pages/home/Home"));
const CategoryPage = lazy(() => import("./pages/blogcategories/Categorypage"));
const AdminLogin = lazy(() => import("./pages/admin/adminLogin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/dashboard/Dashboard"));
const CreateBlog = lazy(() => import("./pages/admin/createBlog/CreateBlog"));
const Author = lazy(() => import("./pages/Author/Author"));
const AuthorLogin = lazy(() => import("./pages/Author/AuthorLogin"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const BlogPage = lazy(() => import("./pages/Blogs/blog"));
const NotFound = lazy(() => import("./pages/page404/page404"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/blogs/:category", element: <><CategoryPage /> <Footer/></> },
  { path: "/blogs/:category/:id", element: <><BlogPage /> <Footer/></> },
  { path: "/adminlogin", element: <AdminLogin /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/createblog", element: <CreateBlog /> },
  { path: "/author", element: <Author /> },
  { path: "/authorlogin", element: <AuthorLogin /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

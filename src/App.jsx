import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import "./index.css";
// layouts
import RootLayout from "./layouts/RootLayout";

// path in Route is the bath in the address bar
// Link and NavLink show up as anchor tags in the DOM. The user sees them
// NavLink automatically gets a class of "active" when its clicked

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

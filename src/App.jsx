import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/help/contact";
import Faq from "./pages/help/faq";
import NotFound from "./pages/NotFound";
import "./index.css";
// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

// path in Route is the bath in the address bar
// Link and NavLink show up as anchor tags in the DOM. The user sees them
// NavLink automatically gets a class of "active" when its clicked

// in a Route path= is what it looks for in the url bar. If it shows it will
// render the element=
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      {/* if the url path is wrong at all it renders the NotFound component */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

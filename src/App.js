import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route index element={<Index />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.page";
import MovieDetail from "./pages/MovieDetail.page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail/:movieID",
      element: <MovieDetail />,
    },
    // {
    //   path: "/detail",
    //   element: <MovieDetail />,
    // },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

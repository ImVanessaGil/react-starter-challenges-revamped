import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import App from "../App";
import NavLayout from "../pages/NavLayout";
import { paths } from "./paths";
import Home from "../pages/Home";
import { Tic_tac_toe } from "../pages/Tic_tac_toe";
import Video from "../pages/Video";
import Github_clone from "../pages/Github_clone";
import Default from "../pages/Default";
const router = createHashRouter([
  {
    path: paths.root,
    element: (
      <NavLayout>
        <Outlet />
      </NavLayout>
    ),
    children: [
      { index: true, element: <App /> },

      {
        path: paths.home.root,
        element: <Home />,
      },
      {
        path: paths.ticTacToe.root,
        element: <Tic_tac_toe />,
      },
      {
        path: paths.video.root,
        element: <Video />,
      },
      {
        path: paths.githubClone.root,
        element: <Github_clone />,
      },
      {
        path: paths.default.root,
        element: <Default />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

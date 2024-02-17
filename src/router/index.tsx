import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import QuestionManageLayout from "../layouts/QuestionManageLayout";
import QuestionManageList from "../views/QuestionManage/List";
import QuestionManageStar from "../views/QuestionManage/Star";
import QuestionManageTrash from "../views/QuestionManage/Trash";

import QuestionDetailLayout from "../layouts/QuestionDetailLayout";
import EditQuestion from "../views/QuestionDetail/Edit";
import StatQuestion from "../views/QuestionDetail/Stat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "manage",
        element: <QuestionManageLayout />,
        children: [
          {
            path: "list",
            element: <QuestionManageList />,
          },
          {
            path: "star",
            element: <QuestionManageStar />,
          },
          {
            path: "trash",
            element: <QuestionManageTrash />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "detail",
    element: <QuestionDetailLayout />,
    children: [
      {
        path: "edit/:id",
        element: <EditQuestion />,
      },
      {
        path: "stat/:id",
        element: <StatQuestion />,
      },
    ],
  },
]);

export default router;

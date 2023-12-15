import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import UserDashboard from "./views/Dashboard";
import AddBlog from "./views/document/summary";
import Answer from "./views/document/answer";
import UserLayout from "./views/layouts/UserLayout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/",
                element: <UserDashboard />,
            },
            {
                path: "/summary",
                element: <AddBlog />,
            },
            {
                path: "/answer",
                element: <Answer />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;

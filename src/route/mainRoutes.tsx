import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/block/LayOut";
import AddTask from "../pages/AddTask";
import ViewTask from "../pages/ViewTask";

export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                index: true,
                element: <AddTask />
            },
            {
                path: "/view",
                element: <ViewTask />
            }
        ]
    }
])
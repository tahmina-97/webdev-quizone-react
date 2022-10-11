import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import QuizDetails from "../components/QuizDetails";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Tutorials from "../components/Tutorials";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Tutorials></Tutorials> },
            { path: '/tutorials', element: <Tutorials></Tutorials> },
            {
                path: '/quiz/:topicId',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
                },
                element: <QuizDetails></QuizDetails>
            },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blog', element: <Blog></Blog> }

        ]
    }
]);

export default router;
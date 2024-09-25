import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import 'normalize.css';
import  {LazyNotFound} from './components/NotFound/NotFound';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Suspense fallback={<div>...Loading</div>}> <LazyNotFound /></Suspense>,
    },
    {
        path: "*", // Этот маршрут ловит все неправильные пути
        element: <Suspense fallback={<div>...Loading</div>}> <LazyNotFound /></Suspense>
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import NotFound from './components/Not Found/NotFound';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
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

reportWebVitals();

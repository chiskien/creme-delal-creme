import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./components/Auth/Login";
import {ErrorPage} from "./components/Error/ErrorPage";
import {RouteLayout} from "./components/RouteLayout";
import App from './App';
import {Dummies} from "./components/dummies/Dummies";
import {Register} from "./components/Auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/", element: <App/>
            },
            {
                path: "/login", element: <Login/>, errorElement: <ErrorPage/>

            },
            {
                path: "/register", element: <Register/>, errorElement: <ErrorPage/>
            },
            {
                path: "/dummies", element: <Dummies/>, errorElement: <ErrorPage/>
            }
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router}/>
        </ChakraProvider>
    </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ErrorPage from './error-page.jsx'
import Contact, { loader as contactLoader, action as contactAction, } from './routes/contact.jsx'
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import EditContact, {action as editAction} from './routes/edit.jsx'
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,  //Main page
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [  //Kaikki sivut/routit näkyvät Mainpagen sisällä. 
      {
      errorElement: <ErrorPage/>,
      children:[
        { index: true, element: <Index /> },
      {
        path: "contacts/:contactId", //:contactId on dynaaminen, eli url riippuu id:stä.
        element: <Contact/>, //contact sivu
        loader: contactLoader, //Näyttää datan, joka on haettu hakupalkilla.
        action: contactAction, // 
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact/>,
        loader: contactLoader,
        action: editAction, 
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction, //Delete button
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render( //root route
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>,
)

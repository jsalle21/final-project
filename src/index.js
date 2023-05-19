import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Genres from "./pages/genres";
import Platforms from "./pages/platforms";
import Storefronts from './pages/storefronts';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/games",
    element:<div>hi</div>
  },
  {
    path: "/genres",
    element:<Genres/>
  },
  {
    path: "/platforms",
    element:<Platforms/>
  },
  {
    path: "/storefronts",
    element:<Storefronts/>
  },
  {
    path: "/game-data",
    element:<h1>This is the game data section</h1>
  },
  {
    path: "/profile",
    element:<h1>This is the profile page</h1>
  },
  {
    path: "/",
    element:<App/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
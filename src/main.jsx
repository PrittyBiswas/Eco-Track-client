import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import RootLayout from './Layout/RootLayout.jsx';

import Challenges from './Pages/Challenges.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';

import AuthProvider from './context/AuthProvider.jsx';
import UserChallenges from './Pages/UserChallenges.jsx';
import ChallengesDetails from './Pages/ChallengesDetails.jsx';
import AllChallenges from './Pages/AllChallenges.jsx';

import Events from './Pages/Events.jsx';
import EventsDetails from './Pages/EventsDetails.jsx';
import Profile from './components/Profile.jsx';
import MyActivities from './Pages/MyActivities.jsx';
import { ActivitiesProvider } from './context/ActivitiesProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'Challenges',
        Component: Challenges
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },

      // User Challenges
      {
        path: 'UserChallenges',
        element: <UserChallenges />
      },

      // All Challenges
      {
        path: 'AllChallenges',
        Component: AllChallenges
      },

      // Challenge Details
      {
        path: "/ChallengesDetails/:id",
        element: <ChallengesDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`https://eco-web-server.vercel.app/Challenges/${params.id}`);
          const data = await res.json();
          return data;
        },
        errorElement: <div>Oops! Something went wrong loading the challenge.</div>
      },

      // Events
      {
        path: "events",
        element: <Events />
      },

      // Event Details
      {
        path: "/eventDetails/:id",
        element: <EventsDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`https://eco-web-server.vercel.app/event/${params.id}`);
          const data = await res.json();
          return data;
        }
      },
      {
        path: "activities",
        Component: MyActivities
      },

      // Profile Page
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <ActivitiesProvider>
        <RouterProvider router={router} />
      </ActivitiesProvider>

    </AuthProvider>
  </StrictMode>,
)

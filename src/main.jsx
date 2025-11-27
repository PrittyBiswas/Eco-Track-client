import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./Layout/RootLayout.jsx";

import Challenges from "./Pages/Challenges.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

import AuthProvider from "./context/AuthProvider.jsx";
import UserChallenges from "./Pages/UserChallenges.jsx";

import AllChallenges from "./Pages/AllChallenges.jsx";

import Events from "./Pages/Events.jsx";
import Profile from "./components/Profile.jsx";
import MyActivities from "./Pages/MyActivities.jsx";

import Join from "./Pages/Join.jsx";
import ActivitiesProvider from "./context/ActivitiesProvider.jsx";
import ChallengesDetails from "./Pages/ChallengesDetails.jsx";
import EventsDetails from "./Pages/EventsDetails.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "Challenges", element: <Challenges /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      { path: "UserChallenges", element: <UserChallenges /> },

      { path: "AllChallenges", element: <AllChallenges /> },

      {
        path: "ChallengesDetails/:id",
        element: <ChallengesDetails />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://eco-web-server.vercel.app/Challenges/${params.id}`
          );
          return res.json();
        },
        errorElement: <div>Oops! Something went wrong loading the challenge.</div>,
      },

      { path: "events", element: <Events /> },

      {
        path: "eventDetails/:id",
        element: <EventsDetails />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://eco-web-server.vercel.app/event/${params.id}`
          );
          return res.json();
        },
      },

      { path: "activities", element: <MyActivities /> },

      { path: "join", element: <Join /> },

      { path: "profile", element: <Profile /> },

      { path: "forgot-password", element: <ForgotPassword /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ActivitiesProvider>
        <RouterProvider router={router} />
      </ActivitiesProvider>
    </AuthProvider>
  </StrictMode>
);

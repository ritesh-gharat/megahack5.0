import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  SignIn,
  SignUp,
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Items from "./pages/Items";
import Markets from "./pages/Markets";
import Bidding from "./pages/Bidding";

// Protected route component
const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <Items />
            </ProtectedRoute>
          }
        />
        <Route
          path="/markets"
          element={
            <ProtectedRoute>
              <Markets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bidding"
          element={
            <ProtectedRoute>
              <Bidding/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
      </Routes>
    </div>
  );
}

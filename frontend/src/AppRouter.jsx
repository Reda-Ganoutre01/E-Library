import RootLayout from "./layouts/RootLayout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import LoadingPage from "./pages/loading/LoadingPage.jsx";

import UserRoutes from "./routes/UserRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";

import { Suspense } from "react";

export function AppRouter() {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/*" element={<UserRoutes />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/admin/*" element={<AdminRoutes />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </AuthProvider>
  );
}

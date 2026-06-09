import { Navigate } from "react-router";

import { useAuth } from "../Context/AuthContext";

export function ProtectedRoute({ children, redirectTo='/signin' }) {

    const { loading, isLoggedIn } = useAuth();

       if (loading) {
         <div className="min-h-screen flex items-center justify-center">
           <div className="animate-spin h-12 w-12 rounded-full border-t-2 border-b-2 border-rose-500"></div>
         </div>;
       }
       if (!isLoggedIn) return <Navigate to={redirectTo} replace />;

    return children;
}
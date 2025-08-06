import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../hook/useUser";
import Spinner from "./Spinner";

export default function ProtectedRoute({ children }) {
	//use in getting the current path
	const location = useLocation();

	// 1. Load the authenticated user data
	// loading the user data, userType, isLoading, and isAuthenticated status
	const { userType, isAuthenticated, isLoading } = useUser();

	// 2. While loading, show a spinner
	if (isLoading)
		return (
			<div className="fixed inset-0">
				<Spinner protectedRouteMsg="Please wait while loading your dashboard" />
			</div>
		);

		
	// 3. If not authenticated, redirect to login           
	if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />; 
		// If the user is not authenticated, redirect them to the login page
		// The `state` prop is used to pass the current location so that the user can be redirected back after login
		// The `replace` prop is used to replace the current entry in the history stack
		

	// Determine correct dashboard path
	// The correct path is based on the userType
	// If userType is "student", the correct path is "/studentDashboard"
	const correctPath = `/${userType}Dashboard`;

	// 4. If on wrong path, redirect to correct dashboard
	// If the current path does not start with the correct path, redirect to the correct dashboard
	// This ensures that users are always directed to their respective dashboards based on their userType
	if (!location.pathname.startsWith(correctPath)) return <Navigate to={correctPath} replace />;

	// 5. Otherwise, render the protected content
	// If the user is authenticated and on the correct path, render the children components
	if (isAuthenticated) return children;
}


// This component is a protected route that checks if the user is authenticated
// If the user is authenticated, it renders the children components
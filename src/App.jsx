import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//ContentAPI
import { IsOpenModalProvider } from "./context/OpenModalContext";

import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
//Pages
import Home from "./page/Home";
import Contact from "./page/Contact";
import Programs from "./page/Programs";
import About from "./page/About";
import Apply from "./page/Apply";
import Login from "./features/authentication/Login";
import SignUp from "./features/authentication/SignUp";
import PageNotFound from "./ui/PageNotFound";
//Forms
import LecturerLoginForm from "./features/authentication/LecturerLoginForm";
import StudentLoginForm from "./features/authentication/StudentLoginForm ";
import LecturerSignupForm from "./features/authentication/LecturerSignupForm";
import StudentSignupForm from "./features/authentication/StudentSignupForm";
//Dashboard
import LecturerDashboard from "./features/dashboard/LecturerDashboard";
import StudentDashboard from "./features/dashboard/StudentDashboard";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60, // 1 minutes
			/* 	cacheTime: 1000 * 60 * 10, // 10 minutes
	refetchOnWindowFocus: false,
	retry: false, */
		},
	},
});

function App() {
	return (
		<>
			<IsOpenModalProvider>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={false} />
					<BrowserRouter>
						<Routes>
							<Route element={<AppLayout />}>
								<Route index element={<Navigate replace to="home" />} />
								<Route path="home" element={<Home />} />
								<Route path="programs" element={<Programs />} />
								<Route path="about" element={<About />} />
								<Route path="contact" element={<Contact />} />
								<Route path="apply" element={<Apply />} />
							</Route>
							<Route path="login" element={<Login />} />
							<Route path="signup" element={<SignUp />} />
							<Route path="lecturerLogin" element={<LecturerLoginForm />} />
							<Route path="studentLogin" element={<StudentLoginForm />} />
							<Route path="studentSignup" element={<StudentSignupForm />} />
							<Route path="lecturerSignup" element={<LecturerSignupForm />} />
							{/* ProtectedRoute for the student dashboard */}
							<Route
								path="/student/dashboard"
								element={
									<ProtectedRoute allowedRoles={["student"]}>
										<StudentDashboard />
									</ProtectedRoute>
								}
							/>
							{/* ProtectedRoute for the lecturer dashboard */}
							<Route
								path="/lecturer/dashboard"
								element={
									<ProtectedRoute allowedRoles={["lecturer"]}>
										<LecturerDashboard />
									</ProtectedRoute>
								}
							/>
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</BrowserRouter>
					{/* Toaster */}
					<Toaster
						position="top-center"
						gutter={12}
						containerStyle={{ margin: "8px" }}
						toastOptions={{
							success: {
								duration: 3000,
							},
							error: {
								duration: 5000,
							},
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
							backgroundColor: "var(--color-grey-0)",
							color: "var(--color-grey-700)",
						}}
					/>
				</QueryClientProvider>
			</IsOpenModalProvider>
		</>
	);
}

export default App;



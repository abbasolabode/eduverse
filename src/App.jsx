import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//ContentAPI
import { IsOpenModalProvider } from "./context/OpenModalContext";
import { AuthContextProvider } from "./context/AuthContextProvider";

//Parents Layout
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
//Pages
import Home from "./page/Home";
import Programs from "./page/Programs";
import About from "./page/About";
import Apply from "./page/Apply";
import Login from "./features/authentication/Login";
import SignUp from "./features/authentication/SignUp";
import PageNotFound from "./ui/PageNotFound";
//Forms
import StudentLoginForm from "./features/authentication/StudentLoginForm ";
import LecturerLoginForm from "./features/authentication/LecturerLoginForm";
import StudentSignupForm from "./features/authentication/StudentSignupForm";
import LecturerSignupForm from "./features/authentication/LecturerSignupForm";
//Dashboards
import LecturerDashboard from "./features/dashboard/LecturerDashboard";
import StudentDashboard from "./features/dashboard/StudentDashboard";
//Links for student dashboard
import Biodata from "./ui/Biodata";
import BiodataForm from "./ui/BiodataForm";
import Courses from "./ui/Courses";
import Grades from "./ui/Grades";
import Assignments from "./ui/Assignments";

//Links for lecturer dashboard
import MyCourses from "./ui/MyCourses";
import Students from "./ui/Students";
import StudentsBiodata from "./ui/StudentsBiodata";
import UploadGrades from "./ui/UploadGrades";
import Password from "./ui/Password";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60, // 1 minutes
			/* 	cacheTime: 1000 * 60 * 10, // 10 minutes */
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthContextProvider>
					<IsOpenModalProvider>
						<ReactQueryDevtools initialIsOpen={false} />
						<BrowserRouter>
							<Routes>
								<Route element={<AppLayout />}>
									<Route index element={<Navigate replace to="home" />} />
									<Route path="home" element={<Home />} />
									<Route path="programs" element={<Programs />} />
									<Route path="about" element={<About />} />

									<Route path="apply" element={<Apply />} />
								</Route>
								<Route path="login" element={<Login />} />
								<Route path="signup" element={<SignUp />} />
								<Route path="lecturerLogin" element={<LecturerLoginForm />} />
								<Route path="studentLogin" element={<StudentLoginForm />} />
								<Route path="studentSignup" element={<StudentSignupForm />} />
								<Route path="lecturerSignup" element={<LecturerSignupForm />} />
								
								{/* Student Dashboard with nested routes */}
								// This route is protected and will only be accessible if the
								user is authenticated
								<Route
									path="studentDashboard"
									element={
										<ProtectedRoute>
											<StudentDashboard />
										</ProtectedRoute>
									}
								>
									{" "}
									// Nested routes for student dashboard
									<Route index element={<Navigate to="bioData" replace />} />
									<Route path="biodata" element={<Biodata />} />
									<Route path="courses" element={<Courses />} />
									<Route path="grades" element={<Grades />} />
									<Route path="assignments" element={<Assignments />} />
									<Route path="biodataForm" element={<BiodataForm />} />
								</Route>
								{/* Lecturer Dashboard */}
								<Route
									path="lecturerDashboard"
									element={
										<ProtectedRoute>
											<LecturerDashboard />
										</ProtectedRoute>
									}
								>
									/* Nested routes for lecturer dashboard */
									<Route index element={<Navigate to="myCourses" replace />} />
									<Route path="myCourses" element={<MyCourses />} />
									<Route path="students" element={<Students />} />
									<Route path="studentsBiodata" element={<StudentsBiodata />} />
									<Route path="uploadGrades" element={<UploadGrades />} />
									<Route path="password" element={<Password />} />
								</Route>
								<Route path="*" element={<PageNotFound />} />
							</Routes>
						</BrowserRouter>

						<Toaster
							position="top-center"
							gutter={12}
							containerStyle={{ margin: "8px" }}
							toastOptions={{
								success: {
									duration: 8000,
								},
								error: {
									duration: 10000,
								},
								fontSize: "16px",
								maxWidth: "500px",
								padding: "16px 24px",
								backgroundColor: "var(--color-grey-0)",
								color: "var(--color-grey-700)",
							}}
						/>
					</IsOpenModalProvider>
				</AuthContextProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;

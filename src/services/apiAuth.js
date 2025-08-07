import supabase from "./supabase";

////////////////LOGIN AUTHENTICATION ///////////////////////////////

//API function for the student/lecturer login
//I destructured the credentials variable passed to the API function using only the email and password
export async function loginUser({ email, password }) {
	// 1. Sign in with email and password
	// This will return an object with `data` and `error` properties
	// The `data` property contains the user object if login is successful
	// The `error` property contains the error message if login fails
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	// 2. Check for errors
	// If there's an error, throw it to be handled by the calling function
	if (error) {
		throw new Error(error.message === "Invalid login credentials" ? "Invalid login credentials" : "Invalid email or password");
	}

	return data;
}

/////////////////// GET EXISTING USER IF THE USER EXISTS ///////////////////////////////
//The getCurrentUser function is responsible for checking if the user is logged in and fetching their data
//It checks the session and retrieves the user data if a session exists
//It returns the user object with their metadata, including userType
//This function is used to determine if the user is logged in and to fetch their details

export async function getCurrentUser() {
	// 1. Check session
	// Get the current session from local storage (doesn't make network request)
	// Checks if session exists in the localStorage
	// Destructure the `data` property and renames it to `session

	const { data: session } = await supabase.auth.getSession();

	// Early return if no active session exists
	if (!session.session) return null;

	// 2. Get authenticated user
	// Fetch fresh user data from server (validates the session) if there's an active session
	// Destructure into `data` (user object) and `error
	const { data: user, error } = await supabase.auth.getUser();
	if (error) throw new Error(error.message || "Unable to fetch user data");

	// 3. Return user object
	return { user };
}

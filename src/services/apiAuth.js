import supabase from "./supabase";

//API function for the student login
export async function loginUser({ email, password}) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		console.error(error.message);
		throw new Error(error.message === "Invalid login credentials" ? 'Invalid email or password' : "Login failed. Try again");
	}

	console.log(data);
	return data;
}



export async function getCurrentUser() {
	// Get the current session from local storage (doesn't make network request)
	// Destructures the `data` property and renames it to `session`
	const { data: session } = await supabase.auth.getSession();

	// Early return if no active session exists
	if (!session.session) return null;

	// Fetch fresh user data from server (validates the session)
	// Destructures into `data` (user object) and `error
	const { data, error } = await supabase.auth.getUser();
                
	//If there's an error, display the error in the console
	if (error) throw new Error(error.message);

	return data?.user ?? null;
}

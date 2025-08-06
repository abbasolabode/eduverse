import { createContext, useContext } from "react";
import { useUser } from "../hook/useUser";

// 1.CREATE A CONTEXT
const AuthContext = createContext();

//Function to provide the context to the children
function AuthContextProvider({ children }) {
	const { user = {} } = useUser();
    
	console.log(user);

	// 2. PROVIDE THE CONTEXT TO THE CHILDREN
	// The AuthContext.Provider is used to provide the context value to the children components
	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
}


// 3. CREATE A CUSTOM HOOK TO USE THE CONTEXT
function useAuthContext() {
	const context = useContext(AuthContext);
	//Check if the context is undefined
	if (context === undefined)
		throw new Error(
			"useAuthContext must be used within an AuthContextProvider"
		);
	return context;
}

export { AuthContextProvider, useAuthContext };

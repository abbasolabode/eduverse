import { createContext, useContext, useState } from "react";

//CREATE A CONTEXT
const OpenModalContext = createContext();

function IsOpenModalProvider({ children }) {
	//useState hook
	const [isOpenModal, setIsOpenModal] = useState(false);

	//Function responsible for toggling functionality
	function handleToggle() {
		setIsOpenModal(isOpen => !isOpen);
	}

	//Function responsible for the close modal functionality
	function closeModal() {
		setIsOpenModal(false);
	}


	// 2. PROVIDE THE CONTEXT TO THE CHILDREN
	return (
		<OpenModalContext.Provider
			value={{ isOpenModal, setIsOpenModal, closeModal, handleToggle }}
		>
			{children}
		</OpenModalContext.Provider>
	);
}

//CUSTOM HOOK
function useModalClip() {
	//using the context provided to the useModalClip 
	//useContext hook is used to access the context value
	const context = useContext(OpenModalContext); //Use the values provided to OpenModalContext.Provider inside the useModalClip hook

	//Check if the context is undefined
	if (context === undefined)
		throw new Error(
			" OpenModalContext was used outside of OpenModalContext provider"
		);

	return context;
}

export { IsOpenModalProvider, useModalClip };

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
	const context = useContext(OpenModalContext);

	//Check if the context is undefined
	if (context === undefined)
		throw new Error(
			" OpenContactFormContext was used outside of OpenContactFormContext provider"
		);

	return context;
}

export { IsOpenModalProvider, useModalClip };

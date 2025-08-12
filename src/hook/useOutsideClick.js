import { useEffect, useRef } from "react";

export function useOutsideClick(closeModal, listenCapturing = true) {
	//The useRef hook is used to create a mutable object that persists for the full lifetime of the component.
	const ref = useRef();

	useEffect(
		function () {
			function handleClick(e) {
				//Checks if the selected element exists and it does not contain the clicked element then closeModal function is invoked
				if (ref.current && !ref.current.contains(e.target)) {
					closeModal(); //close function
				}
			}

			//The line document.addEventListener("click", handleClick, listenCapturing); is instructing the document to listen for click events. When a click event occurs, the function handleClick will be executed.
			document.addEventListener("click", handleClick, listenCapturing);
			//Cleanup function
			return () =>
				document.removeEventListener("click", handleClick, listenCapturing); // is a cleanup function that removes the event listener when the component is unmounted or when dependencies change (if this is part of a React component).
		},
		[closeModal, listenCapturing]
	);

	return ref;
}

// This custom hook is used to handle outside click events in React components. It takes a closeModal function as an argument, which will be called when a click occurs outside of the referenced element. The hook returns a ref that should be attached to the element you want to monitor for outside clicks.
// The useEffect hook is used to set up the event listener for click events on the document. When a click occurs, the handleClick function checks if the clicked element is outside of the referenced element. If it is, the handler function is called. The cleanup function removes the event listener when the component unmounts or when dependencies change.

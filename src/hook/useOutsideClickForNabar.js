/* import { useEffect, useRef } from "react";


export function useOutsideClickForNavbar(close, listenCapturing = true){
 const ref = useRef();


    useEffect(()=>{
       function handleClick(e){
          //Checks if the selected element exists and it does not contain the clicked element then handler function is invoked
				if (ref.current && !ref.current.contains(e.target)) {
					close(); //close function
				}
       }
 
       document.addEventListener("click", handleClick, listenCapturing);

       return ()=> document.removeEventListener("click", handleClick, listenCapturing)

    }, [ close, listenCapturing])


    return ref;
} */
import { useEffect } from "react";
import StudentLoginForm from "./StudentLoginForm ";


export default function Login() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return<StudentLoginForm/>
}

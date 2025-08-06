import { useEffect } from "react";
import StudentSignupForm from "./StudentSignupForm";


export default function SignUp() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    
  return <StudentSignupForm />
}

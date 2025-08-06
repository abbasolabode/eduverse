import { useEffect } from "react";
import ApplicationForm from "../ui/ApplicationForm";


export default function Apply() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <ApplicationForm/>
  )
}

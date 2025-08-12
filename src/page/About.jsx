import { useEffect } from "react";
import AboutCampusPathways from "../ui/AboutCampusPathways";

export default function About() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <AboutCampusPathways />
    </div>
  )
}

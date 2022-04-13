import { useState, useLayoutEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  const handleActiveSection = (id: string) => {
    setActiveSection(id);
  };

  useLayoutEffect(() => {
    const section = document.getElementById(activeSection);
    if (section) {
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

  return { activeSection, handleActiveSection };
}

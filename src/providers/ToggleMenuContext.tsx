// ToggleMenuContext.tsx
import React, { createContext, useContext, useState } from "react";

interface ToggleMenuContextProps {
  active: boolean;
  setActiveToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleMenuContext = createContext<ToggleMenuContextProps | undefined>(
  undefined
);

export const useToggleMenu = () => {
  const context = useContext(ToggleMenuContext);
  if (context === undefined) {
    throw new Error("useToggleMenu must be used within a ToggleMenuProvider");
  }
  return context;
};

export const ToggleMenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [active, setActiveToggle] = useState(false);

  return (
    <ToggleMenuContext.Provider value={{ active, setActiveToggle }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};

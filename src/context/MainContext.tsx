import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface MainContextProps {
  shouldRenderList: boolean;
  handleRenderList: () => void;
}

interface MainContextProviderProps {
  children: ReactNode;
}

const MainContext = createContext<MainContextProps>({} as MainContextProps);

export function MainContextProvider({ children }: MainContextProviderProps) {
  const [shouldRenderList, setShouldRenderList] = useState(false);
  const [handleClick, setHandleClick] = useState(false);

  const handleRenderList = () => {
    setHandleClick((state) => !state);
    setShouldRenderList(true);
  };

  useEffect(() => {
    const element = document.getElementById("list-result");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [handleClick]);

  return (
    <MainContext.Provider value={{ handleRenderList, shouldRenderList }}>
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}

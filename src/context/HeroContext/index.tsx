import { createContext, useState } from "react";
import { IHeroContext, IHeroProvider } from "./types";

export const HeroContext = createContext({} as IHeroContext);

export function HeroProvider({ children }: IHeroProvider) {
  const [data, setData] = useState({});
  return (
    <HeroContext.Provider value={{ data, setData }}>
      {children}
    </HeroContext.Provider>
  );
}

export default HeroProvider;

import React, { Dispatch, SetStateAction } from "react";

export interface IHeroContext {
  data: object;
  setData: Dispatch<SetStateAction<object>>;
}

export interface IHeroProvider {
  children: React.ReactNode;
}

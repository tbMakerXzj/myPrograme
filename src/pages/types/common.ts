import { ReactNode } from "react";

export interface IMenuConfig {
  name: string;
  icon: ReactNode | null;
  children?: IMenuConfig[];
  key: string;
}

export interface ICommonObj {
  [key: string]: string;
}

export interface RouterConfig {
  path: string;
  component?: any;
  exatc?: boolean;
  children?: RouterConfig[];
  sensitive?: boolean;
  strict?: boolean;
}

export interface ModuleWrapperProps {
  children: ReactNode;
  width?: number | string;
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

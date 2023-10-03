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

export type Optional1<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

// Partial 实现原理
type myPartial<T> = {
  [P in keyof T]?: T[P];
};

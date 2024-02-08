import { RouterConfig } from "@/types/common";
import { lazy } from "react";

export const routerConfig: RouterConfig[] = [
  {
    path: "/dashboard",
    component: lazy(() => import("@/pages/dashboard")),
  },
  // css
  {
    path: "/css1",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("@/pages/cssFolder/test1")),
      },
    ],
  },
  {
    path: "/css2",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("@/pages/cssFolder/css2")),
      },
    ],
  },
  {
    path: "/css3",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("@/pages/cssFolder/css3")),
      },
    ],
  },
  // ts
  {
    path: "/ts1",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("@/pages/tsFolder/ts1")),
      },
    ],
  },
  // js
  {
    path: "/js1",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("@/pages/jsFolder/js1")),
      },
    ],
  },
  // problem
  {
    path: "/problem",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("@/pages/problem")),
      },
    ],
  },
  // demo
  {
    path: "/demo1",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("@/pages/componentDemo/demo1")),
      },
    ],
  },
  {
    path: "/demo2",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("@/pages/componentDemo/demo2")),
      },
    ],
  },
];

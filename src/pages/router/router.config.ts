import { RouterConfig } from "@/pages/types/common";
import { lazy } from "react";

export const routerConfig: RouterConfig[] = [
  {
    path: "/dashboard",
    component: lazy(() => import("../dashboard")),
  },
  // css
  {
    path: "/css1",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("../cssFolder/test1")),
      },
    ],
  },
  {
    path: "/css2",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("../cssFolder/css2")),
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
        component: lazy(() => import("../tsFolder/ts1")),
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
        component: lazy(() => import("../jsFolder/js1")),
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
        component: lazy(() => import("../problem")),
      },
    ],
  },
];

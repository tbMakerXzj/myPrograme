import { RouterConfig } from "@/pages/types/common";
import { lazy } from "react";

export const routerConfig: RouterConfig[] = [
  {
    path: "/dashboard",
    component: lazy(() => import("../dashboard")),
  },
  {
    path: "/test1",
    exatc: false,
    children: [
      {
        path: "",
        component: lazy(() => import("../cssFolder/test1")),
      },
    ],
  },
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
];

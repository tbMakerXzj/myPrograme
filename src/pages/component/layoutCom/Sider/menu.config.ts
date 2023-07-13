import { ICommonObj, IMenuConfig } from "../../../types/common";

// 路由配置
export const pathConfig: ICommonObj = {
  dashboard: "/dashboard",
  test1: "/test1",
  ts1: "/ts1",
  js1: "/js1",
};

// 菜单配置
export const menuConfig: IMenuConfig[] = [
  {
    key: "dashboard",
    name: "主页",
    icon: "HomeOutlined",
    children: [],
  },
  {
    key: "CSS",
    icon: "HddOutlined",
    name: "CSS",
    children: [
      {
        key: "test1",
        icon: null,
        children: [],
        name: "测试1",
      },
    ],
  },
  {
    key: "TS",
    icon: "HeatMapOutlined",
    name: "TS",
    children: [
      {
        key: "ts1",
        icon: null,
        children: [],
        name: "ts1",
      },
    ],
  },
  {
    key: "JS",
    icon: "HeatMapOutlined",
    name: "JS",
    children: [
      {
        key: "js1",
        icon: null,
        children: [],
        name: "js1",
      },
    ],
  },
];

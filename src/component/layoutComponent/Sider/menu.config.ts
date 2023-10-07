import { ICommonObj, IMenuConfig } from "@/types/common";

// 路由配置
export const pathConfig: ICommonObj = {
  dashboard: "/dashboard",
  css1: "/css1",
  css2: "/css2",
  ts1: "/ts1",
  js1: "/js1",
  problem: "/problem",
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
    key: "problem",
    icon: "QuestionCircleOutlined",
    name: "面试问题",
  },
  {
    key: "CSS",
    icon: "HddOutlined",
    name: "CSS",
    children: [
      {
        key: "css1",
        icon: null,
        children: [],
        name: "测试1",
      },
      {
        key: "css2",
        icon: null,
        children: [],
        name: "测试2",
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
    icon: "BuildOutlined",
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

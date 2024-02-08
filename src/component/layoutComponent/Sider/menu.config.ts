import { ICommonObj, IMenuConfig } from "@/types/common";

// 路由配置
export const pathConfig: ICommonObj = {
  dashboard: "/dashboard",
  css1: "/css1",
  css2: "/css2",
  css3: "/css3",
  ts1: "/ts1",
  js1: "/js1",
  problem: "/problem",
  demo1: "/demo1",
  demo2: "/demo2",
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
      {
        key: "css3",
        icon: null,
        children: [],
        name: "测试3",
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
  {
    key: "component",
    icon: "BuildOutlined",
    name: "component",
    children: [
      {
        key: "demo1",
        icon: null,
        children: [],
        name: "demo1",
      },
      {
        key: "demo2",
        icon: null,
        children: [],
        name: "demo2",
      },
    ],
  },
];

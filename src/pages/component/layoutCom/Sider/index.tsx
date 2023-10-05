import React, { useEffect, useState } from "react";
import { Menu, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import * as Icon from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import { menuConfig, pathConfig } from "./menu.config";
import { IMenuConfig } from "../../../types/common";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const navigate = useNavigate();
  const local = useLocation();

  const handleClick = (e: MenuInfo) => {
    const key: string | undefined = Object.keys(pathConfig).find((i: string) => i === e.key);
    if (key && pathConfig[key]) {
      setSelectedKeys([key]);
      navigate(`/${key}`);
    } else {
      navigate("/");
    }
  };

  const renderMenu = (menuConfig: IMenuConfig[]) => {
    const res = menuConfig.map((item: IMenuConfig) => {
      let icon = null;
      if (item.icon) {
        // @ts-ignore
        icon = React.createElement(Icon[item.icon], {
          style: { fontSize: "16px" },
        });
      }
      if (item.children && item.children.length) {
        return (
          <SubMenu icon={icon} title={item.name} key={item.key}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item icon={icon} title={item.name} key={item.key}>
            {item.name}
          </Menu.Item>
        );
      }
    });
    return res;
  };

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  useEffect(() => {
    const pathname = local.pathname.split("/")[1] || "dashboard";

    // 选中的菜单
    if (pathname) {
      setSelectedKeys([pathname]);
    }

    // 展开的菜单
    menuConfig.forEach((i: IMenuConfig) => {
      if (i.children && i.children.length) {
        i.children.forEach((j: IMenuConfig) => {
          if (j.key === pathname) {
            setOpenKeys([i.key]);
          }
        });
      }
    });
  }, [local.pathname]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      theme="light"
      trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onCollapse={setCollapsed}
      style={{ height: "100%", overflow: "auto" }}
    >
      <Menu
        mode="inline"
        onClick={handleClick}
        selectedKeys={selectedKeys}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
      >
        {renderMenu(menuConfig)}
      </Menu>
    </Sider>
  );
};

export default SiderBar;

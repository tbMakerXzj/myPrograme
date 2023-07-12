import { Layout, Spin } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";

import "./index.css";
import Header from "../component/layoutCom/Header";
import Sider from "../component/layoutCom/Sider";
// import Sider from '@/pages/component/layoutCom/Sider'
import { Suspense } from "react";
import { routerConfig } from "./router.config";
import { RouterConfig } from "../types/common";

function Router() {  
  const getRouter = (config: RouterConfig[]) => {
    const handleArr: any = [];
    handleRouter(config, handleArr, "");

    return handleArr.map((item: RouterConfig) => {
      const { component, path } = item;
      const C = component;
      // getAuth(path, authBtn.current, authMenus.current);
      return <Route path={path} element={<C />} key={path} />;
    });
  };

  const handleRouter = (
    config: RouterConfig[],
    arr: any[],
    fatherPath = ""
  ) => {
    config.forEach((item: RouterConfig) => {
      if (item.children) {
        handleRouter(item.children, arr, `${fatherPath}${item.path}`);
      } else {
        arr.push(
          Object.assign({}, item, { path: `${fatherPath}${item.path}` })
        );
      }
    });
  };
  return (
    <Layout className="layoutWrapper">
      <Header />
      <Layout>
        <Sider />
        <Layout className="layoutRight">
          <Suspense
            fallback={
              <div className="flex-center" style={{ height: "100%" }}>
                <Spin spinning={true} />
              </div>
            }
          >
            <Routes>
              {getRouter(routerConfig)}
              {/* {
                <Route
                  path="/"
                  element={<Navigate replace to={"/dashboard"} />}
                />
              } */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </Suspense>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Router;

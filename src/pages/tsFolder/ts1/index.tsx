// import ModuleWrapper from '../../../pages/component/moduleWrapper';
import React from "react";
import ModuleWrapper from "@/pages/component/moduleWrapper";

import styles from "./index.module.less";
// 联合类型

const ts1: React.FC = () => {
  return (
    <ModuleWrapper>
      <h3 className={styles.h3}>页面主要写一些ts相关的知识</h3>
      {`
      interface Person {
        name: string;
        age: number;
        
    }`}
    </ModuleWrapper>
  );
};

export default ts1;

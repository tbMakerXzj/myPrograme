import React, { memo, useState } from "react";
import styles from "./index.module.less";
import ModuleWrapper from "@/component/moduleWrapper";

type IConfig = {
  title: string;
  content: string;
};

const config: IConfig[] = [
  {
    title: "这是tabs title1",
    content: "这是tabs content1",
  },
  {
    title: "这是tabs title2",
    content: "这是tabs content2",
  },
  {
    title: "这是tabs title3",
    content: "这是tabs content3",
  },
  {
    title: "这是tabs title4",
    content: "这是tabs content4",
  },
  {
    title: "这是tabs title5",
    content: "这是tabs content5",
  },
];

const Css4 = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <ModuleWrapper>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsWrapper}>
          {config?.map((item, index) => {
            return (
              <>
                <div className={styles.tabsTitle} onClick={() => setActiveIndex(index)}>
                  {item.title}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.tabsContent}>{config[activeIndex].content}</div>
    </ModuleWrapper>
  );
};

export default memo(Css4);

import ModuleWrapper from "@/component/moduleWrapper";
import React from "react";
import style from "./index.module.less";
import { Space } from "antd";

const Css3: React.FC = () => {
  return (
    <ModuleWrapper>
      <Hamburger />
    </ModuleWrapper>
  );
};

const Hamburger = (): JSX.Element => {
  return (
    <Space>
      <button className={style.hamburger}>
        <div className={style.hamburger_line} />
        <div className={style.hamburger_line} />
        <div className={style.hamburger_line} />
      </button>
      <button className={style.hamburger}>
        <div className={style.hamburger_line1} />
        <div className={style.hamburger_line1} />
        <div className={style.hamburger_line1} />
      </button>
      <button className={style.hamburger}>
        <div className={style.hamburger_line2} />
        <div className={style.hamburger_line2} />
        <div className={style.hamburger_line2} />
      </button>
      <button className={style.hamburger}>
        <div className={style.hamburger_line3} />
        <div className={style.hamburger_line3} />
        <div className={style.hamburger_line3} />
      </button>
      <button className={style.hamburger}>
        <div className={style.hamburger_line4} />
        <div className={style.hamburger_line4} />
        <div className={style.hamburger_line4} />
      </button>
      <button className={style.hamburger}>
        <div className={style.hamburger_line5} />
        <div className={style.hamburger_line5} />
        <div className={style.hamburger_line5} />
      </button>
    </Space>
  );
};

export default Css3;

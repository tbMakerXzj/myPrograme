import { useEffect } from "react";
import style from "./index.module.css";
const Dashboard = () => {
  useEffect(() => {
    const words = document.querySelector(`.${style.home}`) as HTMLElement;
    words.innerHTML =
      words?.textContent
        ?.split("")
        .map(
          (c: string, i: number, arr: string[]) =>
            `<span style="--i:${arr.length - i}" >${c}</span>`
        )
        .join("") || "";
  }, []);

  return <div className={style.home}>Welcome to my demo test</div>;
};

export default Dashboard;

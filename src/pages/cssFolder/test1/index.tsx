import ModuleWrapper from "../../component/moduleWrapper";
import style from "./index.module.css";

const test1 = () => {
  return (
    <div className={style.wrapper}>
      <ModuleWrapper>
        <div className={style.test}>
          <div className={style.bg }/>
          <div className={style.text} >传媒案例1</div>
        </div>
      </ModuleWrapper>
      <ModuleWrapper>21312</ModuleWrapper>
    </div>
  );
};

export default test1;

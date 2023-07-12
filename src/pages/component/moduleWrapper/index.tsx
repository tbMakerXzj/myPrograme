import { ModuleWrapperProps } from "@/pages/types/common";

import style from "./index.module.css";

const ModuleWrapper: React.FC<ModuleWrapperProps> = ({ children, width }) => {
  return (
    <div className={style.wrapper} style={{ width: width }}>
      {children}
    </div>
  );
};

export default ModuleWrapper;

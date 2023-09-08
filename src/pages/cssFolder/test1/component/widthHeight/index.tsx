import React from 'react';
import style from './index.module.css';

const WidthHeight = () => {
  return (
    <div className={style.item}>
      <div className={style.inner}>
        <div className={style.container}>主要功能 css 实现长宽等比例缩放</div>
      </div>
    </div>
  );
};

export default WidthHeight;

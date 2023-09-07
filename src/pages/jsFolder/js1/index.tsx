import React from 'react';
import ModuleWrapper from '../../component/moduleWrapper';

const arr = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, c: 2 }
];

const JS1: React.FC = () => {
  const uniqueArray = (arr: any[]) => {
    const result: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      const item1 = arr[i];
      let isFind: boolean = false;
      for (let j = 0; j < result.length; j++) {
        const item2 = result[j];
        if (equal(item1, item2)) {
          isFind = true;
          break;
        }
      }
      if (!isFind) {
        result.push(item1);
      }
    }
    return result;
  };

  const isPrimitive = (val: any): boolean => {
    return val === null || !['object', 'function'].includes(typeof val);
  };

  const equal = (val1: any, val2: any): boolean => {
    // 判断是否存在原始类型
    if (isPrimitive(val1) || isPrimitive(val2)) {
      return Object.is(val1, val2);
    }
    const entries1 = Object.entries(val1);
    const entries2 = Object.entries(val2);

    if (entries1.length !== entries2.length) {
      return false;
    }

    for (const [key, value] of entries1) {
      if (!equal(value, val2[key])) {
        return false;
      }
    }

    return true;
  };
  return (
    <ModuleWrapper>
      <h2>数组对象去重</h2>
      <p>去重前：{JSON.stringify(arr)}</p>
      <p>去重后：{JSON.stringify(uniqueArray(arr))}</p>
    </ModuleWrapper>
  );
};

export default JS1;

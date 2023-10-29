/**
 * 防抖组件  简易版
 *
 */
import React, { useEffect, useRef, useState } from "react";
import { Input } from "antd";
import style from "./index.module.less";
import { SearchInputProps } from "@/types/common";
import { SearchOutlined } from "@ant-design/icons";

const SearchInput: React.FC<SearchInputProps> = ({ onChange, value, placeholder }) => {
  const timer = useRef<any>(null);
  const [keyword, setKeyword] = useState<string | undefined>(value);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e?.target?.value?.trim();
    setKeyword(newKeyword);
    timer && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      onChange?.(newKeyword);
    }, 1000);
  };

  useEffect(() => {
    setKeyword(value);
  }, [value]);

  return (
    <div style={{ width: "180px" }} className={style.searchInputWrapper}>
      <Input
        width={220}
        suffix={<SearchOutlined className={style.searchIcon} />}
        onChange={onValueChange}
        value={keyword}
        placeholder={placeholder || "请输入"}
      />
    </div>
  );
};

export default SearchInput;

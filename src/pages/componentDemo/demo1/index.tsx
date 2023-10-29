/* eslint-disable no-console */
import React from "react";
import SearchInput from "@/component/searchComponent";
import ModuleWrapper from "@/component/moduleWrapper";

const Demo1: React.FC = () => {
  return (
    <ModuleWrapper>
      <SearchInput onChange={(val: any) => console.log(val)} value="123" />
    </ModuleWrapper>
  );
};

export default Demo1;

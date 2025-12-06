import React, { memo, useState } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

const Demo4 = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs: TabItem[] = [
    {
      id: "tab1",
      label: "标签页 1",
      content: (
        <div style={{ padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
          <h3>标签页 1 的内容</h3>
          <p>这是第一个标签页的内容区域。你可以在这里放置任何内容。</p>
        </div>
      ),
    },
    {
      id: "tab2",
      label: "标签页 2",
      content: (
        <div style={{ padding: "20px", backgroundColor: "#e6f7ff", borderRadius: "8px" }}>
          <h3>标签页 2 的内容</h3>
          <p>这是第二个标签页的内容区域。展示不同的信息。</p>
        </div>
      ),
    },
    {
      id: "tab3",
      label: "标签页 3",
      content: (
        <div style={{ padding: "20px", backgroundColor: "#f6ffed", borderRadius: "8px" }}>
          <h3>标签页 3 的内容</h3>
          <p>这是第三个标签页的内容区域。每个标签都有独立的内容。</p>
        </div>
      ),
    },
    {
      id: "tab4",
      label: "标签页 4",
      content: (
        <div style={{ padding: "20px", backgroundColor: "#fff5e6", borderRadius: "8px" }}>
          <h3>标签页 4 的内容</h3>
          <p>这是第四个标签页的内容区域。每个标签都有独立的内容。</p>
        </div>
      ),
    },
    {
      id: "tab5",
      label: "标签页 5",
      content: (
        <div style={{ padding: "20px", backgroundColor: "#fef08a", borderRadius: "8px" }}>
          <h3>标签页 5 的内容</h3>
          <p>这是第五个标签页的内容区域。每个标签都有独立的内容。</p>
        </div>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Tabs 组件示例（tab之间添加了自定义icon）</h2>

      {/* 基础样式 - 修复下划线长度和颜色 */}
      <div style={{ marginBottom: "40px" }}>
        <h3>基础样式</h3>
        <div style={{ position: "relative" }}>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", gap: "2px", borderBottom: "2px solid #f0f0f0" }}>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "12px 24px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: activeTab === tab.id ? "#1890ff" : "#666",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    transition: "color 0.3s ease",
                    position: "relative",
                    userSelect: "none",
                    flex: "1",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.color = "#40a9ff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.color = "#666";
                    }
                  }}
                >
                  {tab.label}
                </div>
              ))}
            </div>

            {/* 通过绝对定位添加icon，不影响tabs宽度 */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                pointerEvents: "none",
              }}
            >
              {tabs.slice(0, -1).map((_, index) => {
                const tabWidth = 100 / tabs.length;
                const iconPosition = (index + 1) * tabWidth;
                return (
                  <div
                    key={index}
                    style={{
                      position: "absolute",
                      left: `${iconPosition}%`,
                      top: 0,
                      bottom: 0,
                      transform: "translateX(-50%)",
                      pointerEvents: "auto",
                      cursor: "pointer",
                      color: "#999",
                      fontSize: "18px",
                      transition: "color 0.3s ease",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#40a9ff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#999";
                    }}
                    onClick={() => {
                      // console.log(`点击了第${index + 1}个icon`);
                      // 这里可以添加自定义的icon点击逻辑
                    }}
                  >
                    {index === 0 && "➕"}
                    {index === 1 && "⚡"}
                    {index === 2 && "🎯"}
                    {index === 3 && "🔥"}
                  </div>
                );
              })}
            </div>
          </div>
          {/* 统一的下划线容器 - 修复颜色和长度 */}
          <div style={{ display: "flex", gap: "2px", position: "relative", height: "2px", marginTop: "-2px" }}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                style={{
                  flex: "1",
                  height: "2px",
                  backgroundColor: activeTab === tab.id ? "#1890ff" : "red",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
        <div style={{ minHeight: "120px", marginTop: "20px" }}>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
      </div>
    </div>
  );
};

export default memo(Demo4);

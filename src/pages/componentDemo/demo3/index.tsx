import React, { memo, useState, useRef, useEffect } from "react";

const Demo3 = () => {
  const [content, setContent] = useState("这是可编辑的内容");
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 处理点击外部区域失焦
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 处理编辑图标点击
  const handleEditClick = () => {
    setIsEditing(true);
    // 聚焦到content区域并将光标定位到最后
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.focus();

        // 将光标定位到内容末尾
        const range = document.createRange();
        const selection = window.getSelection();

        if (contentRef.current.lastChild) {
          range.selectNodeContents(contentRef.current.lastChild);
          range.collapse(false); // 折叠到末尾
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      }
    }, 0);
  };

  // 处理header和footer的点击事件
  const handleHeaderFooterClick = (e: React.MouseEvent) => {
    // 只在编辑状态下阻止失焦
    if (isEditing) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // 处理内容变化
  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.textContent || "";
    setContent(newContent);
  };

  // 处理失焦
  const handleBlur = () => {
    // 延迟处理失焦，确保点击事件先执行
    setTimeout(() => {
      setIsEditing(false);
    }, 150);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="demo-container"
        style={{
          width: "400px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div
          className="demo-header"
          onMouseDown={handleHeaderFooterClick}
          style={{
            backgroundColor: "#f5f5f5",
            padding: "12px 16px",
            borderBottom: "1px solid #e8e8e8",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Header
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="demo-content"
          contentEditable={isEditing}
          onInput={handleContentChange}
          onBlur={handleBlur}
          style={{
            padding: "16px",
            minHeight: "100px",
            backgroundColor: isEditing ? "#fff" : "#fafafa",
            border: isEditing ? "2px solid #1890ff" : "none",
            outline: "none",
            cursor: isEditing ? "text" : "default",
            transition: "all 0.3s ease",
          }}
          suppressContentEditableWarning={true}
        >
          {content}
        </div>

        {/* Footer */}
        <div
          className="demo-footer"
          onMouseDown={handleHeaderFooterClick}
          style={{
            backgroundColor: "#f5f5f5",
            padding: "8px 16px",
            borderTop: "1px solid #e8e8e8",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleEditClick}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e6f7ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#1890ff" }}
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        </div>
      </div>
      
    </>
  );
};

export default memo(Demo3);

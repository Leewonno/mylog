
export default function Loading() {
    return (
      <>
        {/* 제목 로딩 */}
        <div style={styles.titleSkeleton}></div>
  
        {/* 본문 로딩 */}
        <div style={styles.container}>
          <div style={styles.line}></div>
          <div style={{ ...styles.line, width: "60%" }}></div>
          <div style={{ ...styles.line, width: "90%" }}></div>
        </div>
      </>
    );
  }
  
  // 전역 스타일에 추가할 CSS 애니메이션
  export const globalStyles = `
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
  `;
  
  const styles: Record<string, React.CSSProperties> = {
    titleSkeleton: {
      width: "200px",
      height: "28px",
      backgroundColor: "#e0e0e0",
      borderRadius: "6px",
      marginBottom: "16px",
      animation: "pulse 1.5s infinite ease-in-out",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    line: {
      height: "16px",
      backgroundColor: "#e0e0e0",
      borderRadius: "4px",
      animation: "pulse 1.5s infinite ease-in-out",
    },
  };
  
  
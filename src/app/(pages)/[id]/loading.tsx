export default function Loading() {
  return (
    <>
      {/* 제목 로딩 */}
      <div style={styles.titleSkeleton}></div>

      {/* 본문 로딩 */}
      <div style={styles.container}>
        <div style={{ ...styles.line, width: "100%" }}></div>
        <div style={{ ...styles.line, width: "100%" }}></div>
        <div style={{ ...styles.line, width: "100%" }}></div>
      </div>
    </>
  );
}

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


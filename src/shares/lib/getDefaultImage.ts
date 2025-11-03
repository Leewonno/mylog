// 가장 먼저 등록된 이미지의 주소 가져오기
export const getDefaultImage = (content: string) => {
    // 마크다운 이미지 문법: ![alt](url)
    const match = content.match(/!\[[^\]]*\]\((.*?)\)/);
    return match ? match[1] : null;
  };
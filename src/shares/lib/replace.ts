
// 마크다운 문법을 제거한 본문
export const replaceContent = (content: string) => {
    return content
    // 주석 제거
    .replace(/<!--[\s\S]*?-->/g, '')
    // 이미지 제거 ![alt](url)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    // 링크 제거 [text](url)
    .replace(/\[[^\]]*\]\([^)]*\)/g, '')
    // < > 태그와 속성까지 제거
    .replace(/<[^>]+>/g, '')
    // 할일 목록 제거
    .replace(/- \[[ xX]\] ?/g, '')
    // 특수문자 제거
    .replace(/[!-/:-@[-`{-~]/g, '')
};
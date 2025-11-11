# MyLog — DB 없이 운영하는 나만의 블로그

## 💾 프로젝트 개요

MyLog는 Next.js 15 기반으로 개발된 개인 블로그입니다.
별도의 데이터베이스 서버 없이 JSON 파일로 데이터를 관리하며,
Markdown 문법을 이용해 간편하게 글을 작성할 수 있습니다.

[미리보기](https://mylog-leewonno.vercel.app)

## 💡 개발 목적

비용 부담이 큰 데이터베이스를 사용하지 않고도
개인 블로그를 운영할 수 있도록 개발하였습니다.

## ⚡️ 주요 기능

- **게시판** : JSON 파일을 통해 글을 작성, 수정, 삭제할 수 있습니다.
- **마크다운 에디터 및 뷰어** : 마크다운 문법으로 글을 작성하고, 뷰어를 통해 미리보기 및 렌더링된 결과를 확인할 수 있습니다.
- **마이페이지** : JSON 파일을 통해 블로그 이름, 사용자 정보를 관리할 수 있습니다.
- **반응형 디자인** : 데스크톱과 모바일에서 최적화된 화면을 제공합니다.
- **테마 변경**: 다크 모드와 라이트 모드 중 원하는 테마를 선택할 수 있습니다.

## ⚙️ 사용 기술
- **Next.js** : React 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG)을 제공하기 위해 사용하였습니다.
- **React** : JavaScript 라이브러리로, 부드러운 UI 동작을 위해 사용하였습니다.
- **TypeScript** : 정적 타입 명시를 통해 코드의 안정성과 유지보수성을 향상시키기 위해 사용하였습니다.
- **Redux Toolkit** : 전역 상태 관리를 위해 사용하였습니다.
- **Styled-Components** : JavaScript 파일 내에서 CSS를 작성하고, 스타일 충돌 방지를 위해 사용하였습니다.

## 🗂️ 프로젝트 구조
```
src/
 ├── app/
 ├── features/
 ├── widgets/
 ├── shared/
 └── assets/
```
- `app` : Next.js App Router 진입점 및 페이지 구조
- `features` : 독립적인 기능 단위 
- `widgets` : 페이지 내에서 UI를 조합하는 단위 컴포넌트
- `shares` : 공통 모듈
- `assets` : 폰트, 아이콘, 이미지 등 정적 리소스

## 🏃 사용법

### 1. 설정

1️⃣ 프로젝트를 clone 또는 fork 해주세요

```
git clone https://github.com/Leewonno/mylog.git
```

or

<img width="1264" height="651" alt="fork" src="https://github.com/user-attachments/assets/72a685a6-d5dc-4fc3-82c4-e7b807a54e53" />

```bash
# fork 후, 프로젝트를 내PC에 clone 해주세요
git clone https://github.com/UserName(leewonno)/mylog.git
```

<br />

2️⃣ fork하지 않고 clone한 경우, 새로운 레포지토리를 만들어 clone 한 레포지토리를 넣어주세요

<img width="784" height="779" alt="image" src="https://github.com/user-attachments/assets/3b62e04b-0d16-4aa5-a4bf-f2be6e12c053" />

```
git remote add origin https://github.com/UserName(leewonno)/RepositoryName(mylog-leewonno).git
git add .
git commit -m "commit message"
git branch -M main
git push -u origin main
```

<br />

3️⃣ 프로젝트 폴더로 이동해, 의존성을 설치해주세요

```
yarn install
```

or

```
npm install
```

<br />


4️⃣ next 개발 서버를 실행하고 블로그를 설정해주세요


```
yarn dev
```

or

```
npm run dev
```

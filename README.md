<img width="1920" height="540" alt="mylog" src="https://github.com/user-attachments/assets/ff00facb-8dbd-430b-ba02-506a783b48d4" />

# MyLog — DB 없이 운영하는 나만의 블로그

<br />

## 💾 프로젝트 개요

MyLog는 Next.js 15 기반으로 개발된 개인 블로그입니다.
별도의 데이터베이스 서버 없이 JSON 파일로 데이터를 관리하며,
Markdown 문법을 이용해 간편하게 글을 작성할 수 있습니다.

[미리보기](https://mylog-leewonno.vercel.app)

<br />

## 💡 개발 목적

비용 부담이 큰 데이터베이스를 사용하지 않고도
개인 블로그를 운영할 수 있도록 개발하였습니다.

<br />

## ⚡️ 주요 기능

- **게시판** : JSON 파일을 통해 글을 작성, 수정, 삭제할 수 있습니다.
- **마크다운 에디터 및 뷰어** : 마크다운 문법으로 글을 작성하고, 뷰어를 통해 미리보기 및 렌더링된 결과를 확인할 수 있습니다.
- **마이페이지** : JSON 파일을 통해 블로그 이름, 사용자 정보를 관리할 수 있습니다.
- **반응형 디자인** : 데스크톱과 모바일에서 최적화된 화면을 제공합니다.
- **테마 변경**: 다크 모드와 라이트 모드 중 원하는 테마를 선택할 수 있습니다.

<br />

## ⚙️ 사용 기술
- **Next.js** : React 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG)을 제공하기 위해 사용하였습니다.
- **React** : JavaScript 라이브러리로, 부드러운 UI 동작을 위해 사용하였습니다.
- **TypeScript** : 정적 타입 명시를 통해 코드의 안정성과 유지보수성을 향상시키기 위해 사용하였습니다.
- **Redux Toolkit** : 전역 상태 관리를 위해 사용하였습니다.
- **Styled-Components** : JavaScript 파일 내에서 CSS를 작성하고, 스타일 충돌 방지를 위해 사용하였습니다.

<br />

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

<br />

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

### 2. 블로그, 사용자 설정

#### 2-1. 마이페이지에서 설정

1️⃣ 오른쪽 상단 버튼을 이용해 마이페이지로 이동

<img width="1190" height="596" alt="mypage" src="https://github.com/user-attachments/assets/93f8718a-64c7-4a57-a5e6-b2df0bfe6925" />

<br />

2️⃣ 수정 후 저장

<img width="1189" height="802" alt="image" src="https://github.com/user-attachments/assets/9d135727-6152-4afc-8116-7c312b857b98" />

<br />

#### 2-2. data.json 직접 수정

1️⃣ 프로젝트 폴더의 data.json 파일 선택

<img width="327" height="535" alt="image" src="https://github.com/user-attachments/assets/cc5c4a97-4780-4550-af96-2354cfd37eaa" />

<br />

2️⃣ 파일 수정

<img width="213" height="128" alt="image" src="https://github.com/user-attachments/assets/0bb4a470-4bd1-4924-98de-14acb762c2c8" />

- **id** : 사용자명
- **email** : 이메일
- **github** : 깃허브 링크
- **portfolio** : 포트폴리오 링크
- **name** : 블로그명

<br />

### 3. 게시글

#### 3-1. 글 쓰기

1️⃣ 오른쪽 상단 글 쓰기 버튼을 클릭합니다

<img width="1188" height="748" alt="write" src="https://github.com/user-attachments/assets/b2aa85a4-f266-4dd1-b7fc-b1d41d869024" />


<br />


2️⃣ 제목과 내용을 입력 후 저장 버튼을 눌러주세요

<img width="1189" height="765" alt="image" src="https://github.com/user-attachments/assets/a4e6cd6c-dfb2-4dc0-8190-815a2042060e" />


#### 3-2. 이미지 삽입

이미지를 본문에 삽입할 수 있습니다. <br />
public/images 폴더에 삽입할 이미지 파일을 넣어주세요.


<img width="323" height="156" alt="image" src="https://github.com/user-attachments/assets/50e9302d-4f18-400b-9661-224e3a902f4e" />

<br />

<img width="1188" height="750" alt="image" src="https://github.com/user-attachments/assets/e0c03619-c807-44fc-91a8-1c55d0321a85" />


<br />

### 4. Github Push

글 작성, 수정, 삭제 또는 블로그 설정이 끝났으면 Github에 수정된 내용을 Push 해주세요

```
git add .
git commit -m "commit message"
git push origin main
```

<br />

## 📢 Vercel 배포하기

이제 Vercel에 나만의 블로그를 배포할 차례입니다. 

<br />
<br />

1️⃣ Vercel에 로그인 후 Add New -> Project 버튼을 눌러주세요

<img width="1689" height="444" alt="vercel" src="https://github.com/user-attachments/assets/f378427b-e8ed-482f-9f65-e29787cae153" />

<br />
<br />

2️⃣ 배포할 Repository를 선택(import) 해주세요

<img width="1240" height="681" alt="vercel2" src="https://github.com/user-attachments/assets/cc0f8ada-fd8b-4803-9fb4-e039183edab3" />

<br />
<br />

3️⃣ Framework Preset을 Next.js로 선택 후, Deploy 버튼을 눌러주세요

<img width="739" height="752" alt="image" src="https://github.com/user-attachments/assets/2ba47a01-93e0-49a8-af24-f7de78298494" />

<br />


## 🚀 Deployed

배포가 성공적으로 완료되었습니다! <br />
이제 모든 준비가 끝났습니다. <br />
나만의 블로그를 자유롭게 커스터마이징하고 운영해보세요. <br />

#### 🔔주의 사항🔔
- 글 쓰기, 수정, 삭제와 블로그 설정은 배포된 환경에서는 불가능합니다. 개발 서버에서 생성, 수정, 삭제 후 Github에 Push 해주세요.<br />
- main Branch에 Push 하면 자동으로 Vercel에 배포가 진행됩니다.


<br />

## 🌐 License

```
Copyright 2025 Leewonno

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


```
import type { Metadata } from "next";
import "./globals.css";
import "@/shares/styles/mdeditor.css";
import { StyledComponentsRegistry } from "@/shares/lib/registry";
import Header from "@/widgets/nav/components/Header";
import Footer from "@/widgets/nav/components/Footer";
import fs from "fs";
import path from "path";
import StoreProvider from "./StoreProvider";
import Layout from "@/shares/ui/Layout";
import { cookies } from "next/headers";

// 파일 읽기
const getBasicData = async () => {
  const filePath = path.join(process.cwd(), "blog", "info.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);
  return content
}

// title, description 변경
export async function generateMetadata(): Promise<Metadata> {
  const data = await getBasicData();
  return {
    title: data?.name || "MyLog",
    description: "DB 없는 나만의 블로그",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getBasicData();
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value

  return (
    <html lang="ko" className={theme === "dark" ? "dark" : "light"}>
      <head>
        {/* 구글 아이콘 */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <Header name={data.name} storedTheme={theme} />
            <Layout>
              {children}
            </Layout>
            <Footer name={data.name} />
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}

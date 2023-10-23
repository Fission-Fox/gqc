import Layout from "@/components/Layout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "@/styles/globals.css";
import * as React from "react";
export const metadata = {
  title: "Global Quality Cars",
  description: "Global Quality Cars",
  icons: {
    icon: "../../public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeRegistry>
          <Layout>
            <>{children}</>
          </Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}

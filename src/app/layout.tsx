import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ReactNode, createContext, useRef } from "react";

// import { type CollapseMenuStore, createCollapseMenuStore } from '@/app/stores/store';

// export type StoreApi = ReturnType<typeof createCollapseMenuStore>

// export const StoreContext = createContext<StoreApi | undefined>(
//   undefined,
// )

// export interface StoreProviderProps {
//   children: ReactNode
// }

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Store",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const storeRef = useRef<StoreApi>()
  // if (!storeRef.current) {
  //   storeRef.current = createCollapseMenuStore()
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

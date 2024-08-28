import { Header } from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-1 p-5 flex flex-col">
      <Header />
      {children}
    </main>
  );
}

import Navigation from "@/components/navigation";
import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex gap-5">
          <Navigation />
          <div className="p-6 w-full">
            <Header />
            <br /><br />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

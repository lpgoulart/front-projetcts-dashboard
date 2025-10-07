import Header from "@/components/header";
import Navigation from "@/components/navigation";

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex gap-5">
        <Navigation />
        <div className="p-6 w-full">
          <Header />
          <br /><br />
          {children}
        </div>
      </div>
    </>
  );
}

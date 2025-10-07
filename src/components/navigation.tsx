import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex flex-col p-6 gap-3 border-r-2 pt-28 h-[100vh]">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/dashboard/user"}>User</Link>
    </div>
  );
}

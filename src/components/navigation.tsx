import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Link href={"/"}>Go to Home</Link>
      <br />
      <Link href={"/dashboard"}>Go to Dashboard</Link>
      <br />
      <Link href={"/dashboard/user"}>Go to User</Link>
    </>
  );
}

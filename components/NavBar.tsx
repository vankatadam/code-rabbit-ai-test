import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-4 border-b">
      <div className="flex justify-between">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link
          href="https://nextjs.org/docs"
          target="_blank"
          className="hover:underline"
        >
          Next.js Docs
        </Link>
      </div>
    </nav>
  );
}

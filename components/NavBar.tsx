import Link from "next/link";

/**
 * Renders a navigation bar with links to the home page and the Next.js documentation.
 *
 * The "Home" link routes to the application's root path, while the "Next.js Docs" link opens the official Next.js
 * documentation in a new browser tab. Tailwind CSS classes are used for styling, including padding, a bottom border,
 * and an underline effect on hover.
 *
 * @returns JSX element representing the navigation bar.
 */
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

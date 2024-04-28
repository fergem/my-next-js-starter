// Create a Header component with daisyui styling and with a simple layout. Use the export default fucntion to export the component. I want to have 3 buttons
// one for Home, one for About and one for Contact.

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary p-4 text-center text-white">
      <nav className="flex justify-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

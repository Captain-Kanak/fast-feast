import Link from "next/link";
import React from "react";

export default function Navbar() {
  // Define the navigation links
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Menus",
      url: "/menus",
    },
    {
      title: "Restaurants",
      url: "/restaurants",
    },
    {
      title: "Blogs",
      url: "/blogs",
    },
  ];

  return (
    <nav className="py-4 border-y">
      {/* Render the navigation links */}
      <ul className="flex items-center justify-center gap-10">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import React from "react";

export default function Navbar() {
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
      title: "Blogs",
      url: "/blogs",
    },
  ];

  return (
    <div>
      <ul className="flex">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

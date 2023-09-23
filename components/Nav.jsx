import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="text-white gap-10">
      <Link href="/">🏠</Link>
      <Link href="/dashbord">🚚</Link>
    </div>
  );
};

export default Nav;

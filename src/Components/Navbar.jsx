"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const auth = Cookies.get("auth");
      setIsLogin(!!auth);
    };

    checkAuth(); 

    const interval = setInterval(checkAuth, 1000);

    return () => clearInterval(interval); 
  }, []);

  const handleLogOut = () => {
    Cookies.remove("auth");
    Cookies.remove("userEmail");
    router.push("/"); 
    setIsLogin(false); 
  };

  const links = (
    <>
      <Link href="/" className="text-lg text-gray-600 font-light px-2">
        <li>Home</li>
      </Link>
      <Link href="/allFoods" className="text-lg text-gray-600 font-light px-2">
        <li>All Foods</li>
      </Link>
      <Link href="/contact" className="text-lg text-gray-600 font-light px-2">
        <li>Contact</li>
      </Link>
      <Link href="/about" className="text-lg text-gray-600 font-light px-2">
        <li>About</li>
      </Link>
      <Link href="/faq" className="text-lg text-gray-600 font-light px-2">
        <li>FAQ</li>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Foods</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {isLogin ? (
          <>
            <Link href="/dashboard" className="btn btn-success mr-2">
              Dashboard
            </Link>
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <Link href="/login" className="btn">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}

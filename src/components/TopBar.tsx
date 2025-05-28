"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchPopover from "@/components/SearchPopover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-[#f6f3ee] fixed top-0 left-0 h-20 z-40">
      {/* Left: Logo and Nav */}
      <div className="flex items-center gap-8 min-w-[260px]">
        {/* Logo */}
        <div className="w-10 h-10 flex items-center justify-center">
          <Image
            src="/assets/logo-black.svg"
            alt="Logo"
            width={32}
            height={32}
          />
        </div>
        {/* Nav Links */}
        <nav className="flex gap-6 text-base">
          <Link
            href="/discover"
            className={
              pathname.startsWith("/discover")
                ? "text-black"
                : "text-neutral-500 hover:text-black"
            }
          >
            Discover
          </Link>
          <Link
            href="/my-audiences"
            className={
              pathname.startsWith("/my-audiences")
                ? "text-black"
                : "text-neutral-500 hover:text-black"
            }
          >
            My Audiences
          </Link>
        </nav>
      </div>
      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <button
            type="button"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#ece7db] text-base text-left text-neutral-700 focus:outline-none focus:ring-0 transition placeholder:text-neutral-500 hover:bg-[#e3dfd6] flex items-center gap-2 cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-neutral-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M20 20l-3-3"
                />
              </svg>
            </span>
            <span className="ml-6 text-neutral-500">
              Search brands or categories...
            </span>
          </button>
          {searchOpen && (
            <SearchPopover
              open={searchOpen}
              onOpenChange={setSearchOpen}
              query={searchQuery}
              setQuery={setSearchQuery}
            />
          )}
        </div>
      </div>
      {/* Right: Profile Avatar */}
      <div className="flex items-center gap-4 min-w-[60px] justify-end">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src="/assets/avatar.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </Avatar>
      </div>
    </header>
  );
}

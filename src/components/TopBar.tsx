"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchPopover from "@/components/SearchPopover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-[#f6f3ee]">
      {/* Left: Logo and Nav */}
      <div className="flex items-center gap-8 min-w-[260px]">
        {/* Logo */}
        <div className="w-10 h-10 flex items-center justify-center">
          <img src="/assets/logo-black.svg" alt="Logo" className="w-8 h-8" />
        </div>
        {/* Nav Links */}
        <nav className="flex gap-6 text-base">
          <Link
            href="/discover"
            className={
              pathname.startsWith("/discover")
                ? "font-semibold text-black underline underline-offset-4"
                : "text-neutral-500 hover:underline"
            }
          >
            Discover
          </Link>
          <Link
            href="/my-audiences"
            className={
              pathname.startsWith("/my-audiences")
                ? "font-semibold text-black underline underline-offset-4"
                : "text-neutral-500 hover:underline"
            }
          >
            My Audiences
          </Link>
        </nav>
      </div>
      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-2xl">
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
          <input
            type="text"
            placeholder="Search brands or categories..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-[#ece7db] text-lg focus:outline-none focus:ring-2 focus:ring-black transition placeholder:text-neutral-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            readOnly={false}
          />
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
            className="object-cover"
          />
        </Avatar>
      </div>
    </header>
  );
}

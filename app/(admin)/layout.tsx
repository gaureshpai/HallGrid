"use client";
import React from "react";
import { LogOut, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/sign-in",
        redirect: true
      });
    } catch (error) {
      console.error("Logout error:", error);

      router.push("/sign-in");
    }
  };

  const userDisplayName = session?.user?.email || session?.user?.username || "Admin User";

  return (
    <div className="min-h-screen font-poppins bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-md">
                  <Image
                    src="/images/logo.jpg"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  HallGrid Admin
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">{userDisplayName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors shadow-sm"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
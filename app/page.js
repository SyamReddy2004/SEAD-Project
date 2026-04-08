"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    /*
      In a real environment, you'd send a request here:
      const res = await fetch("/api/auth/login", { ... })
      const data = await res.json()
      if (res.ok) { localStorage.setItem("token", data.token); router.push("/" + data.role) }
    */
    if (email === "admin@school.com" && pass === "admin") {
      router.push("/admin");
    } else if (email === "student@school.com" && pass === "student") {
      router.push("/student");
    } else {
      setError("Invalid mock credentials.");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="glass-panel w-full max-w-md rounded-2xl p-8 shadow-xl">
        <div className="mb-8 text-center bg-indigo-600 text-white rounded-xl py-4 shadow-lg shadow-indigo-200">
          <h1 className="text-2xl font-bold tracking-tight">School ERP</h1>
          <p className="text-sm opacity-80">Full-Stack System Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                placeholder="admin@school.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                placeholder="••••••••"
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
          </div>
          
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-200"
          >
            Authenticate Securely
          </button>
        </form>
      </div>
    </div>
  );
}

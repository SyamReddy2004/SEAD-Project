"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, DollarSign, CalendarCheck, FileBadge, Bell, BookOpen, Bus, GraduationCap, LogOut } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample analytics mock data for charts
  const attendanceData = [
    { name: "Mon", Present: 95, Absent: 5 },
    { name: "Tue", Present: 96, Absent: 4 },
    { name: "Wed", Present: 98, Absent: 2 },
    { name: "Thu", Present: 93, Absent: 7 },
    { name: "Fri", Present: 97, Absent: 3 },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col transition-all">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold tracking-wider text-indigo-400">SCHOOL ERP</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button onClick={() => setActiveTab("overview")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <FileBadge size={18} /> Overview
          </button>
          <button onClick={() => setActiveTab("students")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'students' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <Users size={18} /> Student Manager
          </button>
          
          <div className="pt-4 pb-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-4">Core Modules</p>
          </div>
          
          <button onClick={() => setActiveTab("attendance")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'attendance' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <CalendarCheck size={18} /> Attendance
          </button>
          <button onClick={() => setActiveTab("fees")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'fees' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <DollarSign size={18} /> Fees Tracker
          </button>
          <button onClick={() => setActiveTab("exams")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'exams' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <GraduationCap size={18} /> Exams & Results
          </button>
          <button onClick={() => setActiveTab("notes")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'notes' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <BookOpen size={18} /> LMS Notes
          </button>
          <button onClick={() => setActiveTab("transport")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'transport' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <Bus size={18} /> Transportation
          </button>
          
          <div className="pt-8 pb-2">
            <button onClick={() => router.push("/")} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
              <LogOut size={18} /> Secure Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 capitalize">{activeTab.replace('-', ' ')} Console</h1>
            <p className="text-slate-500 mt-1">Manage operations and system telemtry.</p>
          </div>
          <button className="relative p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
        </header>

        {activeTab === "overview" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Total Enrollment</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">1,248</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Users size={24} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Avg. Attendance</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">95.4%</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                  <CalendarCheck size={24} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Fees Collected</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">$84k</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <DollarSign size={24} />
                </div>
              </div>
            </div>

            {/* Recharts Analytics Panel */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Weekly Attendance Analytics</h3>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: "transparent" }} />
                    <Line type="monotone" dataKey="Present" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Absent" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Dashboards mapped to User State */}
        {activeTab === "attendance" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4">Daily Attendance Registry</h3>
             <p className="text-slate-500 mb-6">Process batch presence logs connected via /api/attendance routing.</p>
             <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Scan Student RFID / Log Class</button>
          </div>
        )}

        {activeTab === "fees" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4">Fee Processing & Receipts</h3>
             <p className="text-slate-500 mb-6">Manage tuition drops mapped to Mongo FeeSchema instances.</p>
             <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Simulate Payment Gateway</button>
          </div>
        )}

        {activeTab === "exams" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4">Examination & Grading Board</h3>
             <p className="text-slate-500 mb-6">Upload standardized marks generating automated GPA values globally.</p>
             <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Initialize New Exam Block</button>
          </div>
        )}

        {activeTab === "notes" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4">LMS Central Module (Notes & Assignments)</h3>
             <p className="text-slate-500 mb-6">Upload PDF URLs tagged securely into specific Grade and Subject pathways.</p>
             <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Upload Learning Material</button>
          </div>
        )}

        {activeTab === "transport" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4">Dispatcher & Transport Logistics</h3>
             <p className="text-slate-500 mb-6">Create dynamic Checkpoint maps tying bus routing allocations to targeted Driver APIs.</p>
             <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Establish Route</button>
          </div>
        )}

      </main>
    </div>
  );
}

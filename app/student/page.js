"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, BookOpen, Bus, CalendarCheck, FileBadge, GraduationCap, LogOut } from "lucide-react";

export default function StudentDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-slate-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col transition-all">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold tracking-wider text-indigo-400">SCHOOL ERP</h2>
          <p className="text-xs text-slate-400 mt-1">Student Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button onClick={() => setActiveTab("overview")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <FileBadge size={18} /> My Dashboard
          </button>
          
          <div className="pt-4 pb-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-4">Academics</p>
          </div>
          
          <button onClick={() => setActiveTab("timetable")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'timetable' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <CalendarCheck size={18} /> Class Timetable
          </button>
          <button onClick={() => setActiveTab("lms")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'lms' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <BookOpen size={18} /> LMS Materials
          </button>
          <button onClick={() => setActiveTab("exams")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'exams' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <GraduationCap size={18} /> Exam Results
          </button>
          <button onClick={() => setActiveTab("transport")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'transport' ? 'bg-indigo-600' : 'hover:bg-white/10'}`}>
            <Bus size={18} /> Transport Info
          </button>

          <div className="pt-8 pb-2">
            <button onClick={() => router.push("/")} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
              <LogOut size={18} /> Secure Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto w-full">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 capitalize">{activeTab === 'overview' ? 'Welcome back, Student!' : `${activeTab.replace('lms', 'LMS')} Portal`}</h1>
            <p className="text-slate-500 mt-1">Here is your daily academic overview.</p>
          </div>
          <button className="relative p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
        </header>

        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <div>
               <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><CalendarCheck size={20} className="text-indigo-600" /> Today's Highlights</h3>
               <ul className="space-y-4">
                 <li className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                   <p className="font-semibold text-slate-800">You have Biology Lab at 2:00 PM</p>
                 </li>
                 <li className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                   <p className="font-semibold text-slate-800">New Mathematics Chapter Uploaded</p>
                 </li>
               </ul>
             </div>
          </div>
        )}

        {activeTab === "timetable" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><CalendarCheck size={20} className="text-indigo-600" /> Complete Daily Schedule</h3>
             <ul className="space-y-4 max-w-2xl">
               <li className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                 <div>
                   <p className="font-semibold text-slate-800">Mathematics</p>
                   <p className="text-sm text-slate-500">Room 402 • Prof. Davis</p>
                 </div>
                 <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">09:00 AM</div>
               </li>
               <li className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                 <div>
                   <p className="font-semibold text-slate-800">Computer Science</p>
                   <p className="text-sm text-slate-500">Lab A • Prof. Smith</p>
                 </div>
                 <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">11:00 AM</div>
               </li>
             </ul>
          </div>
        )}

        {activeTab === "lms" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><BookOpen size={20} className="text-indigo-600" /> Uploaded Class Notes</h3>
             <ul className="space-y-4 max-w-2xl">
               <li className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                 <p className="font-semibold text-slate-800 hover:text-indigo-600 cursor-pointer">Chapter 4 Programming PDF</p>
                 <p className="text-sm text-slate-500 mt-1">Uploaded by Teacher 2 hours ago</p>
               </li>
               <li className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                 <p className="font-semibold text-slate-800 hover:text-indigo-600 cursor-pointer">Algebra Practice Set</p>
                 <p className="text-sm text-slate-500 mt-1">Uploaded by Teacher Yesterday</p>
               </li>
             </ul>
          </div>
        )}

        {activeTab === "exams" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><GraduationCap size={20} className="text-indigo-600" /> My Transcripts</h3>
             <p className="text-slate-500 mb-6">Your latest test scores will sync here once the Admin publishes them!</p>
             <div className="p-4 rounded-xl bg-green-50 border border-green-100 inline-block">
               <p className="font-semibold text-green-800">Biology Midterm: A+ (94/100)</p>
             </div>
          </div>
        )}

        {activeTab === "transport" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
             <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Bus size={20} className="text-indigo-600" /> Assigned Bus Route</h3>
             <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 max-w-sm">
               <p className="font-bold text-amber-900 tracking-wide mb-2">ROUTE C - DOWNTOWN LOOP</p>
               <p className="text-amber-800 text-sm">Driver: Jonathan Briggs</p>
               <p className="text-amber-800 text-sm">ETA: 07:44 AM</p>
             </div>
          </div>
        )}

      </main>
    </div>
  );
}

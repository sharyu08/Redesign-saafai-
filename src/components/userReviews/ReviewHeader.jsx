import { MessageSquare, Plus } from 'lucide-react';

export default function ReviewHeader({ totalReviews }) {
  return (
    <div className="w-full mb-8">
      {/* Container matching the User Directory header style */}
      <div className="bg-[#E6F7F9] rounded-[24px] border border-[#D1F0F2] p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">

        <div className="flex items-center gap-5">
          {/* Circular Shield Icon Container */}
          <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <MessageSquare className="h-6 w-6 text-[#58BECF]" strokeWidth={2.5} />
          </div>

          <div className="text-left">
            <h1 className="text-lg font-black text-[#007C85] tracking-tight uppercase leading-none">
              User Reviews
            </h1>
            <p className="text-[10px] font-bold text-[#2D8E97] uppercase tracking-widest opacity-70 mt-1">
              Manage feedback and satisfaction registry
            </p>
          </div>
        </div>

        {/* Action Button with the requested Gradient */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right mr-2">
            <p className="text-[9px] font-black text-[#2D8E97] uppercase tracking-widest leading-none">Total Entries</p>
            <p className="text-sm font-black text-[#007C85]">{totalReviews}</p>
          </div>

          <button
            onClick={() => window.print()} // Example action
            style={{ background: 'linear-gradient(to right, #58BECF, #6D9CDC)' }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:brightness-105 active:scale-95 transition-all"
          >
            <Plus size={14} strokeWidth={3} /> Export Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
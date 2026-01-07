"use client";

import { useParams, useRouter } from 'next/navigation';
import EditUserFormModal from '../../EditUserFormModal'; // Adjusted based on your screenshot
import { ArrowLeft, Shield } from 'lucide-react';

export default function EditUserPage() {
    const params = useParams();
    const router = useRouter();
    const userId = params.id;

    // Mock data - in a real app, fetch user data here using userId
    const mockUser = { id: userId, name: "Loading staff data...", role: "Cleaner" };

    const handleGoBack = () => {
        router.push('/dashboard/user-management');
    };

    return (
        <div className="min-h-screen bg-white dark:bg-background p-8 flex flex-col items-center">
            <div className="w-full max-w-xl mb-8 space-y-6">
                <button
                    onClick={handleGoBack}
                    className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#007C85] transition-colors"
                >
                    <ArrowLeft size={16} /> Back to Directory
                </button>

                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#E6F7F9] border border-[#D1F0F2] flex items-center justify-center shadow-sm">
                        <Shield className="h-6 w-6 text-[#007C85]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-[#007C85] tracking-tight uppercase leading-none">
                            Edit Profile
                        </h1>
                        <p className="text-[10px] font-bold text-[#2D8E97] opacity-70 uppercase tracking-widest mt-1">
                            Modifying Staff Member ID: #{userId}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-xl">
                <EditUserFormModal
                    initialUser={mockUser}
                    onClose={handleGoBack}
                    onSubmit={(data) => {
                        console.log("Updating User:", userId, data);
                        handleGoBack();
                    }}
                />
            </div>
        </div>
    );
}
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function LocationImagesUpload() {
    return (
        <div className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[hsl(var(--lavender-100))] rounded-lg shadow-sm">
                    <HiOutlineCloudUpload className="text-[hsl(var(--primary))] text-xl" />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
                    Location Images
                </h2>
            </div>

            {/* Upload Area */}
            <div className="
                group relative
                border-2 border-dashed border-[hsl(var(--primary)/0.3)] 
                rounded-[var(--radius)] 
                p-10 text-center 
                bg-[hsl(var(--lavender-200))]/50
                hover:bg-[hsl(var(--lavender-200))] hover:border-[hsl(var(--primary))] 
                transition-all duration-300
            ">
                <div className="flex flex-col items-center">
                    {/* Visual Icon for Upload */}
                    <div className="mb-4 p-4 rounded-full bg-white shadow-sm text-[hsl(var(--primary))] group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>

                    <p className="text-sm font-bold text-[hsl(var(--primary-dark))] mb-1">
                        Drag or Drop images here
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mb-5">
                        Supports JPG, PNG (Max 5MB each)
                    </p>

                    <button className="
                        px-6 py-2.5 
                        bg-[hsl(var(--primary))] 
                        hover:brightness-110 
                        text-white text-sm font-bold 
                        rounded-xl shadow-sm 
                        transition-all active:scale-95
                    ">
                        Choose Images
                    </button>
                </div>

                {/* Hidden File Input Logic would go here */}
                <input
                    type="file"
                    multiple
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                />
            </div>

            <p className="text-[11px] text-[hsl(var(--muted-foreground))] italic px-1">
                * Please upload clear images of the entrance and internal facilities for better verification.
            </p>
        </div>
    );
}
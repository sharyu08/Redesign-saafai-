import Link from "next/link";

import { MapPin } from "lucide-react";

export default function WashroomHeader() {
    return (
        <div className="page-header">
            <div className="page-header-content">
                {/* Left content: Icon, Title & Metadata */}
                <div className="page-header-title-section">
                    <div className="page-header-icon">
                        <MapPin className="h-6 w-6" strokeWidth={2.5} />
                    </div>

                    <div>
                        <h1 className="page-header-title text-2xl">
                            Washroom Locations
                        </h1>
                        <p className="page-header-subtitle mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
                            Overview of details, assignments, and facility ratings
                        </p>
                    </div>
                </div>

                {/* Right Content: Styled Action Buttons */}
                <div className="page-header-actions mt-5 md:mt-0 flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                    {/* ADD LOCATION */}
                    <Link href="/dashboard/washrooms/add-washroom">
                        <button className="btn btn-primary group flex items-center gap-2 px-4 sm:px-6 py-2.5 text-xs-standard uppercase tracking-widest active:scale-95 flex-shrink-0">
                            <span className="text-lg group-hover:rotate-90 transition-transform duration-200 inline-block">+</span>
                            <span className="hidden sm:inline">Add Location</span>
                            <span className="sm:hidden">Add</span>
                        </button>
                    </Link>

                    {/* ASSIGN */}
                    <Link href="/dashboard/cleaner-assignments/add">
                        <button className="btn btn-primary flex items-center gap-2 px-4 sm:px-6 py-2.5 text-xs-standard uppercase tracking-widest active:scale-95 flex-shrink-0">
                            Assign
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
import Link from "next/link";

export default function WashroomHeader() {
    return (
        <div className="
            flex justify-between items-center
            rounded-2xl
            px-6 py-5
            bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900
            shadow-lg
        ">
            {/* Left content */}
            <div>
                <h1 className="text-xl font-semibold text-white">
                    Washroom Locations
                </h1>
                <p className="text-sm text-teal-100">
                    Overview of location details, cleaner assignments, and facility ratings
                </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                {/* ADD LOCATION */}
                <Link href="/dashboard/washrooms/add-washroom">
                    <button className="
                        rounded-xl
                        bg-white
                        px-4 py-2
                        text-sm font-semibold
                        text-teal-700
                        shadow
                        hover:bg-teal-50
                        transition
                    ">
                        + Add Location
                    </button>
                </Link>

                {/* ASSIGN */}
                <Link href="/dashboard/cleaner-assignments/add">
                    <button className="
                        rounded-xl
                        bg-rose-500
                        px-4 py-2
                        text-sm font-semibold
                        text-white
                        shadow
                        hover:bg-rose-600
                        transition
                    ">
                        Assign
                    </button>
                </Link>
            </div>
        </div>
    );
}

import { MessageSquare, Plus } from 'lucide-react';

export default function ReviewHeader({ totalReviews }) {
  return (
    <div className="w-full mb-8">
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-title-section">
            <div className="page-header-icon">
              <MessageSquare className="h-6 w-6 text-primary-light" strokeWidth={2.5} />
            </div>

            <div className="text-left">
              <h1 className="page-header-title">
                User Reviews
              </h1>
              <p className="page-header-subtitle">
                Manage feedback and satisfaction registry
              </p>
            </div>
          </div>

          {/* Action Button with the requested Gradient */}
          <div className="page-header-actions">
            <div className="hidden md:block text-right mr-2">
              <p className="text-xs-standard font-black text-primary-secondary uppercase tracking-widest leading-none">Total Entries</p>
              <p className="text-sm-standard font-black text-primary-dark">{totalReviews}</p>
            </div>

            <button
              onClick={() => window.print()} // Example action
              className="btn btn-primary flex items-center gap-2 px-6 py-2.5 text-xs-standard uppercase tracking-widest active:scale-95"
            >
              <Plus size={14} strokeWidth={3} /> Export Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
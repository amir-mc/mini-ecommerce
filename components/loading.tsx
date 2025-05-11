import { Loader2, Clock, Sparkles } from 'lucide-react';

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center max-w-md px-6 py-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800">
        <div className="relative inline-block mb-6">
          <Loader2 className="h-12 w-12 text-blue-600 dark:text-blue-400 animate-spin" />
          <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-yellow-400 animate-pulse" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Loading Awesome Content
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We're preparing something special for you...
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4" />
          <span>Just a moment please</span>
        </div>
        
        {/* Progress bar for better UX */}
        <div className="mt-6 h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full animate-[progress_2s_ease-in-out_infinite] origin-left"></div>
        </div>
      </div>
    </div>
  );
}
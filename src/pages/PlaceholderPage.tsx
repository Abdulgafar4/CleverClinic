import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
        Coming Soon
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
        {title}
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-10">
        We are currently building this section of the Clinic Technology Cloud. 
        Check back soon for updates on our premium healthcare SaaS platform.
      </p>
      <Link to="/" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
    </div>
  );
}

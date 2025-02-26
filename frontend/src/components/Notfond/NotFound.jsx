import { Link } from 'react-router-dom';

export default function NotFound({role}) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center animate-fadeIn">
        <h1 className="text-7xl font-bold text-red-500 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
        
        <Link
          to={role=='LIBRARIAN'? '/admin':'/'}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    );
}

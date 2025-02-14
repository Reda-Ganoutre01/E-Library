export default function UserProfile (){
  return (
    <div className="container p-4">
       <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center space-x-4">
       
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-sm text-gray-500">john.doe@example.com</p>
        </div>
      </div>

      {/* Profile Information */}
      <div className="mt-8 space-y-4">
        {/* About Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">About</h3>
            <p className="text-gray-600">
              Passionate developer with a love for building amazing web applications.
            </p>
          </div>
          <button 
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Modifier
          </button>
        </div>

        {/* Location Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Location</h3>
            <p className="text-gray-600">New York, USA</p>
          </div>
          <button 
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Modifier
          </button>
        </div>

        {/* Join Date Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Joined</h3>
            <p className="text-gray-600">January 2022</p>
          </div>
          <button 
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Modifier
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-6 flex justify-end">
        <button 
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
    </div>
   
  );
};


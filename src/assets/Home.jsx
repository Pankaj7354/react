function Home() {
  // Users data
  const userobj = {
    name: "Pankaj Dhakad2",
    email: "pankaj@gmail.com",
    age: 25,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        {/* Profile Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7f7jA0ODrv7PDq8rBAhOQwi6k-8S7T427A&s"
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500"
        />

        {/* Name */}
        <h1 className="text-2xl font-bold text-gray-800 mt-4">
          {userobj.name}
        </h1>

        {/* User Info */}
        <p className="text-gray-600">{userobj.email}</p>
        <p className="text-gray-600">Age: {userobj.age}</p>

        {/* Skills Section */}
        <div className="mt-4">
          <h2 className="font-semibold text-gray-700 mb-2">Skills</h2>
          <ul className="flex justify-center gap-3">
            <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              React
            </li>
            <li className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              JavaScript
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

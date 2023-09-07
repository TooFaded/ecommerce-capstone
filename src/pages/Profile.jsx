import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";

const Profile = ({ successMessage, setSuccessMessage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAddress, setEditedAddress] = useState("");

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    }

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts
    };
  }, [successMessage]);

  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleEditClick = () => {
    // When the "Edit" button is clicked, set isEditing to true
    setIsEditing(true);

    // Initialize the editedAddress with the current user's address
    setEditedAddress(userData.address);
  };

  const handleSaveClick = () => {
    // When the "Save" button is clicked, set isEditing to false
    setIsEditing(false);

    // Update the address in local storage
    const updatedUserData = { ...userData, address: editedAddress };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Show a success message
    setSuccessMessage("Address updated successfully");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-md rounded-lg">
        {successMessage && (
          <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
            {successMessage}
          </div>
        )}

        <div className="flex items-center justify-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-semibold">User Profile</h2>
          <hr className="my-4" />

          <div className="flex items-center">
            <div className="w-1/3">
              <h4 className="text-lg font-semibold">User Name</h4>
            </div>
            <div className="w-2/3">
              <p className="text-gray-700">Email: {userData.email}</p>
              {isEditing ? (
                <div className="flex">
                  <input
                    type="text"
                    className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-orange-300"
                    value={editedAddress}
                    onChange={(e) => setEditedAddress(e.target.value)}
                  />
                  <button
                    className="bg-orange-500 text-white px-3 py-2 ml-2 rounded-md hover:bg-orange-600"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <p className="text-gray-700">Address: {userData.address}</p>
                  <button
                    className="bg-orange-500 text-white px-2 py-1 h-[2rem] sm:h-auto rounded-md hover:bg-orange-600"
                    onClick={handleEditClick}
                  >
                    <BiEditAlt />
                  </button>
                </div>
              )}
            </div>
          </div>

          <hr className="my-4" />

          <h5 className="text-lg font-semibold">Order History</h5>
          <ul className="list-inside list-disc text-gray-700 pl-4">
            <li>Order #12345 - Date: MM/DD/YYYY</li>
            <li>Order #67890 - Date: MM/DD/YYYY</li>
            {/* Add more order history items here */}
          </ul>
        </div>
        <Link
          to="/products"
          className="text-orange-500 hover:underline flex justify-center mt-10"
        >
          View Products
        </Link>
      </div>
    </div>
  );
};

export default Profile;

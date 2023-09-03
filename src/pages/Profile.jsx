import { useEffect } from "react";

const Profile = ({ successMessage, setSuccessMessage }) => {
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
  return (
    <div className="container ml-20 mt-5 h-screen">
      {successMessage && (
        <div className=" flex justify-center items-center bg-green-500 mx-40 text-white p-4 rounded-lg">
          {successMessage}
        </div>
      )}
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">User Profile</h2>
              <hr />
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="User Avatar"
                    className="img-fluid w-60 rounded-full"
                  />
                </div>
                <div className="col-md-8">
                  <h4>User Name</h4>
                  <p>Email: user@example.com</p>
                  <p>Location: City, Country</p>
                </div>
              </div>
              <hr />
              <h5>Order History</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  Order #12345 - Date: MM/DD/YYYY
                </li>
                <li className="list-group-item">
                  Order #67890 - Date: MM/DD/YYYY
                </li>
                {/* Add more order history items here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthForm = ({ isLogin, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // State to hold error messages
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        isLogin
          ? "http://localhost:3000/login"
          : "http://localhost:3000/register",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        const { token } = response.data;
        const { message } = response.data;
        setSuccessMessage(message);

        // Store the token in localStorage
        localStorage.setItem("token", token);
        localStorage.removeItem("previousUserData");
        onSuccess("Login successful!");

        // Redirect the user to a protected page
        navigate("/profile");
      } else {
        const { message } = response.data;
        setError(message);
      }
    } catch (error) {
      console.error("An error occurred while processing your request:", error);
      if (error.response) {
        const errorMessage = error.response.data.message;
        setError(errorMessage);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-16">
      {error && <div className="text-red-600 bg-red-100 p-2 mb-2">{error}</div>}
      {successMessage && (
        <div className="text-green-600 bg-green-100 p-2 mb-2">
          {successMessage}
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        {!isLogin && ( // Conditionally render Confirm Password field for registration
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        )}
        <div className="mb-4">
          {isLogin ? (
            <Link to="/register" className="text-blue-500 hover:underline">
              Don't have an account? Sign up
            </Link>
          ) : (
            <Link to="/login" className="text-blue-500 hover:underline">
              Back to Login
            </Link>
          )}
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-orange-500  text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;

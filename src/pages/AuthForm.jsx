import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login or registration logic here
    console.log("Form data:", formData);
  };

  return (
    <div className="flex flex-col items-center mt-16">
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

        <div class="flex justify-center items-center">
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

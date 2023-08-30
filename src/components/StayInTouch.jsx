import StayInTouchImg from "../assets/stay-in-touch-img.png";

const StayInTouch = () => {
  return (
    <section className="bg-gray-300 py-16 mt-8 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay in Touch</h2>
        <p className="text-gray-600 mb-8">
          Get sneak previews of special offers & upcoming events delivered to
          your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="sm:w-full w-[18rem] p-2 mb-4 border rounded bg-gray-200"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-end ml-60">
            <img src={StayInTouchImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;

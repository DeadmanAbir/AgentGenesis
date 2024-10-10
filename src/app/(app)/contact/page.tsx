const Contact = () => {
    return (
      <div className="container mt-32 font-semibold flex flex-col items-center gap-20 justify-center">
        <div className="text-6xl">Contact Us</div>
        <div className="text-xl text-center max-w-2xl">
          We're here to help! Fill out the form below or reach us through any of our platforms.
        </div>
        <form className="flex flex-col gap-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  
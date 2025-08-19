import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Contact <span className="text-blue-600">Shopora</span>
      </h1>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions, feedback, or need support?  
            Our team is here to help you. Reach out to us anytime.
          </p>

          <div className="bg-white shadow-md rounded-xl p-6">
            <p className="text-gray-800 font-medium mb-2">📍 Address</p>
            <p className="text-gray-600">123 Shopora Street, New Delhi, India</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <p className="text-gray-800 font-medium mb-2">📞 Phone</p>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <p className="text-gray-800 font-medium mb-2">📧 Email</p>
            <p className="text-gray-600">support@shopora.com</p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

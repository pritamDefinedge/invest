import React from "react";

const EventDetails = () => {
  return (
    <section className="py-16">
      <div className="w-3/4 mx-auto px-6 sm:px-8">
        {/* Card Container */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          {/* Card Header */}
          <div className="p-6 bg-gray-100">
            <h2 className="text-md font-bold text-gray-800 text-center">
              Master Any Market, Any Timeframe With Our Advanced and Objective
              Approach to the Age-old Noiseless Trading
            </h2>
          </div>

          {/* Card Body - Table Format */}
          <div className="p-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-left">
              <tbody>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Date : </th>
                  <td className="p-4 text-gray-600">10<sup>th</sup> May 2025 – 11<sup>th</sup> May 2025</td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Time : </th>
                  <td className="p-4 text-gray-600">
                    <p>Saturday: 10:00 AM to 05:00 PM</p>
                    <p>Sunday: 10:00 AM to 05:00 PM</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Mentor : </th>
                  <td className="p-4 text-gray-600">Raju Ranjan and Prashant Shah</td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Venue : </th>
                  <td className="p-4 text-gray-600">Online</td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Language : </th>
                  <td className="p-4 text-gray-600">English, Hindi</td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Price : </th>
                  <td className="p-4 text-xl font-semibold text-blue-600">
                    <span className="line-through text-gray-500">Rs. 15999/-</span> Rs. 12999/- + GST 18%
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">20% Discount : </th>
                  <td className="p-4 text-red-500">
                    Only for Definedge Securities Demat Account Holders. Apply Code : <strong>MYDSEC20</strong>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Event Recording : </th>
                  <td className="p-4 text-gray-700">
                    <strong>All attendees will receive a recording</strong> a few days after the event via email.
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Technical Issues : </th>
                  <td className="p-4 text-gray-700">
                    <strong>Please Note : </strong> In case of technical issues, we may not be able to provide the recording.
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="p-4 bg-gray-100 text-gray-800">Contact : </th>
                  <td className="p-4">
                    <a href="mailto:info@definedge.com" className="text-blue-600">info@definedge.com</a>
                  </td>
                </tr>
                <tr>
                  <th className="p-4 bg-gray-100 text-gray-800">Demat Account : </th>
                  <td className="p-4">
                    <a
                      href="https://signup.definedgesecurities.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Get it now!
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Card Footer - Pay Now Button */}
          <div className="p-6 bg-gray-100 text-center">
            <a
              href="https://dashboard.definedge.com/event"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white py-2 px-6 rounded-lg text-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Pay Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

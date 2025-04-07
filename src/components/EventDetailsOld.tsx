import React from "react";

const EventDetails = () => {
  return (
    <section className="py-16 ">
      <div className="w-3/4 mx-auto px-6 sm:px-8">
        {/* Card Container */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          {/* Card Header */}
          <div className="p-6 bg-gray-100">
            <h2 className="text-md font-bold text-gray-800">
              Master Any Market, Any Timeframe With Our Advanced and Objective
              Approach to the Age-old Noiseless Trading
            </h2>
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-6">
            {/* Date */}
            <div className="flex gap-4">
              <strong className="text-lg text-gray-800">Date:</strong>
              <span className="text-gray-600">
                10<sup>th</sup> May 2025 – 11<sup>th</sup> May 2025
              </span>
            </div>

            {/* Time */}
            <div className="flex gap-4">
              <strong className="text-lg text-gray-800">Time:</strong>
              <div className="text-gray-600">
                <p>Saturday: 10:00am to 05:00pm</p>
                <p>Sunday: 10:00am to 05:00pm</p>
              </div>
            </div>

            {/* Mentor */}
            <div className="flex gap-4">
              <strong className="text-lg text-gray-800">Mentor:</strong>
              <span className="text-gray-600">
                Raju Ranjan and Prashant Shah
              </span>
            </div>

            {/* Venue */}
            <div className="flex gap-4">
              <strong className="text-lg text-gray-800">Venue:</strong>
              <span className="text-gray-600">Online</span>
            </div>

            {/* Language */}
            <div className="flex gap-4">
              <strong className="text-lg text-gray-800">Language:</strong>
              <span className="text-gray-600">English, Hindi</span>
            </div>

            {/* Price */}
            <div className="flex gap-4">
              <strong className="text-lg text-gray-800">Price:</strong>
              <div className="text-xl font-semibold text-blue-600">
                <span className="line-through text-gray-500">Rs. 15999/-</span>{" "}
                Rs. 12999/- + GST 18%
              </div>
            </div>

            {/* Discount */}
            <div className="flex gap-4">
              <strong className="text-lg text-gray-800">20% Discount:</strong>
              <span className="text-red-500">
                (Only for Definedge Securities Demat Account Holders. Apply
                Code: MYDSEC20)
              </span>
            </div>

            {/* Event Recording Info */}
            <div>
              <p className="text-lg text-gray-700">
                <strong>
                  All event attendees will receive a recording of the event a
                  few days after its conclusion.
                </strong>
                Details and the link to the recording will be sent to your
                registered email ID.
              </p>
            </div>

            {/* Technical Issue Note */}
            <div>
              <p className="text-lg text-gray-700">
                <strong>Please Note:</strong> In the unlikely event of any
                technical issues during recording, we may be unable to provide
                the recording.
              </p>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <strong className="text-lg text-gray-800">
                {" "}
                Contact: For any query email us{" "}
              </strong>
              <a href="mailto:info@definedge.com" className="text-blue-600">
                info@definedge.com
              </a>
            </div>

            {/* Demat Account Link */}
            <div className="mb-6">
              <strong className="text-lg text-gray-800">
                “Don’t have a Definedge Super Demat account?” 
              </strong>
              <a
                href="https://signup.definedgesecurities.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 underline"
              >
                Get it now!
              </a>
            </div>
          </div>

          {/* Card Footer - Pay Now Button */}
          <div className="p-6 bg-gray-100">
            <a
              href="https://dashboard.definedge.com/event"
              target="_blank"
              className="bg-blue-900 overflow-hidden text-white py-2 px-6 rounded-lg text-md font-semibold hover:bg-blue-600 transition duration-300"
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

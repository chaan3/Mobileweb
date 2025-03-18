import React from 'react'

const Services = () => {
  return (
    <div>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide top-notch mobile services tailored to your needs. Here are some of the key features we offer.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src="assets/1.jpg" alt="Mobile Network" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Mobile Plans</h3>
                <p className="mt-4 text-gray-600">
                  Flexible mobile plans to fit your lifestyle. Whether you need more data or a family plan, we’ve got it all.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src="assets/3.jpg" alt="Device Repair" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Device Repair</h3>
                <p className="mt-4 text-gray-600">
                  Fast and affordable mobile device repair services. Get your device fixed and back in action quickly.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src="assets/1.png" alt="Customer Support" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
                <p className="mt-4 text-gray-600">
                  Round-the-clock customer support to help you with any issues or questions. We’re always here to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our customers love our services. Here are a few of their experiences.
          </p>
          <div className="mt-10 flex justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
              <p className="text-lg text-gray-600">
                "The best mobile service I’ve had! Fast and reliable with excellent customer support."
              </p>
              <p className="mt-4 text-gray-800 font-semibold"></p>
            </div>
            {/* Testimonial 2 */}
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
              <p className="text-lg text-gray-600">
                "I love the flexible plans and quick service. Never had an issue with my connection!"
              </p>
              <p className="mt-4 text-gray-800 font-semibold"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

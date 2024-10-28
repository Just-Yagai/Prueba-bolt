import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:pl-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="mt-1 text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
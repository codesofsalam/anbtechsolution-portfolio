import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulated API call 
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and show success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-10 rounded-lg shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-6 text-white flex items-center">
            <MessageSquare className="mr-4 text-purple-400" />
            Contact Us
          </h2>
          <p className="text-gray-400 mb-8">
            Share your project vision. We&apos;re ready to transform your ideas into reality.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 pl-10 rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 pl-10 rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 pl-10 rounded-md focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Describe Your Project"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-700 text-white p-3 rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Submit Button with Status */}
            <button
              type="submit"
              disabled={submitStatus === 'success'}
              className={`
                w-full p-3 rounded-md transition-colors 
                ${submitStatus === 'success' 
                  ? 'bg-green-600 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700'
                } 
                text-white flex items-center justify-center
              `}
            >
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle2 className="mr-2" /> Message Sent Successfully
                </>
              ) : (
                <>
                  <Send className="mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-8"
        >
          {/* Company Details Card */}
          <div className="bg-gray-800 p-10 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              OrbiMatrix Headquarters
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-4 text-purple-400 w-6 h-6" />
                <span>123 Innovation Drive, Tech Valley, CA 94000</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 text-purple-400 w-6 h-6" />
                <span>contact@orbmatrix.tech</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 text-purple-400 w-6 h-6" />
                <span>+1 (555) ORBIT-X</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-gray-800 p-10 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              Business Hours
            </h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 2:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
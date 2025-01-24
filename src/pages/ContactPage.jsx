import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted", formData);
      setIsSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
      >
        <div className="p-10">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-white mb-10 tracking-tight"
          >
            Get In Touch
          </motion.h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-green-400 font-semibold text-xl py-12"
            >
              Thank you! We&apos;ll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "message"].map((field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {field === "name" && <User className="h-5 w-5 text-purple-400" />}
                    {field === "email" && <Mail className="h-5 w-5 text-purple-400" />}
                    {field === "message" && <MessageSquare className="h-5 w-5 text-purple-400" />}
                  </div>
                  
                  {field !== "message" ? (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={`Enter your ${field}`}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white/10 text-white 
                        rounded-xl border transition duration-300 
                        ${errors[field] 
                          ? "border-red-500" 
                          : "border-white/20 focus:border-purple-500"}`}
                    />
                  ) : (
                    <textarea
                      name={field}
                      placeholder="Your message"
                      rows={4}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white/10 text-white 
                        rounded-xl border transition duration-300 
                        ${errors[field] 
                          ? "border-red-500" 
                          : "border-white/20 focus:border-purple-500"}`}
                    />
                  )}
                  
                  {errors[field] && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 text-sm text-red-400 pl-4"
                    >
                      {errors[field]}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-purple-600 text-white rounded-xl 
                  hover:bg-purple-700 transition duration-300 
                  flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition" />
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
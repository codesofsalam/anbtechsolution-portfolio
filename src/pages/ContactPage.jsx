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
    <div className="min-h-screen bg-[#1A1A1A] px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl sm:max-w-xl md:max-w-xl lg:max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
      >
        <div className="p-6 sm:p-8 md:p-10">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10 tracking-tight"
          >
            Get In Touch
          </motion.h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-green-400 font-semibold text-base sm:text-lg md:text-xl py-8 sm:py-10 md:py-12"
            >
              Thank you! We&apos;ll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              {["name", "email"].map((field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {field === "name" && <User className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />}
                    {field === "email" && <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />}
                  </div>

                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={`Enter your ${field}`}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 bg-white/10 text-white 
                      rounded-xl border text-sm sm:text-base transition duration-300 
                      ${errors[field] 
                        ? "border-red-500" 
                        : "border-white/20 focus:border-purple-500"}`}
                  />
                  {errors[field] && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-400 pl-4"
                    >
                      {errors[field]}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <MessageSquare className="absolute top-3 sm:top-4 left-4 h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 bg-white/10 text-white 
                    rounded-xl border text-sm sm:text-base transition duration-300 
                    ${errors.message 
                      ? "border-red-500" 
                      : "border-white/20 focus:border-purple-500"}`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-400 pl-4"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 sm:py-4 bg-purple-600 text-white rounded-xl 
                  hover:bg-purple-700 transition duration-300 
                  flex items-center justify-center space-x-2 group text-sm sm:text-base"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition" />
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
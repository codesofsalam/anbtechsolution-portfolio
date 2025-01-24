import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare} from "lucide-react";

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

      // Reset form after 3 seconds
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

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#1A1A1A] py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-[#2C2C2C] shadow-2xl rounded-xl overflow-hidden"
      >
        <div className="p-8">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-center text-white mb-8"
          >
            Contact Us
          </motion.h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-green-500 font-semibold"
            >
              Thank you! We&apos;ll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "message"].map((field) => (
                <motion.div
                  key={field}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4 }}
                >
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-300"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)} 
                 
                  </label>
                  <div className="mt-1 relative rounded-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {field === "name" && <User className="h-5 w-5 text-gray-400" />}
                      {field === "email" && <Mail className="h-5 w-5 text-gray-400" />}
                    
                      {field === "message" && <MessageSquare className="h-5 w-5 text-gray-400" />}
                    </div>
                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : field ===  "text"}
                        name={field}
                        id={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 bg-[#3C3C3C] text-white border-2 ${
                          errors[field]
                            ? "border-red-500"
                            : "border-transparent focus:border-purple-500"
                        } rounded-md`}
                      />
                    ) : (
                      <textarea
                        name={field}
                        id={field}
                        rows={4}
                        value={formData[field]}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 bg-[#3C3C3C] text-white border-2 ${
                          errors[field]
                            ? "border-red-500"
                            : "border-transparent focus:border-purple-500"
                        } rounded-md`}
                      />
                    )}
                  </div>
                  {errors[field] && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 text-sm text-red-500"
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
                className="w-full py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
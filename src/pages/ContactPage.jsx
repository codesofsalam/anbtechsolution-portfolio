import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const serviceId = "service_6snmdtn";
      const templateId = "template_myizwol";
      const publicKey = "YgvHE4u2Jngk8ehbK";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "ANB Tech Solution",
        message: formData.message,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully. We will get back to you soon!",
          confirmButtonColor: "#7C3AED",
          background: "#1A1A1A",
          color: "#FFFFFF",
          customClass: {
            popup: "rounded-lg shadow-lg",
            title: "text-white font-bold",
            content: "text-gray-300",
            confirmButton: "text-sm md:text-base",
          },
        });

        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "There was an error sending your message. Please try again later.",
          confirmButtonColor: "#7C3AED",
          background: "#1A1A1A",
          color: "#FFFFFF",
          customClass: {
            popup: "rounded-lg shadow-lg",
            title: "text-white font-bold",
            content: "text-gray-300",
            confirmButton: "text-sm md:text-base",
          },
        });
        console.error("Error sending email:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="mt-10 min-h-screen bg-[#1A1A1A] py-8 px-4 md:py-12 lg:py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[90%] md:max-w-lg lg:max-w-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-8 lg:mb-10"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3"
          >
            Ready to Get Started?
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 overflow-hidden"
        >
          <div className="p-4 md:p-6 lg:p-8">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-white mb-6 md:mb-8"
            >
              Get In Touch
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {["name", "email"].map((field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                    {field === "name" ? (
                      <User className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                    ) : (
                      <Mail className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                    )}
                  </div>

                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={`Enter your ${field}`}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 bg-white/10 text-white 
                      rounded-lg text-sm md:text-base transition duration-300 
                      ${
                        errors[field]
                          ? "border-red-500"
                          : "border-white/20 focus:border-purple-500"
                      } border`}
                  />
                  {errors[field] && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-xs md:text-sm text-red-400 pl-3"
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
                <MessageSquare className="absolute top-3 left-3 md:left-4 h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 bg-white/10 text-white 
                    rounded-lg text-sm md:text-base transition duration-300 
                    ${
                      errors.message
                        ? "border-red-500"
                        : "border-white/20 focus:border-purple-500"
                    } border`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-xs md:text-sm text-red-400 pl-3"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 md:py-3 bg-purple-600 text-white rounded-lg 
                  hover:bg-purple-700 transition duration-300 
                  flex items-center justify-center space-x-2 group
                  text-sm md:text-base font-medium
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

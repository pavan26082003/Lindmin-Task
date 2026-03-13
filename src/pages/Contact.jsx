import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Linkedin, Github, Twitter } from "lucide-react";
import Button from "../components/common/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // reset form would go here realistically
    }, 1500);
  };

  return (
    <div className="w-full pt-20 bg-gray-offwhite min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyan-brand mb-4 inline-block">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy font-heading">Let's Talk</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN: Contact Info */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have a project in mind, or just want to say hi? Fill out the form or reach out directly using the information below. We aim to respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Our Office</h4>
                  <p className="text-gray-500 leading-relaxed">123 Tech Park<br />Hyderabad, Telangana 500081</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Email Us</h4>
                  <a href="mailto:hello@landminesoft.com" className="text-cyan-brand hover:underline font-medium">hello@landminesoft.com</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Call Us</h4>
                  <a href="tel:+919876543210" className="text-gray-500 hover:text-navy transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Working Hours</h4>
                  <p className="text-gray-500">Mon–Fri, 9AM–6PM IST</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center hover:bg-cyan-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center hover:bg-cyan-brand transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center hover:bg-cyan-brand transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            {/* Optional Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-200 rounded-2xl overflow-hidden border border-gray-300 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Google Maps Embed Placeholder</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-8 font-heading">Send a Message</h3>
              
              {isSuccess ? (
                <div className="bg-green-50 text-green-700 border border-green-200 p-6 rounded-xl text-center">
                  <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                  <p>We've received your inquiry and will be in touch shortly.</p>
                  <Button variant="outline" className="mt-6 border-green-600 text-green-700 hover:bg-green-600 hover:text-white" onClick={() => setIsSuccess(false)}>
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Full Name *</label>
                    <input
                      {...register("name", { required: "Full Name is required" })}
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 bg-gray-50
                        ${errors.name ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-cyan-brand"}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500 font-medium">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Email Address *</label>
                    <input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" }
                      })}
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 bg-gray-50
                        ${errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-cyan-brand"}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500 font-medium">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Phone Number (Optional)</label>
                    <input
                      {...register("phone")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-brand bg-gray-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Subject</label>
                    <select
                      {...register("subject")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-brand bg-gray-50 text-gray-700"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project">Project Discussion</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Support">Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Message *</label>
                    <textarea
                      {...register("message", { 
                        required: "Message is required",
                        minLength: { value: 20, message: "Please enter at least 20 characters" }
                      })}
                      rows="5"
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 bg-gray-50
                        ${errors.message ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-cyan-brand"}`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500 font-medium">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                        Sending...
                      </span>
                    ) : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

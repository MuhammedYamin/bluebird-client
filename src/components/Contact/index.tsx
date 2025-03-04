"use client";

import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh
    setLoading(true);

    try {
      await axios.post("/api/submitForm", formData);
      alert("Thank you for filling out the form! Our team will contact you soon.");
      setFormData({ name: "", phone: "", project: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex justify-center overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container flex justify-center">
        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              <center>Get in touch!</center>
            </h2>
            <p className="mb-12 text-center text-base font-medium text-body-color">
              Our support team will get back to you ASAP via WhatsApp.
            </p>
            
            {/* ✅ FIXED: onSubmit added */}
            <form onSubmit={handleSubmit}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      required
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Phone Number
                    </label>
                    <div className="flex">
                      <span className="flex items-center rounded-l-sm bg-gray-200 px-4 py-3 text-dark dark:bg-[#2C303B] dark:text-white">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your number"
                        pattern="\d{10}"
                        maxLength={10}
                        required
                        className="border-stroke w-full rounded-r-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label htmlFor="project" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Project of Interest
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    >
                      <option value="">Select an option</option>
                      <option value="2BHK">2BHK</option>
                      <option value="3BHK">3BHK</option>
                    </select>
                  </div>
                </div>

                <div className="w-full px-4">
                  <div className="mb-8">
                    <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      More Info
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Enter your Message"
                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex w-full justify-center px-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                  >
                    {loading ? "Submitting..." : "Submit"}{" "}
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

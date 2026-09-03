import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#eee4ff] overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="min-h-[360px] flex items-center justify-center text-center">

            <div className="max-w-2xl">

              <span className="inline-block bg-white text-[#5b2bbf] px-4 py-2 rounded-full text-[10px] font-bold tracking-[2px]">
                CONTACT US
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#241044]">
                Let's Talk
                <br />

                <span className="text-[#5b2bbf]">
                  With Us.
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base leading-7 text-gray-600">
                Have a question, suggestion or simply want to say
                hello? We'd love to hear from you.
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="py-14 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* PHONE */}

            <div className="bg-[#faf8ff] rounded-2xl p-6 text-center hover:shadow-lg transition">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#eee4ff] hover:bg-[#FF00FF] transition-all duration-300 cursor-pointer  flex items-center justify-center text-[#5b2bbf]">
                <FaPhoneAlt />
              </div>

              <h3 className="mt-5 text-sm font-extrabold text-[#241044]">
                Call Us
              </h3>

              <p className="mt-2 text-xs text-gray-500">
                +880 01602-917867
              </p>

              <p className="mt-1 text-[10px] text-gray-400">
                Mon - Fri, 9AM - 6PM
              </p>

            </div>


            {/* EMAIL */}

            <div className="bg-[#faf8ff] rounded-2xl p-6 text-center hover:shadow-lg transition">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#eee4ff]  hover:bg-[#FF00FF] transition-all duration-300 cursor-pointer flex items-center justify-center text-[#5b2bbf]">
                <FaEnvelope />
              </div>

              <h3 className="mt-5 text-sm font-extrabold text-[#241044]">
                Email Us
              </h3>

              <p className="mt-2 text-xs text-gray-500">
                soheljan25.com
              </p>

              <p className="mt-1 text-[10px] text-gray-400">
                We reply within 24 hours
              </p>

            </div>


            {/* LOCATION */}

            <div className="bg-[#faf8ff] rounded-2xl p-6 text-center hover:shadow-lg transition">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#eee4ff]  hover:bg-[#FF00FF] transition-all duration-300 cursor-pointer flex items-center justify-center text-[#5b2bbf]">
                <FaMapMarkerAlt />
              </div>

              <h3 className="mt-5 text-sm font-extrabold text-[#241044]">
                Visit Us
              </h3>

              <p className="mt-2 text-xs text-gray-500">
                Dhaka, Bangladesh
              </p>

              <p className="mt-1 text-[10px] text-gray-400">
                We'd love to meet you
              </p>

            </div>


            {/* HOURS */}

            <div className="bg-[#faf8ff] rounded-2xl p-6 text-center hover:shadow-lg transition">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#eee4ff]  hover:bg-[#FF00FF] transition-all duration-300 cursor-pointer flex items-center justify-center text-[#5b2bbf]">
                <FaClock />
              </div>

              <h3 className="mt-5 text-sm font-extrabold text-[#241044]">
                Opening Hours
              </h3>

              <p className="mt-2 text-xs text-gray-500">
                Mon - Sat: 9AM - 6PM
              </p>

              <p className="mt-1 text-[10px] text-gray-400">
                Sunday: Closed
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + SIDE CONTENT
      ====================================================== */}

      <section className="pb-16 sm:pb-20">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">

           

            <div className="lg:col-span-2 bg-[#5b2bbf] rounded-3xl p-8 sm:p-10 text-white">

              <p className="text-purple-200 text-[10px] font-bold tracking-[3px] uppercase">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
                We'd Love
                <br />
                To Hear From You.
              </h2>

              <p className="mt-5 text-sm leading-7 text-purple-100">
                Whether you have a question about our products,
                an order or anything else, our team is ready to
                help.
              </p>


              {/* CONTACT DETAILS */}

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <FaPhoneAlt size={13} />
                  </div>

                  <div>
                    <p className="text-[10px] text-purple-200">
                      Phone
                    </p>

                    <p className="text-xs font-semibold">
                      +880 1602-917867
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <FaEnvelope size={13} />
                  </div>

                  <div>
                    <p className="text-[10px] text-purple-200">
                      Email
                    </p>

                    <p className="text-xs font-semibold">
                      soheljan25.com
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <FaMapMarkerAlt size={13} />
                  </div>

                  <div>
                    <p className="text-[10px] text-purple-200">
                      Address
                    </p>

                    <p className="text-xs font-semibold">
                      Dhaka, Bangladesh
                    </p>
                  </div>

                </div>

              </div>


              {/* SOCIAL */}

              <div className="mt-10">

                <p className="text-[10px] text-purple-200 uppercase tracking-wider">
                  Follow Us
                </p>

                <div className="flex gap-3 mt-4">

                  <a
                    href="https://www.facebook.com/share/1EmVxMZYTd/"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#5b2bbf] transition"
                  >
                    <FaFacebookF size={12} />
                  </a>

                  <a
                    href="https://www.instagram.com/mr3672590?igsh=bXloNnBhdm1xazN6"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#5b2bbf] transition"
                  >
                    <FaInstagram size={12} />
                  </a>

                  <a
                    href="https://www.youtube.com/?utm_source=chatgpt.com"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#5b2bbf] transition"
                  >
                    <FaYoutube size={12} />
                  </a>

                </div>

              </div>

            </div>


           
            <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">

              <div className="mb-7">

                <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
                  Send A Message
                </p>

                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#241044]">
                  How Can We Help?
                </h2>

              </div>


              {/* SUCCESS MESSAGE */}

              {submitted && (

                <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-100 px-4 py-3 text-green-700">

                  <FaCheckCircle />

                  <p className="text-xs font-semibold">
                    Thank you! Your message has been sent successfully.
                  </p>

                </div>

              )}

<form
  action="https://formspree.io/f/mqpzjlpq"
  method="POST"
  className="mt-6 space-y-5"
>
  {/* NAME */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-2">
        Your Name
      </label>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
      />
    </div>

    {/* EMAIL */}
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-2">
        Email Address
      </label>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your gmail"
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
      />
    </div>

    {/* PHONE */}
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-2">
        Phone Number
      </label>

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+880 1602-917867"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
      />
    </div>

    {/* SUBJECT */}
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-2">
        Subject
      </label>

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="How can we help?"
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
      />
    </div>
  </div>

  {/* MESSAGE */}
  <div className="mt-4">
    <label className="block text-xs font-semibold text-gray-700 mb-2">
      Message
    </label>

    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Write your message here..."
      rows="6"
      required
      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none resize-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
    />
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="inline-flex cursor-pointer items-center justify-center gap-2 mt-5 bg-[#5b2bbf] text-white px-7 py-3.5 rounded-full text-xs font-bold hover:bg-[#45209a] transition"
  >
    Send Message
    <FaPaperPlane size={10} />
  </button>
 </form>

            </div>

          </div>

        </div>

      </section>



      <section className="pb-16">

        <div className="max-w-5xl mx-auto px-5">

          <div className="bg-[#eee4ff] rounded-3xl text-center px-6 py-12">

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241044]">
              Looking For Something Else?
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Explore our products or learn more about our story.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#5b2bbf] text-white px-7 py-3 rounded-full text-xs font-bold hover:bg-[#45209a] transition"
              >
                Shop Now
                <FaArrowRight size={10} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-[#5b2bbf] px-7 py-3 rounded-full text-xs font-bold hover:bg-gray-50 transition"
              >
                About Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;
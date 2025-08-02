import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const AdminFooter = ({ content = {}, setContent }) => {
  const links = content.footerLinks || [
    {
      title: "About Us",
      items: ["Our Story", "Our Team", "Mission & Vision"],
    },
    {
      title: "Legal & Policies",
      items: ["Terms & Conditions", "Privacy Policies", "Refund & Cancellation Policies"],
    },
    {
      title: "Our Work",
      items: ["Our Work"],
    },
    {
      title: "Support Us",
      items: ["Donation"],
    },
  ];

  const handleLinkChange = (groupIndex, itemIndex, value) => {
    const updated = [...links];
    updated[groupIndex].items[itemIndex] = value;
    setContent(prev => ({ ...prev, footerLinks: updated }));
  };

  const handleTitleChange = (groupIndex, value) => {
    const updated = [...links];
    updated[groupIndex].title = value;
    setContent(prev => ({ ...prev, footerLinks: updated }));
  };

  return (
    <footer className="relative overflow-hidden px-6 md:px-16 py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-gray-900" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-300/15 rounded-full blur-2xl animate-pulse delay-500" />

      <div className="relative z-10">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {links.map((group, groupIndex) => (
            <div className="group" key={groupIndex}>
              <h4
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleTitleChange(groupIndex, e.target.innerText)}
                className="font-bold mb-4 text-white text-lg group-hover:text-green-400 transition-colors duration-300"
              >
                {group.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleLinkChange(groupIndex, itemIndex, e.target.innerText)
                      }
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:drop-shadow-[0_0_10px_#22c55e] cursor-text"
                    >
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <hr className="border-gray-600/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent blur-sm" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8">
          {[
            { icon: FaFacebookF, color: "hover:text-blue-400", shadow: "hover:drop-shadow-[0_0_10px_#60a5fa]" },
            { icon: FaInstagram, color: "hover:text-pink-400", shadow: "hover:drop-shadow-[0_0_10px_#f472b6]" },
            { icon: FaEnvelope, color: "hover:text-green-400", shadow: "hover:drop-shadow-[0_0_10px_#22c55e]" },
            { icon: FaLinkedinIn, color: "hover:text-blue-500", shadow: "hover:drop-shadow-[0_0_10px_#3b82f6]" },
            { icon: FaPhoneAlt, color: "hover:text-emerald-400", shadow: "hover:drop-shadow-[0_0_10px_#10b981]" },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div
                  className="relative w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:border-green-400/50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <IconComponent
                    className={`text-white text-xl transition-all duration-300 ${social.color} ${social.shadow}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;

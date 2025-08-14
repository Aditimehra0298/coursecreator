import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Instagram,
  Linkedin,
  FileText
} from 'lucide-react';

// Brand icons (inline SVG)
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" role="img">
    <path fill="#25D366" d="M12.05 0A11.82 11.82 0 0 0 .158 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.3-1.654a11.87 11.87 0 0 0 5.683 1.448h.005c6.554 0 11.889-5.335 11.892-11.893A11.82 11.82 0 0 0 12.05 0Z"/>
    <path fill="#FFF" d="M12.051 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.197c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.894 6.993c-.003 5.45-4.437 9.884-9.887 9.884Zm5.421-7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.922-2.206-.242-.579-.487-.5-.672-.51-.173-.009-.372-.011-.571-.011s-.521.074-.793.372c-.272.297-1.041 1.016-1.041 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
  </svg>
);

// (Removed Telegram icon; using LinkedIn instead)

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: 'https://www.sftrainings.org/about-us/' },
    { name: 'Our Courses', href: 'https://www.sftrainings.org/courses/' },
    { name: 'Accreditations', href: 'https://www.sftrainings.org/accreditations/' },
    { name: 'Candidate Register', href: 'https://app.sftrainings.org/user/candidate_register' },
    { name: 'Contact Us', href: 'https://www.sftrainings.org/contact-us/' },
    { name: 'Privacy Policy', href: 'https://www.sftrainings.org/Privacy%20Policy/' },
    { name: 'Blogs', href: 'https://www.sftrainings.org/blogs/' },
    { name: 'Podcasts', href: 'https://www.sftrainings.org/podcasts/' },
    { name: 'Book a Call', href: 'https://calendly.com/trng-coord-sft/get-to-know-more-about-us-book-a-call-now?month=2025-08' }
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.pixabay.com/video/2022/11/07/138082-768352300_large.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-gray-900/95 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
              {/* About Us */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="mr-3 [filter:drop-shadow(0_0_24px_rgba(59,130,246,0.65))]">
                    <img src="/l7.png" alt="Logo" className="w-28 h-28 object-contain [filter:drop-shadow(0_0_10px_rgba(255,255,255,0.85))] brightness-110" />
                  </div>
                  <span className="text-2xl font-bold text-white">Sustainable Future Trainings</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">About Us</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sustainable Futures Trainings is a team of 40 Quality Management Systems professionals.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We have leveraged our QMS auditing experience and synergistic relationships with experts and platforms to deliver experiential QMS/ISO/IEC training online and offline.
                </p>
                <div className="flex items-center gap-4 text-teal-400 mb-4">
                  <a href="https://www.instagram.com/sustainablefuturestrainings/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-90 transition-opacity">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://chat.whatsapp.com/FcbmAtluzhJ32Ni2xQbTLl" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:opacity-90 transition-opacity">
                    <WhatsAppIcon className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/sustainable-futures-trainings/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-90 transition-opacity">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-teal-400 mr-3" />
                  <span>info@sftrainings.org</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Contact Us</h4>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-400 mr-2" /> India</div>
                    <p>146, Sector 82, Mohali, Punjab-160062</p>
                    <div className="flex items-center"><Phone className="w-4 h-4 text-teal-400 mr-2" /> +91 9056742782</div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-400 mr-2" /> Canada</div>
                    <p>8449,116 A Street, Delta - V4C7N7, Greater Vancouve</p>
                    <div className="flex items-center"><Phone className="w-4 h-4 text-teal-400 mr-2" /> +1 (778) 798-9624</div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-400 mr-2" /> Dubai</div>
                    <p>Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-400 mr-2" /> UK</div>
                    <p>20-22 Wenlock Road, Hoxton, London N1 7GU</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-400 mr-2" /> USA</div>
                    <p>616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989</p>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm mb-4 lg:mb-0">
                  <p>&copy; 2019-2025 SecureFin. All rights reserved.</p>
                  <div className="flex space-x-6">
                    <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <FileText className="w-4 h-4" />
                  <span>EU Regulated • DORA & NIS2 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
      </div>
    </footer>
  );
};

export default Footer;
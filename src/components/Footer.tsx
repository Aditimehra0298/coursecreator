import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Share2
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: 'https://www.damnart.com/' },
    { name: 'Services', href: 'https://www.damnart.com/services/' },
    { name: 'About', href: 'https://www.damnart.com/about/' },
    { name: 'Contact', href: 'https://www.damnart.com/contact-us/' },
    { name: 'Privacy Policy', href: 'https://www.damnart.com/privacy-policy/' },
    { name: 'Podcasts', href: 'https://www.damnart.com/podcasts/' },
    { name: 'Blogs', href: 'https://www.damnart.com/blogs/' }
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/95 via-blue-50/90 to-blue-200/95 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
              {/* About Us */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="mr-3 [filter:drop-shadow(0_0_24px_rgba(59,130,246,0.65))]">
                    <img src="/l7.png" alt="DAMNART Logo" className="w-28 h-28 object-contain [filter:drop-shadow(0_0_10px_rgba(255,255,255,0.85))] brightness-110" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-black">DamnArt</span>
                    <p className="text-sm text-black">DIGITAL ADVERTISEMENT MARKETING NETWORK</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-blue-600 mb-4">Connect with us on other Platforms</h4>
                <div className="flex items-center gap-4 text-teal-600 mb-4">
                  <a href="https://www.facebook.com/people/DamnArt-Digital-Marketing-Services/61562382662176/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-90 transition-opacity">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/damnartservices/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-90 transition-opacity">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="www.youtube.com/@DamnArt-g7k" target="_blank" rel="noreferrer" aria-label="Youtube" className="hover:opacity-90 transition-opacity">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/damnart/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-90 transition-opacity">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://in.pinterest.com/pankajy0401/" target="_blank" rel="noreferrer" aria-label="Pinterest" className="hover:opacity-90 transition-opacity">
                    <Share2 className="w-6 h-6" />
                  </a>
                </div>
                <div className="flex items-center text-black">
                  <Mail className="w-5 h-5 text-teal-600 mr-3" />
                  <span>info@damnart.com</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank" rel="noreferrer" className="text-black hover:text-teal-600 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-4">Address</h4>
                <div className="space-y-4 text-black">
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-600 mr-2" /> India</div>
                    <p>SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603</p>
                    <div className="flex items-center"><Phone className="w-4 h-4 text-teal-600 mr-2" /> +91-90565-44487</div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-600 mr-2" /> India - Ahmedabad</div>
                    <p>310 - Sampada, Navarangpura, Ahmedabad, Gujarat - 380009</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-600 mr-2" /> UK</div>
                    <p>20-22 Wenlock Road, Hoxton, London N1 7GU</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-600 mr-2" /> USA</div>
                    <p>616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-600 mr-2" /> Canada</div>
                    <p>8449,116 A Street, Delta - V4C7N7, Greater Vancouver</p>
                    <div className="flex items-center"><Phone className="w-4 h-4 text-teal-600 mr-2" /> +1 (778) 798-9624</div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1"><MapPin className="w-5 h-5 text-teal-600 mr-2" /> Dubai</div>
                    <p>Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            {/* Bottom Bar */}
            <div className="border-t border-blue-300 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-black text-sm mb-4 lg:mb-0">
                  <p>&copy; Damnart 2021-2025, All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-200/40 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-teal-200/50 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-gray-200/40 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white/30 rounded-full animate-bounce opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;
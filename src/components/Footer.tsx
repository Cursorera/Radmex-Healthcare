
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/radmexhealthcare', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    'About Us', 'Our Services', 'Find a Doctor', 'Patient Portal',
    'Insurance', 'Careers', 'News & Events', 'Research'
  ];

  const medicalServices = [
    'Emergency Care', 'Cardiology', 'Neurology', 'Orthopedics',
    'Pediatrics', 'Women\'s Health', 'Mental Health', 'Preventive Care'
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <img 
                src="/logo.png" 
                alt="Radmex Care Logo" 
                className="h-20 w-auto"
              />
              <p className="text-black leading-relaxed">
              Your trusted partner in renal <br></br> therapeutics—precision manufacturing, <br></br>reliable supply.
              </p>
            </div>

       

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-physician-blue hover:bg-trust-green rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

       


          {/* Emergency & Hours */}
          <div className="space-y-6">
            <div>
                   {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-trust-white flex-shrink-0" />
                <span className="text-black">2nd Floor, 207, Plot No 7, Vardhman Plaza<br />LSC Inder Enclave, Paschim Vihar, New Delhi</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-trust-white flex-shrink-0" />
                <span className="text-black">011-41092728 | +91-9871026858</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-trust-white flex-shrink-0" />
                <span className="text-black">radmexhealthcare@gmail.com</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emergency-red flex-shrink-0" />
                <span className="text-gray-300">24/7 Emergency Services</span>
              </div> */}
            </div>
            </div>

          
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-black text-sm text-center md:text-left">
              © {currentYear} Radmex Healthcare. All rights reserved.  
              {/* <a href="#" className="hover:text-trust-green transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-trust-green transition-colors ml-1">Terms of Service</a> */}
            </div>
            
            <div className="text-black text-sm text-center md:text-right">
              <span className="flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-emergency-red animate-pulse-subtle" /> for better health
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

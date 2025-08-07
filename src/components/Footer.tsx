
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
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
    <footer className="bg-professional-gray text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-montserrat font-800 mb-4">
                Radmex
                <span className="text-trust-green">Care</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted healthcare partner, providing premium medical services 
                with cutting-edge technology and compassionate care.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-trust-green flex-shrink-0" />
                <span className="text-gray-300">123 Medical Center Drive, Health City, HC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-trust-green flex-shrink-0" />
                <span className="text-gray-300">(555) 123-CARE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-trust-green flex-shrink-0" />
                <span className="text-gray-300">care@radmexhealth.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emergency-red flex-shrink-0" />
                <span className="text-gray-300">24/7 Emergency Services</span>
              </div>
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

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-montserrat font-700 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-trust-green transition-colors duration-300 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Services */}
          <div>
            <h3 className="text-xl font-montserrat font-700 mb-6">Medical Services</h3>
            <ul className="space-y-3">
              {medicalServices.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-trust-green transition-colors duration-300 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency & Hours */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-montserrat font-700 mb-6">Emergency Care</h3>
              <div className="bg-emergency-red/20 border border-emergency-red/30 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-emergency-red">
                  <Heart className="w-5 h-5 animate-pulse-subtle" />
                  <span className="font-semibold">24/7 Available</span>
                </div>
                <p className="text-sm text-gray-300">
                  Life-threatening emergencies require immediate attention. 
                  Our emergency department is always open.
                </p>
                <a 
                  href="tel:911" 
                  className="block text-center bg-emergency-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Call 911
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Hospital Hours</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat - Sun:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-emergency-red">
                  <span>Emergency:</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Radmex Healthcare. All rights reserved. | 
              <a href="#" className="hover:text-trust-green transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-trust-green transition-colors ml-1">Terms of Service</a>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
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

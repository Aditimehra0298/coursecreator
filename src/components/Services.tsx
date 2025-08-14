import { 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Zap, 
  FileText, 
  UserCheck,
  Lock,
  Globe
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Digital Banking",
      description: "Real-time payments, mobile wallets & instant loans",
      compliance: "Fully DORA & NIS2 aligned",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Wealth Management Platform",
      description: "AI-driven portfolios with strict GDPR data governance",
      compliance: "GDPR compliant AI",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Cyber Insurance Products",
      description: "Tailored for SMEs & startups, reinforcing operational resilience",
      compliance: "Resilience focused",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Zap,
      title: "Payment Gateway Services",
      description: "Secure B2B e-commerce payments with DORA-compliant risk oversight",
      compliance: "DORA compliant",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Regulatory Reporting-as-a-Service (RaaS)",
      description: "Automated GDPR, ISO, and EU compliance dashboards",
      compliance: "Multi-standard compliance",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: UserCheck,
      title: "Digital ID & eKYC",
      description: "Biometric verification in compliance with GDPR, NIS2 & eIDAS",
      compliance: "Triple compliance",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-20">
      {/* Background video layer */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.pixabay.com/video/2023/11/11/188743-883619745_large.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Blue gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="animate-pulse">
                <Globe className="w-12 h-12 text-teal-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
               <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Core Services Of DORA & NIS2</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity and digital finance solutions designed for the modern EU regulatory landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-pulse`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center">
                  <Lock className="w-4 h-4 text-teal-400 mr-2" />
                  <span className="text-sm text-teal-400 font-medium">
                    {service.compliance}
                  </span>
                </div>
                
                {/* Animated border */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-teal-400 to-blue-400 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          {/* Floating elements for animation */}
          <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-20"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
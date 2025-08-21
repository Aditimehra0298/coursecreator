import { 
  Globe, 
  Brain, 
  Zap, 
  Building, 
  Shield, 
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Multilingual Course Creation",
      description: "Our platform empowers organizations to design and deliver learning courses in any language, making conformity assessment training accessible and effective for diverse audiences across the world.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Brain,
      title: "AI-Driven Creation Software",
      description: "Leveraging advanced AI technology, our course creation software transforms standards and technical content into engaging, structured training modules—bringing the latest pedagogical techniques and gamification to every course.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Fast & Consistent Global Deployment",
      description: "AI automation streamlines the course creation process, enabling rapid deployment and consistent content quality. Multiple language support ensures harmonized standards and inclusive learning in every region.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Building,
      title: "Support for Businesses & SMEs",
      description: "Our AI-designed training helps businesses and SMEs achieve accreditation and improve market access, offering tailored solutions to meet unique operational and regulatory needs.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Courses created on our secure, cloud-first infrastructure comply with international requirements for privacy and data protection, ensuring trust and reliability globally.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaboration & Customization",
      description: "We offer flexible collaboration models—full content development, integration with your LMS, or partnership in script and course design—empowering you to deliver world-class learning experiences for every audience.",
      color: "from-indigo-500 to-purple-500"
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
        {/* Light blue gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 via-blue-50/80 to-blue-200/90"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="animate-pulse">
                <Globe className="w-12 h-12 text-teal-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
               <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Our Core Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive AI-powered learning solutions designed for global conformity assessment and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-pulse`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
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
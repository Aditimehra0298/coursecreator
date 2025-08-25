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
      title: "Capacity Building & Sustainable Development",
      description: "Promoting Quality Infrastructure activities as a tool for sustainable economic development. Our training programs align with INetQI objectives, building robust quality infrastructure through effective capacity building initiatives.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Brain,
      title: "AI & Quality Infrastructure Integration",
      description: "Addressing emerging risks and complex demands of AI through membership in the AIQI Consortium. Our AI-designed conformity assessment training prepares professionals to navigate the intersection of AI and quality infrastructure effectively.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Global Conformity Assessment Programs",
      description: "Ensuring Certification and Validation Bodies operate to the same standard worldwide. Our harmonized training programs facilitate global consistency and competence through standardized practices and methodologies.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Building,
      title: "SME Empowerment Through Accreditation",
      description: "Supporting the IAF's World Accreditation Day 2025 theme by helping SMEs achieve and maintain accreditation. Our cutting-edge training reduces costs, increases productivity, and opens new market opportunities.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Single Worldwide Program",
      description: "The global conformity assessment system's primary function is to develop a single worldwide program of conformity assessment. We offer AI-designed training, directly supporting the dissemination of consistent knowledge across diverse linguistic regions, thereby contributing to the harmonization of standards and practices globally.",
    },
    {
      icon: Users,
      title: "Global Collaboration & Technical Exchange",
      description: "Facilitating the IAF-ILAC Joint Annual Meetings' strategic priorities through AI-designed training methodologies. Enabling worldwide program development and harmonized standards across diverse linguistic regions.",
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
               <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Our Core Approach</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Strategic AI-powered training solutions aligned with IAF objectives, INetQI initiatives, and AIQI Consortium priorities for global quality infrastructure advancement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* AI-Driven Training Methodology Grid */}
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Our Unique AI-Driven Training Methodology
              </span>
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              Our unique AI-driven training methodology could offer a valuable contribution to your efforts in developing competent professionals for an increasingly AI-driven world and strengthening the integrity and effectiveness of global conformity assessment programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Driven Excellence */}
            <div className="group bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-300 hover:border-teal-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-teal-600 transition-colors">
                AI-Driven Excellence
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Building Global Trust in Conformity Assessment Trainings. With the rapid growth of AI, our core mission is to leverage AI technology to foster a "single worldwide program of conformity assessment training, which reduces risk for businesses and their customers, ensuring consistent training standards across economies.
              </p>
            </div>

            {/* Intelligent Assurance */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-300 hover:border-pink-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-purple-800 mb-3 group-hover:text-pink-600 transition-colors">
                Intelligent Assurance
              </h4>
              <p className="text-gray-700 leading-relaxed">
                AI-Designed Training for the Future of Conformity Assessment. This unique training methodology is the Future of Conformity, and we have positioned ourselves at the forefront of evolving industry needs.
              </p>
            </div>

            {/* Accelerating Expertise */}
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-300 hover:border-red-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-orange-800 mb-3 group-hover:text-red-600 transition-colors">
                Accelerating Expertise
              </h4>
              <p className="text-gray-700 leading-relaxed">
                AI-Designed Training for Precision Conformity Assessments. Efficiency and effectiveness that AI can bring to learning, and the high standards of accuracy required in conformity assessment. High-quality training contributes to the consistent application of standards.
              </p>
            </div>

            {/* Engineered for Confidence */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-300 hover:border-emerald-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-emerald-600 transition-colors">
                Engineered for Confidence
              </h4>
              <p className="text-gray-700 leading-relaxed">
                AI-Designed Conformity Assessment Trainings for Reliable Global Certification. Sophisticated, structured approach, delivering confidence, and consistent application of standards. <strong>Trained Once, Accepted Everywhere.</strong>
              </p>
            </div>

            {/* Empowering the AI Era */}
            <div className="group bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 rounded-2xl border border-indigo-300 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-indigo-800 mb-3 group-hover:text-cyan-600 transition-colors">
                Empowering the AI Era
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Cutting-Edge Conformity Assessment Training. Empowering Small and Medium Enterprises (SMEs) Through Accredited Capacity-Building Training. Strategic focus on AI and its quality infrastructure.
              </p>
            </div>

            {/* Global Certification */}
            <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-300 hover:border-amber-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-yellow-800 mb-3 group-hover:text-amber-600 transition-colors">
                Global Certification
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Our training contributes to creating accredited certificates and validation statements that may be relied upon worldwide. Our training prepares professionals for ever-evolving Conformity Assessment landscape.
              </p>
            </div>
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
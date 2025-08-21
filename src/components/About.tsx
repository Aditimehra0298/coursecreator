import { Globe, Users, Cloud, Languages } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "AI-Powered Multilingual Learning Videos",
      description: "We specialize in creating cutting-edge, AI-powered multilingual learning videos for conformity assessment, delivering content in multiple languages to serve diverse global audiences."
    },
    {
      icon: Cloud,
      title: "Global Cloud-First Infrastructure", 
      description: "Our cloud-first infrastructure is hosted on secure platforms worldwide, ensuring data privacy, compliance, and high performance across regions with regulated jurisdictions."
    },
    {
      icon: Users,
      title: "Expert Team of 1,500+ Professionals",
      description: "Our expert team brings extensive experience in cybersecurity, digital transformation, and compliance to provide secure, scalable, and effective digital learning solutions."
    },
    {
      icon: Languages,
      title: "40+ Global QMS Professionals",
      description: "By combining the expertise of 40+ global Quality Management Systems professionals with advanced AI and proprietary software, we simplify complex standards into accessible content."
    }
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/20250818_1447_Flags Collage_simple_compose_01k2y7d7a1ea9s9ed2m55jn5v5.png')" }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 z-0 bg-white/85"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {/* Left: Content */}
            <div>
              <div className="mb-10 text-center">
                <h2 id="about-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
                  About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">DamnArt</span>
                </h2>
                <p className="text-lg text-black-900 leading-relaxed max-w-4xl mx-auto text-center mb-6">
                  Evoke AI is the Artificial Intelligence division of DAMNART, a global design and technology company with a strong international presence. Our cloud-first infrastructure is hosted on secure platforms worldwide, ensuring data privacy, compliance, and high performance across regions. A large majority of our cloud systems are located within regulated jurisdictions to meet global security standards.
                </p>
                <p className="text-lg text-black-900 leading-relaxed max-w-4xl mx-auto text-center">
                  In addition to immersive learning videos, DAMNART offers a suite of innovative digital services such as AI-driven chatbots, conversational AI platforms, and custom software developments that enhance engagement, automate workflows, and streamline client interactions on a global scale. Our mission is to empower organizations worldwide with secure, multilingual, AI-enhanced digital tools and learning content that uphold international standards, foster trust, and support sustainable growth in an increasingly connected and AI-driven environment.
                </p>
              </div>

              <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <li key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
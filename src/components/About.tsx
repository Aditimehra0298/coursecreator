import { Globe, Users, Cloud, Languages } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "INetQI-Aligned Quality Infrastructure Training",
      description: "Our training programs promote Quality Infrastructure activities as a tool for sustainable economic development, aligning with International Network on Quality Infrastructure objectives and global standards."
    },
    {
      icon: Cloud,
      title: "AIQI Consortium Integration", 
      description: "As part of the AIQI Consortium, we address emerging risks and complex demands of AI technologies, preparing professionals to navigate the intersection of AI and quality infrastructure effectively."
    },
    {
      icon: Users,
      title: "Global Conformity Assessment Expertise",
      description: "Our team of 1,500+ professionals ensures Certification and Validation Bodies operate to the same standard worldwide, facilitating harmonized practices and global consistency."
    },
    {
      icon: Languages,
      title: "SME Empowerment & Market Access",
      description: "Supporting the IAF's World Accreditation Day 2025 theme, we help SMEs achieve accreditation, reduce costs, increase productivity, and access new markets through advanced training."
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
                  Evoke AI is the Artificial Intelligence division of DAMNART, specializing in capacity building and sustainable economic development through Quality Infrastructure training. Our strategic alignment with IAF objectives, INetQI initiatives, and AIQI Consortium priorities positions us at the forefront of global quality infrastructure advancement.
                </p>
                <p className="text-lg text-black-900 leading-relaxed max-w-4xl mx-auto text-center">
                  We deliver AI-designed conformity assessment training that addresses emerging risks and complex demands, preparing professionals to navigate the future of quality infrastructure. Our mission is to facilitate global collaboration, harmonize standards worldwide, and empower SMEs through accreditation, contributing to the development of a single worldwide program of conformity assessment that reduces risk for businesses and their customers.
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
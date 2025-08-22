import { Globe, Users, Cloud, Languages } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "40+ Global QMS Professionals",
      description: "Collaborative team of QMS auditing experts with synergistic relationships across IT and AI platforms, designing experiential QMS/ISO/IEC training programs."
    },
    {
      icon: Cloud,
      title: "AI-Driven Training Design", 
      description: "Mastered the art of designing transformative training using AI, advanced pedagogical sciences, gamification, and real-life case studies for maximum effectiveness."
    },
    {
      icon: Users,
      title: "Multilingual Training Solutions",
      description: "Innovative, localized training content designed specifically for certification bodies and their clients, featuring AI avatars and storytelling techniques."
    },
    {
      icon: Languages,
      title: "Global Conformity Alignment",
      description: "Our AI-designed training aligns with global conformity objectives, fostering competence and trust within the global conformity assessment system worldwide."
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
                  We have collaborated with a team of 40+ Global Quality Management Systems professionals to leverage their QMS auditing experience and synergistic relationships with experts, IT and AI platforms to design experiential QMS/ISO/IEC, AI-driven, digitally transformative, Video-based, self-paced and effective global conformity assessment training programs.
                </p>
                <p className="text-lg text-black-900 leading-relaxed max-w-4xl mx-auto text-center mb-6">
                  Our team of practising conformity assessment auditors, subject matter experts, academicians, researchers, and AI experts have developed and mastered the art of designing transformative training, leveraging Artificial Intelligence and the advanced concepts of modern-day pedagogical sciences, gamification, and real-life case-studies.
                </p>
                <p className="text-lg text-black-900 leading-relaxed max-w-4xl mx-auto text-center mb-6">
                  We specialize in developing innovative, multilingual training content designed specifically for certification bodies and their clients. With increasing demand for engaging, localized, and digital-first training solutions, we bring a unique blend of AI avatars, storytelling techniques, and certification-focused instructional design to make learning both effective and memorable.
                </p>
                <p className="text-lg text-black-900 leading-relaxed max-w-4xl mx-auto text-center">
                  Our AI-designed conformity assessment training aligns well with global conformity objectives and fosters competence and trust within the global conformity assessment system. Our path-breaking, AI-enhanced Training Design Software offers a valuable contribution to your efforts in developing competent professionals for an increasingly AI-driven world and strengthening the integrity and effectiveness of global conformity assessment programs.
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
import { Globe, Users, Cloud, Languages } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "40+ Global QMS Professionals",
    },
    {
      icon: Cloud,
      title: "AI-Driven Training Design", 
     
    },
    {
      icon: Users,
      title: "Multilingual Training Solutions",
    },
    {
      icon: Languages,
      title: "Global Conformity Alignment",
      
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
                  About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Evoke AI , DamnArt</span>
                </h2>
                
                {/* EVOKE.AI Description */}
                <div className="max-w-4xl mx-auto mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Company Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-center">
                      <strong>EVOKE AI</strong>, the Artificial Intelligence division of <strong>DAMNART</strong>—a design and technology company founded in Dubai with a presence in India, the UK, Canada, and the US—specializes in AI-driven conformity assessment training. Our expertise aligns seamlessly with the global conformity assessment system's objectives, strategic initiatives, and its mission to foster competence and trust worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid Layout for Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mb-16">
                {/* Grid Item 1: QMS Experience Meets AI Innovation */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Where QMS Experience Meets AI Innovation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We have collaborated with a team of 40+ Global Quality Management Systems professionals to leverage their QMS auditing experience and synergistic relationships with experts, IT and AI platforms to design experiential QMS/ISO/IEC, AI-driven, digitally transformative, Video-based, self-paced and effective global conformity assessment training programs.
                  </p>
                </div>

                {/* Grid Item 2: Pedagogy Meets Artificial Intelligence */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-2xl border border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    Where Pedagogy Meets Artificial Intelligence
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our team of practising conformity assessment auditors, subject matter experts, academicians, researchers, and AI experts have developed and mastered the art of designing transformative training, leveraging Artificial Intelligence and the advanced concepts of modern-day pedagogical sciences, gamification, and real-life case-studies.
                  </p>
                </div>

                {/* Grid Item 3: Digital-First Training Designed for Global Impact */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                    Digital-First Training Designed for Global Impact
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We specialize in developing innovative, multilingual training content designed specifically for certification bodies and their clients. With increasing demand for engaging, localized, and digital-first training solutions, we bring a unique blend of AI avatars, storytelling techniques, and certification-focused instructional design to make learning both effective and memorable.
                  </p>
                </div>

                {/* Grid Item 4: Strengthening Global Conformity Through AI Innovation */}
                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Strengthening Global Conformity Through AI Innovation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our AI-designed conformity assessment training aligns well with global conformity objectives and fosters competence and trust within the global conformity assessment system. Our path-breaking, AI-enhanced Training Design Software offers a valuable contribution to your efforts in developing competent professionals for an increasingly AI-driven world and strengthening the integrity and effectiveness of global conformity assessment programs.
                  </p>
                </div>
              </div>

              {/* Features Grid with Proper Spacing */}
              <div className="mt-20">
                <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-8">
                  {features.map((feature, index) => (
                    <li key={index} className="group bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 w-full max-w-sm mx-auto">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
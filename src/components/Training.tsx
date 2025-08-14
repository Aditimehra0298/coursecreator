import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Target,
  ChevronRight,
  Globe,
  Languages,
  CheckCircle
} from 'lucide-react';

const Training = () => {
  const trainingLevels = [
    {
      level: "1",
      title: "Foundational",
      subtitle: "EU Cybersecurity Compliance Core (EUC-Core)",
      duration: "90 min",
      audience: "Entry-level professionals",
      topics: "Basics of NIS2 & DORA, digital resilience, standards mapping",
      languages: "EN, EL, FR, DE, ES, IT",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      level: "2", 
      title: "Intermediate",
      subtitle: "Diploma in EU Cybersecurity Compliance",
      duration: "20 hrs",
      audience: "Mid-level compliance/audit roles",
      topics: "Stream-specific deep dives, electives & practical exercises",
      languages: "Multiple EU languages",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50", 
      borderColor: "border-blue-200"
    },
    {
      level: "3",
      title: "Advanced", 
      subtitle: "Advanced Diploma / Professional Degree",
      duration: "30 hrs + Capstone",
      audience: "Senior compliance professionals",
      topics: "Cross-border compliance strategy, crisis simulation, vendor governance",
      languages: "Multiple EU languages",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200"
    },
    {
      level: "4",
      title: "Expert",
      subtitle: "Master's / Expert Certification", 
      duration: "40+ hrs + Project",
      audience: "Leadership & strategic roles",
      topics: "Regulatory harmonization, resilience-by-design, leadership skills",
      languages: "Multiple EU languages",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    }
  ];

  const features = [
    "Stackable certification framework",
    "Real-world simulation exercises", 
    "Multi-language delivery options",
    "Industry-specific case studies",
    "Expert instructor network",
    "Flexible learning pathways"
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="animate-bounce">
                <GraduationCap className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              EU Cybersecurity <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Trusted E-Learning Training Path</span>
            </h2>
            <div className="flex justify-center mb-6">
              <img
                src="/l7.png"
                alt="Logo"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain brightness-125 [filter:drop-shadow(0_0_14px_rgba(255,255,255,0.85))]"
              />
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Complete, stackable training framework to help individuals and organizations meet DORA and NIS2 obligations
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {trainingLevels.map((training, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-r ${training.bgColor} rounded-3xl border-2 ${training.borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6">
                      {/* Level indicator */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${training.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <span className="text-2xl font-bold text-white">{training.level}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{training.title}</h3>
                          <p className="text-lg text-gray-600 font-medium">{training.subtitle}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-gray-500 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Duration</p>
                              <p className="font-medium text-gray-900">{training.duration}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-gray-500 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Audience</p>
                              <p className="font-medium text-gray-900">{training.audience}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <Languages className="w-5 h-5 text-gray-500 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Languages</p>
                              <p className="font-medium text-gray-900">{training.languages}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <Award className="w-5 h-5 text-gray-500 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Certification</p>
                              <p className="font-medium text-gray-900">EU Accredited</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-gray-700 leading-relaxed">{training.topics}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Progress line connecting levels */}
                {index < trainingLevels.length - 1 && (
                  <div className="absolute -bottom-4 left-12 w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-teal-600 mr-3" />
                <h4 className="text-2xl font-bold text-gray-900">Available in Multiple Languages</h4>
              </div>
              <p className="text-gray-600 mb-6">Learn in Greek or your preferred EU language with native-speaking instructors</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['English', 'Greek (Ελληνικά)', 'French', 'German', 'Spanish', 'Italian'].map((language, index) => (
                  <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
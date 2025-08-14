import { Globe, Users, Cloud, Languages } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Pan-European presence with strong foothold in Greece",
      description: "Operating in 7 EU countries since 2012"
    },
    {
      icon: Cloud,
      title: "Cloud-first infrastructure, hosted on EU-secure platforms", 
      description: "80% cloud-based infrastructure within EU borders"
    },
    {
      icon: Languages,
      title: "Multilingual delivery",
      description: "Courses available in English, Greek, French, German, Spanish, Italian & more"
    },
    {
      icon: Users,
      title: "Expertise in EU Cybersecurity & Digital Transformation",
      description: "1,500+ employees delivering secure, compliant solutions"
    }
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://fortune.com/img-assets/wp-content/uploads/2015/06/gettyimages-139156172.jpg?w=1440&q=75')" }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 z-0 bg-white/70"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {/* Left: Content */}
            <div>
              <div className="mb-10 text-center">
                <h2 id="about-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
                  About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Sustainable Future Trainings</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
                We are a team of management systems and compliance experts delivering practical, future-ready skills through experiential “learning by doing” training. Using live scenarios, expert guidance, and interactive workshops, we help organizations plan, implement, and improve systems to meet global standards in sustainability, compliance, quality, and resilience.
Our online and offline programs cover ISO standards, EU regulations, risk management, leadership, and sustainable practices — embedding compliance, safety, and value creation into your processes for top performance today and tomorrow
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
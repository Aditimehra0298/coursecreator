import { Clock, PlayCircle, BarChart3, Award } from 'lucide-react';

const ELearning = () => {
  return (
    <section
      id="e-learning"
      className="relative overflow-hidden py-20 bg-white"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-700 uppercase tracking-wider mb-2">Train smarter, not harder — with learning designed for the way your people work today.</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Cutting-Edge E‑Learning Portal</h2>
            <div className="flex justify-center mb-6">
              <img
                src="/l7.png"
                alt="E-Learning Portal Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover a smarter way to learn with our engaging, effective, and easy‑to‑use e‑learning platform. Designed for organizations that value flexibility, quality, and results, our portal empowers your workforce to learn anytime, anywhere — at their own pace.
            </p>
          </div>

          {/* Key Features - elevated cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Self‑Paced Learning',
                desc: 'Flexible courses that fit around busy schedules.',
                Icon: Clock,
                colors: 'from-teal-500 to-emerald-500'
              },
              {
                title: 'Interactive Content',
                desc: 'Engaging video lessons, quizzes, case studies, and real‑world simulations.',
                Icon: PlayCircle,
                colors: 'from-blue-500 to-indigo-500'
              },
              {
                title: 'Progress Tracking',
                desc: 'Monitor milestones, set personalized goals, and measure outcomes.',
                Icon: BarChart3,
                colors: 'from-violet-500 to-fuchsia-500'
              },
              {
                title: 'Certification & Accreditation',
                desc: 'Earn globally recognized certifications upon completion.',
                Icon: Award,
                colors: 'from-amber-500 to-rose-500'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-500/30 to-blue-500/30 reveal-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="rounded-2xl bg-white/85 backdrop-blur-sm p-6 h-full transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.colors} flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-105 transition-transform`}>
                    <item.Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <div className="mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full transition-all"></div>
                </div>
              </div>
            ))}
          </div>

          

          {/* Why E‑Learning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Why E‑Learning?</h3>
              <p className="text-teal-700 font-medium mb-4">Futurise Your Training Approach</p>
              <p className="text-gray-700 mb-6">
                Upgrade to a training model that is cost‑effective, scalable, and performance‑driven. Our e‑learning programs enhance knowledge retention, reduce downtime, and keep your team ahead in an ever‑evolving business landscape.
              </p>
              
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Train Your Employees</h3>
              <p className="text-gray-700 mb-6">
                Empower Your Workforce with Customized Training Solutions. We design organization‑specific learning programs that align with your goals, culture, and industry standards.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Course Categories Include:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><span className="font-medium">Compliance Training</span> – Stay ahead of regulations with comprehensive compliance modules.</li>
                <li><span className="font-medium">Leadership Development</span> – Equip leaders to inspire, motivate, and deliver results.</li>
                <li><span className="font-medium">Technical Skills</span> – Build technical excellence with specialized, industry‑focused courses.</li>
                <li><span className="font-medium">Soft Skills</span> – Strengthen communication, collaboration, and problem‑solving capabilities.</li>
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <a
              href="https://www.sftrainings.org/e-learning-courses/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-teal-700 transition-all"
            >
              Visit Our E‑Learning Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELearning;



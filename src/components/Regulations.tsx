import React from 'react';
import { Calendar, Building, AlertTriangle, CheckCircle, Globe, Network } from 'lucide-react';

const Regulations = () => {
  const doraFeatures = [
    "Banks, insurers, fintechs, and other financial entities",
    "Strict ICT risk management rules",
    "Resilience testing requirements", 
    "Vendor oversight protocols",
    "Incident reporting systems"
  ];

  const nis2Features = [
    "Essential and important sectors coverage",
    "Energy, healthcare, telecom, public admin",
    "Risk management frameworks",
    "Supply chain security measures",
    "CSIRT coordination protocols"
  ];

  return (
    <section id="regulations" className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Understanding the <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Regulations</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Navigate the complex landscape of EU cybersecurity regulations with confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DORA */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-8 border-blue-500">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">DORA</h3>
                    <p className="text-blue-600 font-medium">Digital Operational Resilience Act</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {doraFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-900">Key Details</span>
                  </div>
                  <p className="text-blue-800 text-sm mb-1">
                    <strong>Scope:</strong> Direct EU regulation — no national customization
                  </p>
                  <p className="text-red-600 text-sm font-medium">
                    <strong>Deadline:</strong> January 2025
                  </p>
                </div>
              </div>
            </div>

            {/* NIS2 */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-8 border-orange-500">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">NIS2</h3>
                    <p className="text-orange-600 font-medium">Network & Information Security Directive 2</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {nis2Features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200">
                  <div className="flex items-center mb-2">
                    <Globe className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="font-semibold text-orange-900">Key Details</span>
                  </div>
                  <p className="text-orange-800 text-sm mb-1">
                    <strong>Scope:</strong> Must be implemented into national laws
                  </p>
                  <p className="text-red-600 text-sm font-medium">
                    <strong>Deadline:</strong> October 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
                <h4 className="text-xl font-bold text-yellow-900">Compliance is Critical</h4>
              </div>
              <p className="text-yellow-800 leading-relaxed">
                Both regulations carry significant penalties for non-compliance. Sustainable Future Trainings helps you navigate 
                these complex requirements with expert guidance and comprehensive solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regulations;
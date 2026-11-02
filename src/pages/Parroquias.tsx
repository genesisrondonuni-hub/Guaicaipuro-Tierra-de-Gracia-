import { motion } from 'motion/react';
import { PARISHES } from '../constants';
import { MapPin, Info, Calendar, Target, Flag, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Parroquias() {
  const [selectedParish, setSelectedParish] = useState(PARISHES[1]); // Default to San Pedro

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-sans font-bold text-gray-900 mb-4">Fortalecimiento Parroquial</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          7 parroquias con autonomía reforzada, presupuesto participativo y gestión local eficiente.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Autonomía Reforzada", icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Presupuesto Participativo", icon: Target, color: "text-green-600", bg: "bg-green-50" },
            { label: "Gestión Local Eficiente", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" }
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full ${item.bg} ${item.color} font-bold text-sm border border-current/10`}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Parish List */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Seleccionar Parroquia</h3>
          {PARISHES.map((parish) => (
            <button
              key={parish.id}
              onClick={() => setSelectedParish(parish)}
              className={`w-full text-left p-4 rounded-xl transition-all border ${
                selectedParish.id === parish.id
                  ? 'bg-sky-50 border-sky-500 text-sky-700 shadow-sm'
                  : 'bg-white border-gray-100 text-gray-600 hover:border-sky-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin className={`w-4 h-4 ${selectedParish.id === parish.id ? 'text-sky-500' : 'text-gray-300'}`} />
                <span className="font-bold text-sm">{parish.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Parish Detail */}
        <div className="lg:col-span-3">
          <motion.div
            key={selectedParish.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="bg-sky-600 p-8 text-white">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedParish.name}</h2>
                  <span className="bg-sky-500 text-sky-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {selectedParish.type}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sky-200 text-sm uppercase font-bold mb-1">Estatus</div>
                  <div className="flex items-center gap-2 bg-sky-700 px-4 py-2 rounded-xl">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-bold">Fortalecida</span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sky-100 text-lg leading-relaxed max-w-2xl">
                {selectedParish.description}
              </p>
            </div>

            <div className="p-8">
              {selectedParish.plans ? (
                <div className="space-y-10">
                  {/* Short Term */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Plan a Corto Plazo</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedParish.plans.shortTerm.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-orange-50/30 rounded-2xl border border-orange-100">
                          <div className="mt-1 w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Medium Term */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500">
                        <Target className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Plan a Mediano Plazo</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedParish.plans.mediumTerm.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                          <div className="mt-1 w-1.5 h-1.5 bg-sky-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Long Term */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500">
                        <Flag className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Plan a Largo Plazo</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedParish.plans.longTerm.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-purple-50/30 rounded-2xl border border-purple-100">
                          <div className="mt-1 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                  <Info className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400">Planes Detallados en Desarrollo</h3>
                  <p className="text-gray-400 mt-2">Estamos trabajando en las propuestas específicas para {selectedParish.name}.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

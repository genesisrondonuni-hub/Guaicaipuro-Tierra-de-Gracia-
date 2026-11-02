import { motion } from 'motion/react';
import { AXES } from '../constants';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Ejes() {
  const [activeAxis, setActiveAxis] = useState(AXES[0].id);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-sans font-bold text-gray-900 mb-4">Seis Ejes de Política</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nuestra hoja de ruta estratégica para lograr la Libertad, la Democracia y la Prosperidad.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 space-y-2">
          {AXES.map((axis) => (
            <button
              key={axis.id}
              onClick={() => setActiveAxis(axis.id)}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${
                activeAxis === axis.id
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-200'
                  : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600 border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-lg font-bold ${activeAxis === axis.id ? 'text-sky-200' : 'text-sky-500'}`}>
                  0{axis.id}
                </span>
                <span className="font-bold">{axis.title}</span>
              </div>
              <ChevronRight className={`w-5 h-5 transition-transform ${activeAxis === axis.id ? 'rotate-90' : ''}`} />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8">
          {AXES.map((axis) => (
            activeAxis === axis.id && (
              <motion.div
                key={axis.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm min-h-[500px]"
              >
                <div className="mb-8">
                  <span className="text-sky-600 font-bold text-sm tracking-widest uppercase mb-2 block">EJE ESTRATÉGICO 0{axis.id}</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{axis.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {axis.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">Propuestas Clave</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {axis.details.map((detail, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <CheckCircle2 className="w-6 h-6 text-sky-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {axis.longDescription && (
                  <div className="mt-10 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Explicación Detallada</h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{axis.longDescription}"
                    </p>
                  </div>
                )}

                <div className="mt-12 p-6 bg-sky-50 rounded-2xl border border-sky-100 flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sky-900">Objetivo de Impacto</h4>
                    <p className="text-sky-700">Transformación radical de la gestión pública para el bienestar ciudadano.</p>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

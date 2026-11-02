import { motion } from 'motion/react';
import { PRINCIPLES } from '../constants';
import * as Icons from 'lucide-react';

export default function Principios() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-sans font-bold text-gray-900 mb-4">Principios Rectores</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Los pilares fundamentales que guiarán cada decisión y acción de nuestra gestión municipal.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRINCIPLES.map((principle, index) => {
          const IconComponent = (Icons as any)[principle.icon];
          return (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                {IconComponent && <IconComponent className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-20 bg-sky-50 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Estado Subsidiario</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nuestra propuesta concibe al Estado como una estructura al servicio del ciudadano. El municipio intervendrá únicamente en aquellas áreas que el mercado y la sociedad no puedan atender por sí mismos.
            </p>
            <ul className="space-y-3">
              {["Reducción de burocracia", "Eficiencia en el gasto", "Transparencia total"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sky-700 font-medium">
                  <Icons.CheckCircle2 className="w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-inner border border-sky-100">
            <div className="space-y-4">
              <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
              <div className="h-4 bg-sky-100 rounded-full w-full"></div>
              <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
              <div className="h-4 bg-sky-200 rounded-full w-2/3"></div>
              <div className="pt-4 flex justify-between items-end">
                <div className="text-sm font-mono text-gray-400">EFICIENCIA MUNICIPAL</div>
                <div className="text-2xl font-bold text-sky-600">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

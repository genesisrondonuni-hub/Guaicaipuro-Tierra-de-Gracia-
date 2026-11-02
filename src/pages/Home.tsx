import { motion } from 'motion/react';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-sky-600 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#fff_0%,transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-sans font-bold text-white tracking-tight mb-6"
          >
            Guaicaipuro <br className="sm:hidden" />
            <span className="text-sky-200">Tierra de Gracia</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-sky-100 max-w-3xl mx-auto mb-10"
          >
            Un plan de gobierno municipal basado en los principios de libertad, democracia y prosperidad para todos los ciudadanos.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/principios" 
              className="bg-white text-sky-600 px-8 py-3 rounded-full font-bold hover:bg-sky-50 transition-all flex items-center gap-2 shadow-lg"
            >
              Explorar Plan <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/parroquias" 
              className="bg-sky-500 text-white border border-sky-400 px-8 py-3 rounded-full font-bold hover:bg-sky-400 transition-all shadow-lg"
            >
              Ver Parroquias
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-sans font-bold text-gray-900 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Visualizamos un municipio democrático donde se respeta la libertad y la vida; un Guaicaipuro próspero inserto en las redes globales de creación de valor.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Respeto irrestricto a la propiedad privada", color: "text-blue-500" },
                  { icon: TrendingUp, text: "Fomento de la economía de libre mercado", color: "text-green-500" },
                  { icon: Users, text: "Estado al servicio del ciudadano, no al revés", color: "text-purple-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/guaicaipuro/800/600" 
                alt="Guaicaipuro Vision" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-sky-600 text-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
                <p className="text-lg font-bold italic">"Convertiremos a Guaicaipuro en un referente de buena gobernanza liberal."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Parroquias", value: "7" },
            { label: "Ejes de Política", value: "6" },
            { label: "Principios", value: "6" },
            { label: "Visión", value: "2025-2029" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

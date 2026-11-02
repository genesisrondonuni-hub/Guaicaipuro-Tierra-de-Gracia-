import { motion } from 'motion/react';
import { FileText, Download, Github, ExternalLink } from 'lucide-react';

export default function Documentacion() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-sans font-bold text-gray-900 mb-4">Documentación y Recursos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Accede a los documentos completos del plan de gobierno y recursos adicionales para la ciudadanía.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Plan Documents */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Documentos del Plan</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { title: "Plan Municipal Guaicaipuro 2025-2029", size: "2.4 MB", type: "PDF" },
              { title: "Resumen Ejecutivo - Tierra de Gracia", size: "1.1 MB", type: "PDF" },
              { title: "Propuesta de Estructura Organizativa", size: "0.8 MB", type: "PDF" },
              { title: "Plan de Desarrollo San Pedro de los Altos", size: "1.5 MB", type: "PDF" }
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-sky-200 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-sky-500 font-bold text-xs bg-white px-2 py-1 rounded border border-sky-100">{doc.type}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{doc.title}</div>
                    <div className="text-xs text-gray-400">{doc.size}</div>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-sky-500 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub & Open Data */}
        <div className="bg-gray-900 p-8 rounded-3xl shadow-xl text-white">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-sky-400">
              <Github className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Código y Transparencia</h2>
          </div>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            Este portal es una iniciativa de transparencia. El código fuente de esta aplicación y los datos del plan están disponibles para auditoría ciudadana.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Github className="w-4 h-4" /> Repositorio GitHub
              </h3>
              <p className="text-sm text-gray-400 mb-4">Accede al código fuente de esta aplicación interactiva.</p>
              <button 
                onClick={() => window.open('https://github.com', '_blank')}
                className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Ver en GitHub <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                📊 Datos Abiertos
              </h3>
              <p className="text-sm text-gray-400 mb-4">Descarga las bases de datos y proyecciones económicas del plan.</p>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-xl transition-all">
                Explorar Dataset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Export Instructions */}
      <div className="mt-16 p-8 bg-sky-50 rounded-3xl border border-sky-100">
        <h2 className="text-2xl font-bold text-sky-900 mb-6 flex items-center gap-3">
          <Github className="w-6 h-6" /> ¿Cómo exportar este proyecto a GitHub?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Configuración", desc: "Haz clic en el icono de engranaje (Settings) en la esquina superior derecha de AI Studio." },
            { step: "2", title: "Exportar", desc: "Selecciona la opción 'Export to GitHub' dentro del menú de configuración." },
            { step: "3", title: "Autorizar", desc: "Conecta tu cuenta de GitHub y elige el nombre del repositorio para subir tu aplicación." }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-black text-sky-100 absolute -top-4 -left-2 z-0">{item.step}</div>
              <div className="relative z-10">
                <h3 className="font-bold text-sky-800 mb-2">{item.title}</h3>
                <p className="text-sky-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

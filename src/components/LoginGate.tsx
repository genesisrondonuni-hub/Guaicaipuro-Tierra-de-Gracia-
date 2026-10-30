import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import VenteLogo from './VenteLogo';

interface LoginGateProps {
  onLoginSuccess: (username: string, remember: boolean) => void;
}

const VALID_CREDENTIALS: Record<string, { pass: string; role: string; displayName: string }> = {
  'vente-organizacion': {
    pass: 'Vente_Guaicaipuro.190',
    role: 'Organización Municipal',
    displayName: 'Vente-Organizacion',
  },
};

export default function LoginGate({ onLoginSuccess }: LoginGateProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');

  const envUser = import.meta.env.VITE_APP_USER;
  const envPass = import.meta.env.VITE_APP_PASSWORD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const normalizedUser = username.trim().toLowerCase();
    const trimmedPass = password.trim();

    if (!normalizedUser || !trimmedPass) {
      setError('Por favor ingresa tu usuario y contraseña.');
      return;
    }

    // Check custom environment variables first (if configured in Vercel)
    if (envUser && envPass) {
      if (normalizedUser === envUser.trim().toLowerCase() && trimmedPass === envPass.trim()) {
        onLoginSuccess(username.trim(), remember);
        return;
      }
    }

    // Check built-in authorized credentials
    const matchedAccount = VALID_CREDENTIALS[normalizedUser];
    if (matchedAccount && matchedAccount.pass === trimmedPass) {
      onLoginSuccess(matchedAccount.displayName, remember);
      return;
    }

    setError('Usuario o contraseña incorrectos. Verifica tus credenciales.');
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #16181D 0%, #222222 60%, #112A32 100%)',
      }}
    >
      {/* Decorative top bar */}
      <div
        className="w-full h-1.5"
        style={{
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        }}
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-md">
          {/* Card */}
          <div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border"
            style={{ borderColor: 'rgba(0, 222, 209, 0.25)' }}
          >
            {/* Card Header */}
            <div
              className="px-8 pt-8 pb-6 text-center border-b"
              style={{
                backgroundColor: '#FAFAFA',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex justify-center mb-4">
                <VenteLogo subtitle="GUAICAIPURO" size="lg" />
              </div>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(0, 222, 209, 0.12)',
                  color: '#008B82',
                }}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Acceso Institucional Protegido
              </span>
              <h1
                className="mt-3 text-xl font-extrabold tracking-tight"
                style={{ color: 'var(--color-heading)', fontSize: '22px' }}
              >
                Plan de Gobierno Municipal
              </h1>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text)' }}>
                Guaicaipuro Tierra de Gracia (2027–2031)
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {error && (
                <div
                  className="flex items-start gap-2.5 p-3.5 rounded-lg text-xs font-semibold border"
                  style={{
                    backgroundColor: '#FEF2F2',
                    borderColor: '#FECACA',
                    color: '#DC2626',
                  }}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label
                  htmlFor="login-username"
                  className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--color-heading)' }}
                >
                  Usuario
                </label>
                <div className="relative">
                  <User
                    className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: '#9CA3AF' }}
                  />
                  <input
                    id="login-username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ingresa tu usuario"
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-sm border focus:outline-none transition-all"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-heading)',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--color-heading)' }}
                >
                  Clave de Acceso
                </label>
                <div className="relative">
                  <Lock
                    className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: '#9CA3AF' }}
                  />
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    className="w-full pl-10 pr-11 py-3 rounded-lg text-sm border focus:outline-none transition-all"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-heading)',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-gray-100 transition-colors"
                    style={{ color: '#6B7280' }}
                    aria-label="Mostrar u ocultar clave"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="rounded border-gray-300 text-[#00DED1] focus:ring-[#00DED1]"
                  />
                  <span className="text-xs font-medium" style={{ color: 'var(--color-text)' }}>
                    Mantener sesión iniciada
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-vente-primary w-full justify-center py-3.5 text-sm shadow-md"
              >
                <span>Ingresar al Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Footer inside card */}
            <div
              className="px-8 py-4 text-center border-t text-[11px]"
              style={{
                backgroundColor: '#FAFAFA',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              Coordinación Municipal Liberal • <b>Vente Guaicaipuro</b>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="py-4 text-center text-xs relative z-10" style={{ color: '#9CA3AF' }}>
        © 2026 Alcaldía del Municipio Guaicaipuro • Venezuela Tierra de Gracia
      </div>
    </div>
  );
}

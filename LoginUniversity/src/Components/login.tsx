import React from "react";
import { Play, Mail, Lock } from "lucide-react";
import "../Styles/login.css";

const LoginInicial: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-sm relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
          <h1 className="text-2xl text-white mb-1">NI IDEA DEL NOMBRE DE ESTA VUELTA - TE AMO</h1>
          <p className="text-gray-400 text-sm">Disfruta películas sin límites</p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-xl text-white mb-1">Bienvenido de nuevo</h2>
              <p className="text-gray-400 text-sm">Inicia sesión para continuar viendo</p>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-200" />
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-gray-800/70 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-200 outline-none text-sm"
                placeholder="Correo electrónico"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-200" />
              </div>
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-gray-800/70 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-200 outline-none text-sm"
                placeholder="Contraseña"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-4 h-4 border border-gray-600 rounded bg-gray-800/50 peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-purple-600 peer-checked:border-blue-500 transition-all duration-200"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Recuérdame
                </span>
              </label>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] relative overflow-hidden group text-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out"></div>
              <span className="relative">Iniciar sesión</span>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700/50"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-gray-900/80 text-gray-500">o</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center py-2.5 px-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center py-2.5 px-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>

            <div className="text-center pt-4">
              <p className="text-gray-400 text-sm">
                ¿No tienes una cuenta?{" "}
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Regístrate
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs">
            Mira miles de películas y series
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginInicial;

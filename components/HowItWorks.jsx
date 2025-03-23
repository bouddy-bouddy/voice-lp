import Link from "next/link";

export default function HowItWorks() {
  return (
    <div
      id="comment-ca-marche"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Guide d'utilisation
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Comment ça marche
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez en trois étapes simples comment Grade Voice transforme
            votre façon de noter
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600"></div>

            <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative h-full bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-600 rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                    Installation
                  </h3>
                  <p className="mt-4 text-gray-500 text-center">
                    Téléchargez VoxMark depuis le Microsoft Store et activez
                    votre licence en quelques clics.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Installation rapide et guidée
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Compatible avec Excel 2016+
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative h-full bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-600 rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                    Configuration
                  </h3>
                  <p className="mt-4 text-gray-500 text-center">
                    Configurez rapidement l'add-in dans Excel et préparez votre
                    feuille de notes.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Interface intuitive
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Configuration en 2 minutes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative h-full bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-600 rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                    Utilisation
                  </h3>
                  <p className="mt-4 text-gray-500 text-center">
                    Dictez vos notes naturellement et laissez Grade Voice faire
                    le reste.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Reconnaissance vocale précise
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Navigation automatique
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Start Now CTA */}
          <div className="mt-16 text-center">
            <Link
              href="#telechargement"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
            >
              Commencer maintenant
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div id="fonctionnalites" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Fonctionnalités
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Une solution complète pour la
            <span className="gradient-text"> notation vocale</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez comment VoxMark transforme la saisie des notes en une
            expérience simple et efficace
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="feature-card group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 group-hover:text-[#4f46e5] transition-colors">
                  Reconnaissance Vocale Intelligente
                </h3>
                <p className="mt-3 text-base text-gray-500 group-hover:text-gray-600">
                  Dictez vos notes en français et elles sont automatiquement
                  saisies dans Excel avec une précision remarquable, même dans
                  les environnements bruyants.
                </p>
                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-card group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 group-hover:text-[#4f46e5] transition-colors">
                  Validation Instantanée
                </h3>
                <p className="mt-3 text-base text-gray-500 group-hover:text-gray-600">
                  Vérification automatique des notes entre 0 et 20 avec mise en
                  évidence visuelle. Repérez immédiatement les erreurs et
                  corrigez-les par simple commande vocale.
                </p>
                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-card group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 group-hover:text-[#4f46e5] transition-colors">
                  Navigation Intelligente
                </h3>
                <p className="mt-3 text-base text-gray-500 group-hover:text-gray-600">
                  Passage automatique à la cellule suivante après chaque note.
                  Un flux de travail optimisé pour une productivité maximale et
                  une réduction significative du temps de saisie.
                </p>
                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="feature-card group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 group-hover:text-[#4f46e5] transition-colors">
                  Calcul Automatique
                </h3>
                <p className="mt-3 text-base text-gray-500 group-hover:text-gray-600">
                  Calculez instantanément les moyennes et statistiques de votre
                  classe. Obtenez des analyses précises et des visualisations
                  claires pour suivre la progression des élèves.
                </p>
                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="feature-card group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 group-hover:text-[#4f46e5] transition-colors">
                  Sécurité et Confidentialité
                </h3>
                <p className="mt-3 text-base text-gray-500 group-hover:text-gray-600">
                  Vos données restent sécurisées en permanence. VoxMark
                  fonctionne localement sur votre ordinateur, garantissant la
                  confidentialité totale des informations des élèves.
                </p>
                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="feature-card group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 group-hover:text-[#4f46e5] transition-colors">
                  Gain de Productivité
                </h3>
                <p className="mt-3 text-base text-gray-500 group-hover:text-gray-600">
                  Réduisez jusqu'à 70% le temps consacré à la saisie des notes.
                  VoxMark vous permet de vous concentrer sur l'essentiel :
                  l'enseignement et l'accompagnement de vos élèves.
                </p>
                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <a
              href="#telechargement"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
            >
              Essayer VoxMark gratuitement
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
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Période d'essai de 30 jours sans engagement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

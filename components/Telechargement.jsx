export default function Telechargement() {
  return (
    <div
      id="telechargement"
      className="relative py-24 bg-gradient-to-br from-indigo-900 to-indigo-700 overflow-hidden"
    >
      {/* Shapes décoratifs */}
      <div className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20">
        <svg
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="de316486-4a29-4312-bdfc-fbce2132a2c1"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-indigo-200"
                fill="currentColor"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
          />
        </svg>
      </div>

      <div className="hidden lg:block absolute bottom-0 left-0 -mb-20 -ml-20">
        <svg
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="de316486-4a29-4312-bdfc-fbce2132a2c2"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-indigo-200"
                fill="currentColor"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c2)"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Contenu */}
          <div className="lg:col-span-6 mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Téléchargez VoxMark dès maintenant
            </h2>
            <p className="mt-4 text-lg text-indigo-100 lg:max-w-lg">
              Commencez à utiliser la reconnaissance vocale pour simplifier la
              notation de vos élèves. Essai gratuit de 7 jours sans engagement.
            </p>

            <div className="mt-10 space-y-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#4f46e5] "
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
                <div className="ml-4">
                  <h3 className="text-base font-medium ">
                    Installation simple
                  </h3>
                  <p className="mt-1 text-sm ">
                    Installation guidée et intuitive, prête en moins de 3
                    minutes.
                  </p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#4f46e5]"
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
                <div className="ml-4">
                  <h3 className="text-base font-medium">
                    Compatible avec Excel
                  </h3>
                  <p className="mt-1 text-sm ">
                    Fonctionne avec Microsoft Excel 2016 et versions
                    ultérieures.
                  </p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#4f46e5]"
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
                <div className="ml-4">
                  <h3 className="text-base font-medium ">Essai complet</h3>
                  <p className="mt-1 text-sm ">
                    Toutes les fonctionnalités sont débloquées pendant la
                    période d'essai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte de téléchargement */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:px-8 sm:py-10">
                <div className="text-center mb-8">
                  <div className="mx-auto h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg
                      className="h-12 w-12 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    VoxMark
                  </h2>
                  <p className="mt-1 text-gray-500">
                    Version 1.0.2 | Mise à jour:{" "}
                    {new Date().toLocaleDateString("fr-FR", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Système</span>
                    <span className="font-medium text-gray-900">
                      Windows 10/11
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500">Excel requis</span>
                    <span className="font-medium text-gray-900">
                      2016 ou ultérieur
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500">Taille</span>
                    <span className="font-medium text-gray-900">12.4 MB</span>
                  </div>
                </div>

                <a
                  href="#"
                  className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Télécharger VoxMark
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  En téléchargeant, vous acceptez nos{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    conditions d'utilisation
                  </a>
                </p>

                <div className="mt-8 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Configuration requise :
                  </h3>
                  <ul className="mt-2 text-sm text-gray-500 space-y-1">
                    <li>• Windows 10 ou Windows 11</li>
                    <li>• Microsoft Excel 2016 ou version ultérieure</li>
                    <li>• Connexion Internet (pour l'activation)</li>
                    <li>• Microphone fonctionnel</li>
                    <li>• 4 Go de RAM minimum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions d'installation */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Comment installer VoxMark ?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg mb-4">
                1
              </div>
              <h4 className="text-xl font-medium mb-2">
                Téléchargez le fichier
              </h4>
              <p className="text-gray-500">
                Cliquez sur le bouton "Télécharger VoxMark" et enregistrez le
                fichier d'installation sur votre ordinateur.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg mb-4">
                2
              </div>
              <h4 className="text-xl font-medium mb-2">
                Lancez l'installation
              </h4>
              <p className="text-gray-500">
                Double-cliquez sur le fichier téléchargé et suivez les
                instructions de l'assistant d'installation.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg mb-4">
                3
              </div>
              <h4 className="text-xl font-medium mb-2">Commencez à utiliser</h4>
              <p className="text-gray-500">
                Ouvrez Excel et vous verrez l'add-in VoxMark dans le ruban.
                Cliquez pour commencer à dicter vos notes.
              </p>
            </div>
          </div>
        </div>

        {/* Assistance */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-medium text-white mb-2">
            Besoin d'aide pour l'installation ?
          </h3>
          <p className="text-indigo-100 mb-6">
            Notre équipe est là pour vous aider à chaque étape.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Contacter le support
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-800"
            >
              Guide d'installation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div id="tarifs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Tarification
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Des tarifs adaptés aux besoins des enseignants du primaire
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Essayez gratuitement pendant 7 jours, puis choisissez l'option de
            paiement qui vous convient le mieux
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2">
          {/* Free Trial Plan */}
          <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <h3 className="text-lg font-medium text-gray-900">Essai</h3>
              <p className="mt-4 text-sm text-gray-500">
                Découvrez toutes les fonctionnalités de VoxMark sans aucun
                engagement
              </p>
              <div className="mt-6">
                <p className="text-5xl font-extrabold text-gray-900">Gratuit</p>
                <p className="mt-1 text-sm text-gray-500">pendant 7 jours</p>
              </div>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">
                    Accès à toutes les fonctionnalités
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">
                    Sans limite d'utilisation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">
                    Support par email
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="ml-3 text-sm text-gray-500 line-through">
                    Utilisation après 7 jours
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <a
                  href="#telechargement"
                  className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Télécharger gratuitement
                </a>
              </div>
            </div>
          </div>

          {/* Annual License - Split payment options */}
          <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden transform lg:scale-105 z-10">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 h-16 w-16">
              <div className="absolute transform rotate-45 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-xs font-semibold py-1 right-[-40px] top-[24px] w-[170px] text-center">
                Recommandé
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-lg font-medium text-gray-900">
                Licence Annuelle
              </h3>
              <p className="mt-4 text-sm text-gray-500">
                Pour les enseignants du primaire souhaitant optimiser leur
                notation
              </p>

              {/* Updated pricing for multiple devices */}
              <div className="mt-6 space-y-5">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">
                      1 appareil
                    </span>
                    <span className="text-2xl font-bold text-indigo-600">
                      50 DH
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">
                      2 appareils
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-indigo-600">
                        80 DH
                      </span>
                      <p className="text-xs text-indigo-600 mt-1">
                        <span>
                          (<strike>100 DH</strike>)
                        </span>{" "}
                        Économisez 20 DH{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">
                      3 appareils
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-indigo-600">
                        120 DH
                      </span>
                      <p className="text-xs text-indigo-600 mt-1">
                        <span>
                          (<strike>150 DH</strike>)
                        </span>{" "}
                        Économisez 30 DH
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">
                    Accès illimité pendant un an
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">
                    Reconnaissance vocale avancée
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">
                    Support prioritaire
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">
                    Mises à jour gratuites
                  </span>
                </li>
              </ul>

              {/* Payment Options */}
              <div className="mt-8 space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="text-md font-medium text-indigo-800 mb-3">
                    Deux options de paiement
                  </h4>

                  <div className="space-y-3">
                    {/* Online Payment Option */}
                    <a
                      href="#paiement-en-ligne"
                      className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      Paiement en ligne
                      <span className="text-xs ml-2">
                        (activation immédiate)
                      </span>
                    </a>

                    {/* Form-based Payment Option */}
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center px-5 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Formulaire de demande
                    </a>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Le paiement en ligne est sécurisé via notre partenaire de
                  paiement. Le formulaire de demande vous permet d'obtenir votre
                  licence sans utiliser votre carte bancaire en ligne.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offer for Schools */}
        <div className="mt-16 bg-gradient-to-r from-indigo-800 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-10 sm:px-10 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white">
                  Offre spéciale établissements
                </h3>
                <p className="mt-2 text-indigo-100">
                  Équipez tous vos enseignants du primaire avec VoxMark et
                  bénéficiez de tarifs préférentiels ainsi que d'une formation
                  personnalisée.
                </p>
              </div>
              <div className="text-center md:text-right">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
                >
                  Nous contacter
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Questions fréquemment posées
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Comment fonctionne la période d'essai?
              </h4>
              <p className="text-gray-500">
                VoxMark est pleinement fonctionnel pendant 7 jours après
                l'installation. Aucune carte bancaire n'est requise pour
                l'essai. Une fois cette période écoulée, vous devrez acquérir
                une licence pour continuer à utiliser l'application.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                La licence est-elle à vie ?
              </h4>
              <p className="text-gray-500">
                La licence VoxMark est valable pour une année scolaire complète.
                Les renouvellements bénéficient de tarifs préférentiels (-20%
                pour le premier renouvellement).
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Comment fonctionne le paiement sans carte bancaire?
              </h4>
              <p className="text-gray-500">
                Remplissez simplement le formulaire de demande de licence. Notre
                équipe vous contactera pour organiser le paiement selon votre
                convenance (virement, dépôt, ou autres moyens). Une fois le
                paiement confirmé, vous recevrez votre clé de licence par email.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Puis-je utiliser VoxMark sur plusieurs ordinateurs ?
              </h4>
              <p className="text-gray-500">
                Oui, nous proposons des licences pour 1, 2 ou 3 appareils avec
                des tarifs dégressifs. Pour plus de 3 appareils ou pour les
                besoins spécifiques d'un établissement, contactez-nous pour une
                offre personnalisée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

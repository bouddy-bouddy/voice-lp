import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "",
    email: "",
    phone: "",
    institution: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    // Dans un cas réel, vous utiliseriez ici un appel API pour envoyer les données
    setTimeout(() => {
      setFormSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      id="contact"
      className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Support & Licences
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Besoin d'aide ou d'une licence ?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto px-4 sm:px-6">
            Notre équipe est là pour vous accompagner dans l'utilisation de
            VoxMark et pour l'acquisition d'une licence professionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-start">
          {/* Demande de licence */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 order-2 lg:order-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Demander une licence
            </h3>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg
                  className="w-12 h-12 text-green-500 mx-auto mb-4"
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
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Demande envoyée avec succès
                </h4>
                <p className="text-gray-600">
                  Merci pour votre demande de licence VoxMark. Notre équipe vous
                  contactera dans les plus brefs délais pour finaliser votre
                  commande.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Entrez votre nom complet"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="nationalId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Numéro de la carte nationale{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nationalId"
                    name="nationalId"
                    required
                    value={formData.nationalId}
                    onChange={handleChange}
                    placeholder="Entrez votre numéro CIN"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Entrez votre adresse email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Numéro de téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Entrez votre numéro de téléphone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Établissement <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Entrez le nom de votre établissement"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      "Demander une licence"
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  En soumettant ce formulaire, vous acceptez que nous
                  collections vos informations pour le traitement de votre
                  demande de licence. Vos données ne seront jamais partagées
                  avec des tiers.
                </p>
              </form>
            )}
          </div>

          {/* Support Options */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Calendar Booking Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-violet-100">
                    <svg
                      className="h-6 w-6 sm:h-8 sm:w-8 text-violet-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="sm:ml-6 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Réserver une démonstration
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Planifiez une démonstration personnalisée de VoxMark
                  </p>
                  <div className="mt-4 flex justify-start">
                    <a
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-violet-600 hover:bg-violet-700 transition-colors duration-300"
                      href="https://cal.com/amine-elkhalidy/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Réserver un créneau
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100">
                    <svg
                      className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                </div>
                <div className="sm:ml-6 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Support WhatsApp
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Support rapide et personnalisé via WhatsApp
                  </p>
                  <div className="mt-4 flex justify-start">
                    <a
                      href="https://wa.me/212611154307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
                    >
                      Contacter sur WhatsApp
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-100">
                    <svg
                      className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="sm:ml-6 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Pour toute question technique ou commerciale
                  </p>
                  <div className="mt-4 flex justify-start">
                    <a
                      href="mailto:a.amineelkhalidy@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Envoyer un email
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

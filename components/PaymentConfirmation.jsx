"use client";

import { useState } from "react";
import Link from "next/link";

export default function PaymentConfirmation() {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Simulation d'un paiement (à remplacer par l'intégration réelle du système de paiement)
  const handlePayment = async () => {
    setIsLoading(true);
    setErrorMessage("");

    // Simuler un délai de traitement
    try {
      // Ici, vous intégrerez votre passerelle de paiement
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simuler un succès
      setPaymentComplete(true);
    } catch (error) {
      setErrorMessage(
        "Une erreur s'est produite lors du traitement du paiement. Veuillez réessayer."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo et en-tête */}
        <div className="flex justify-center mb-10">
          <Link href="/" className="flex items-center">
            <svg
              className="h-10 w-10 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <circle cx="100" cy="100" r="90" fill="currentColor" />
              <path
                d="M100 50 L100 110 M80 110 L120 110 M100 50 C88 50 78 60 78 72 L78 88 C78 100 88 110 100 110 C112 110 122 100 122 88 L122 72 C122 60 112 50 100 50"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M70 80 Q65 80 65 85 L65 95 Q65 100 70 100"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M130 80 Q135 80 135 85 L135 95 Q135 100 130 100"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M70 140 L90 160 L130 120"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-3 text-2xl font-bold text-gray-900">
              VoxMark
            </span>
          </Link>
        </div>

        {/* Contenu principal */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Étapes du processus */}
          <div className="border-b border-gray-200">
            <div className="flex justify-between px-6 py-4">
              <div className="flex items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-medium">
                  1
                </span>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  Informations
                </span>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-0.5 bg-indigo-600"></div>
              </div>
              <div className="flex items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-medium">
                  2
                </span>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  Paiement
                </span>
              </div>
              <div className="flex-1 mx-4">
                <div
                  className={`h-0.5 ${
                    paymentComplete ? "bg-indigo-600" : "bg-gray-200"
                  }`}
                ></div>
              </div>
              <div className="flex items-center">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                    paymentComplete
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  3
                </span>
                <span
                  className={`ml-2 text-sm font-medium ${
                    paymentComplete ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  Confirmation
                </span>
              </div>
            </div>
          </div>

          {paymentComplete ? (
            /* Confirmation de paiement */
            <div className="px-6 py-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Paiement réussi !
              </h2>
              <p className="mt-2 text-gray-600">
                Votre licence VoxMark a été activée avec succès. Vous recevrez
                un email avec votre clé de licence dans les prochaines minutes.
              </p>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg text-left">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Détails de votre achat
                </h3>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Produit :</span>
                  <span className="font-medium">Licence annuelle VoxMark</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Montant payé :</span>
                  <span className="font-medium">199 DH</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Date d'achat :</span>
                  <span className="font-medium">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Référence :</span>
                  <span className="font-medium">
                    VM-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Retour à l'accueil
                </Link>
              </div>
            </div>
          ) : (
            /* Formulaire de paiement */
            <div className="px-6 py-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Finaliser votre commande
              </h2>
              <p className="mt-2 text-gray-600">
                Vous êtes sur le point d'acheter une licence annuelle VoxMark
                pour 199 DH
              </p>

              {/* Information d'achat */}
              <div className="mt-8 border-t border-b border-gray-200 py-6">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Licence VoxMark (1 an)</span>
                  <span>199 DH</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">199 DH</span>
                </div>
              </div>

              {/* Formulaire */}
              <div className="mt-8 space-y-6">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Votre adresse email"
                    required
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Nous vous enverrons votre clé de licence à cette adresse.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Informations de paiement
                  </h3>

                  {/* Champs de carte bancaire (à remplacer par votre solution de paiement) */}
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Numéro de carte <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="expDate"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Date d'expiration{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="expDate"
                          name="expDate"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="MM/AA"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cvv"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Code de sécurité{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cardName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nom sur la carte <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="NOM Prénom"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Message d'erreur */}
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
                    {errorMessage}
                  </div>
                )}

                {/* Bouton de paiement */}
                <div>
                  <button
                    onClick={handlePayment}
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
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
                        Traitement en cours...
                      </>
                    ) : (
                      <>Payer 199 DH</>
                    )}
                  </button>
                  <p className="mt-3 text-sm text-gray-500 text-center">
                    Paiement sécurisé - Vos données sont chiffrées
                  </p>
                </div>

                {/* Autres options de paiement */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Ou obtenez une licence sans paiement en ligne
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#contact"
                      className="w-full inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Utiliser le formulaire de demande
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer avec informations de sécurité */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-center">
            <svg
              className="h-5 w-5 text-green-500 mr-2"
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
            <span className="text-sm text-gray-600">
              Connexion sécurisée par cryptage SSL - Vos informations sont
              protégées
            </span>
          </div>
        </div>

        {/* Section d'assistance */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-medium text-gray-900">Besoin d'aide ?</h3>
          <p className="mt-2 text-gray-600">
            Notre équipe est disponible pour vous aider avec votre commande
          </p>
          <div className="mt-4 flex items-center justify-center space-x-6">
            <a
              href="mailto:support@voxmark.ma"
              className="flex items-center text-indigo-600 hover:text-indigo-500"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              support@voxmark.ma
            </a>
            <a
              href="https://wa.me/212611154307"
              className="flex items-center text-indigo-600 hover:text-indigo-500"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              +212 611 154 307
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

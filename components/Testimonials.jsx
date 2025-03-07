export default function Testimonials() {
  return (
    <div id="temoignages" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Témoignages
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ils utilisent déjà VoxMark
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Découvrez comment VoxMark aide les enseignants à simplifier leur
            travail quotidien
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-x-4 mb-6">
              <div className="flex-shrink-0 h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600">
                SM
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sarah Morin
                </h3>
                <p className="text-sm text-gray-500">
                  Professeure de mathématiques, Lycée Victor Hugo
                </p>
              </div>
            </div>
            <blockquote>
              <p className="text-gray-700 italic">
                "VoxMark a révolutionné ma façon de noter. Je gagne au moins 3
                heures par semaine sur la saisie des notes et je peux me
                concentrer davantage sur la préparation de mes cours. Un outil
                indispensable pour tout enseignant !"
              </p>
            </blockquote>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-x-4 mb-6">
              <div className="flex-shrink-0 h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600">
                MB
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Mohamed Benali
                </h3>
                <p className="text-sm text-gray-500">
                  Professeur de physique, Lycée Al Khansaa
                </p>
              </div>
            </div>
            <blockquote>
              <p className="text-gray-700 italic">
                "Avec plus de 200 élèves, la notation était un véritable défi
                hebdomadaire. VoxMark m'a permis de réduire le temps de saisie
                de 70%. La précision de la reconnaissance vocale est
                impressionnante, même avec les nombres décimaux."
              </p>
            </blockquote>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-x-4 mb-6">
              <div className="flex-shrink-0 h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600">
                LT
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Laila Tazi
                </h3>
                <p className="text-sm text-gray-500">
                  Directrice pédagogique, Institut Al Maarifa
                </p>
              </div>
            </div>
            <blockquote>
              <p className="text-gray-700 italic">
                "Notre établissement a équipé tous les enseignants avec VoxMark.
                Les résultats ont été immédiats : réduction des erreurs de
                saisie, gain de temps considérable et satisfaction générale de
                l'équipe pédagogique. Un investissement rentabilisé en quelques
                mois."
              </p>
            </blockquote>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#telechargement"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            Rejoignez les enseignants satisfaits
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
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-indigo-600"
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
              <span className="ml-2 text-xl font-semibold text-gray-900">
                VoxMark
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Transformez votre façon de noter avec la reconnaissance vocale
              dans Excel.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-600"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-600"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-600"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#fonctionnalites"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="#comment-ca-marche"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link
                  href="#temoignages"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Témoignages
                </Link>
              </li>
              <li>
                <Link
                  href="#tarifs"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Légal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                >
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              À Propos du Développeur
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              VoxMark a été développé avec passion par Amine Elkhalidy, un
              développeur full-stack spécialisé dans la création de solutions
              innovantes.
            </p>
            <a
              href="https://amineelkhalidy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
            >
              Découvrir mon portfolio
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} VoxMark. Développé par
            <a
              href="https://amineelkhalidy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 font-medium ml-1"
            >
              Amine Elkhalidy
            </a>
            . Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

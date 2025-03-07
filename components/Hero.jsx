import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <svg
          className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="hero-pattern"
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
                className="text-indigo-400"
                fill="currentColor"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-full py-1 px-3 bg-indigo-500 bg-opacity-20">
                <p className="text-sm leading-6 text-indigo-200">
                  Nouveau: Version 1.0 disponible
                </p>
              </div>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Notez à la voix</span>
              <span className="block text-indigo-200">dans Excel</span>
            </h1>
            <p className="mt-3 text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Simplifiez la saisie des notes avec la reconnaissance vocale.
              Gagnez du temps et évitez les erreurs avec notre solution
              innovante.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-x-4">
              <Link
                href="#telechargement"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transform transition-transform duration-200 hover:scale-105"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Télécharger maintenant
              </Link>
              <Link
                href="#comment-ca-marche"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-20 hover:bg-opacity-30"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Voir la démo
              </Link>
            </div>
          </div>
          <div className="mt-12 relative lg:mt-0 lg:col-span-6">
            <div className="floating-element relative mx-auto w-full max-w-md lg:max-w-2xl">
              <div className="relative w-full h-full">
                {/* Replace the placeholder image with our custom SVG */}
                <div className="relative mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
                  {/* Include the SVG here */}
                  <div id="grade-voice-interface">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 800 600"
                    >
                      {/* Background */}
                      <rect
                        width="800"
                        height="600"
                        fill="#F8FAFC"
                        rx="12"
                        ry="12"
                      />

                      {/* Excel Window Frame */}
                      <rect
                        x="40"
                        y="40"
                        width="720"
                        height="520"
                        fill="white"
                        stroke="#E2E8F0"
                        strokeWidth="2"
                        rx="8"
                        ry="8"
                      />

                      {/* Excel Header */}
                      <rect
                        x="40"
                        y="40"
                        width="720"
                        height="40"
                        fill="#1D4ED8"
                        rx="8"
                        ry="8"
                      />
                      <text
                        x="60"
                        y="65"
                        fill="white"
                        fontFamily="Inter, sans-serif"
                        fontSize="14"
                      >
                        VoxMark - Excel Add-in
                      </text>

                      {/* Excel Grid */}
                      <g transform="translate(60, 100)">
                        {/* Column Headers */}
                        <rect
                          x="0"
                          y="0"
                          width="100"
                          height="30"
                          fill="#F1F5F9"
                          stroke="#E2E8F0"
                          strokeWidth="1"
                        />
                        <rect
                          x="100"
                          y="0"
                          width="100"
                          height="30"
                          fill="#F1F5F9"
                          stroke="#E2E8F0"
                          strokeWidth="1"
                        />
                        <rect
                          x="200"
                          y="0"
                          width="100"
                          height="30"
                          fill="#F1F5F9"
                          stroke="#E2E8F0"
                          strokeWidth="1"
                        />
                        <rect
                          x="300"
                          y="0"
                          width="100"
                          height="30"
                          fill="#F1F5F9"
                          stroke="#E2E8F0"
                          strokeWidth="1"
                        />

                        <text
                          x="40"
                          y="20"
                          fill="#475569"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          Nom
                        </text>
                        <text
                          x="130"
                          y="20"
                          fill="#475569"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          Note 1
                        </text>
                        <text
                          x="230"
                          y="20"
                          fill="#475569"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          Note 2
                        </text>
                        <text
                          x="330"
                          y="20"
                          fill="#475569"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          Moyenne
                        </text>

                        {/* Grid Rows */}
                        <g id="grid-rows">
                          {/* Row 1 */}
                          <rect
                            x="0"
                            y="30"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                          <rect
                            x="100"
                            y="30"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                          <rect
                            x="200"
                            y="30"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                          <rect
                            x="300"
                            y="30"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />

                          {/* Row 2 */}
                          <rect
                            x="0"
                            y="70"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                          <rect
                            x="100"
                            y="70"
                            width="100"
                            height="40"
                            fill="#EEF2FF"
                            stroke="#E2E8F0"
                            strokeWidth="2"
                          />
                          <rect
                            x="200"
                            y="70"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                          <rect
                            x="300"
                            y="70"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />

                          {/* Row 3 */}
                          <rect
                            x="0"
                            y="110"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                          <rect
                            x="100"
                            y="110"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                          <rect
                            x="200"
                            y="110"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                          <rect
                            x="300"
                            y="110"
                            width="100"
                            height="40"
                            fill="white"
                            stroke="#E2E8F0"
                            strokeWidth="1"
                          />
                        </g>

                        {/* Sample Data */}
                        <text
                          x="10"
                          y="55"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          Emma Martin
                        </text>
                        <text
                          x="130"
                          y="55"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          15.5
                        </text>
                        <text
                          x="230"
                          y="55"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          16.0
                        </text>
                        <text
                          x="330"
                          y="55"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          15.75
                        </text>

                        <text
                          x="10"
                          y="95"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          Lucas Bernard
                        </text>
                        <text
                          x="130"
                          y="95"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          ⏺️
                        </text>
                        <text
                          x="230"
                          y="95"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          14.5
                        </text>
                        <text
                          x="330"
                          y="95"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          -
                        </text>

                        <text
                          x="10"
                          y="135"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          Sophie Dubois
                        </text>
                        <text
                          x="130"
                          y="135"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          17.0
                        </text>
                        <text
                          x="230"
                          y="135"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          16.5
                        </text>
                        <text
                          x="330"
                          y="135"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                        >
                          16.75
                        </text>
                      </g>

                      {/* Voice Input Interface */}
                      <g transform="translate(500, 100)">
                        {/* Interface Container */}
                        <rect
                          x="0"
                          y="0"
                          width="200"
                          height="280"
                          fill="white"
                          stroke="#E2E8F0"
                          strokeWidth="2"
                          rx="8"
                          ry="8"
                        />

                        {/* Header */}
                        <rect
                          x="0"
                          y="0"
                          width="200"
                          height="40"
                          fill="#1D4ED8"
                          rx="8"
                          ry="8"
                        />
                        <text
                          x="20"
                          y="25"
                          fill="white"
                          fontFamily="Inter, sans-serif"
                          fontSize="14"
                        >
                          Grade Voice
                        </text>

                        {/* Microphone Circle */}
                        <circle
                          cx="100"
                          cy="100"
                          r="40"
                          fill="#EEF2FF"
                          stroke="#1D4ED8"
                          strokeWidth="2"
                        />
                        <path
                          d="M85,100 L115,100 M100,85 L100,115"
                          stroke="#1D4ED8"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />

                        {/* Status Text */}
                        <text
                          x="100"
                          y="160"
                          fill="#1E293B"
                          fontFamily="Inter, sans-serif"
                          fontSize="12"
                          textAnchor="middle"
                        >
                          En écoute...
                        </text>

                        {/* Voice Waves Animation */}
                        <g transform="translate(40, 180)">
                          <path
                            d="M0,20 Q30,-10 60,20 Q90,50 120,20"
                            fill="none"
                            stroke="#1D4ED8"
                            strokeWidth="2"
                          >
                            <animate
                              attributeName="d"
                              values="M0,20 Q30,-10 60,20 Q90,50 120,20;
                                                M0,20 Q30,50 60,20 Q90,-10 120,20;
                                                M0,20 Q30,-10 60,20 Q90,50 120,20"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>

                        {/* Controls */}
                        <rect
                          x="20"
                          y="220"
                          width="160"
                          height="40"
                          fill="#1D4ED8"
                          rx="6"
                          ry="6"
                        />
                        <text
                          x="100"
                          y="245"
                          fill="white"
                          fontFamily="Inter, sans-serif"
                          fontSize="14"
                          textAnchor="middle"
                        >
                          Commencer la dictée
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob"></div>
                  <div className="absolute -bottom-8 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <Link
          href="#fonctionnalites"
          className="text-white opacity-75 hover:opacity-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

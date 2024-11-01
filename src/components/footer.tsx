import { graphql, useStaticQuery } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import * as React from "react"
import SectionConsulting from "./section-consulting"
import SectionNewsletter from "./section-newsletter"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterImagesQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "logos" }
          name: { eq: "bg-skyline" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 300)
            }
            id
            name
            extension
          }
        }
      }
    }
  `)
  const image = data.allFile.edges[0].node
  const src = getSrc(image)
  return (
    <>
      <div className="bg-gray-100" style={{ borderTop: "4px dotted #cfcfcf" }}>
        <SectionConsulting />
        <SectionNewsletter />
      </div>
      <footer
        className="bg-blue-900 px-6 lg:px-8 py-12 bg-no-repeat bg-cover	bg-center z-30"
        style={{ backgroundImage: `url("${src}")` }}
      >
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8 text-white">
          <div>
            <a
              href="/"
              className="relative flex flex-col font-black leading-none"
            >
              <span className="text-2xl text-white">
                <span className="font-light">reisebüro</span>
                <span className="font-bold">rode</span>
                <span className="text-pink-600">.</span>
              </span>
              <span className="font-light text-xs text-white">
                wir kümmern uns. um sie.
              </span>
            </a>
            <div className="space-y-4 md:space-y-6 mt-4">
              <div className="flex items-start space-x-4">
                <div>
                  <svg
                    className="w-6 h-6 mt-1 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>

                <div className="">
                  <a
                    href="mailto:info@rodereisen.de"
                    className="hover:text-yellow-600 text-pink-600 pt-10"
                  >
                    info@rodereisen.de
                  </a>
                </div>
              </div>
            </div>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/impressum"
                    className="font-normal text-base hover:text-yellow-600 text-pink-600"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/agb"
                    className="font-normal text-base hover:text-yellow-600 text-pink-600"
                  >
                    AGB
                  </a>
                </li>
                <li>
                  <a
                    href="/veranstalter-agb"
                    className="font-normal text-base hover:text-yellow-600 text-pink-600"
                  >
                    Veranstalter AGB
                  </a>
                </li>
                <li>
                  <a
                    href="/standard-formblatt"
                    className="font-normal text-base hover:text-yellow-600 text-pink-600"
                  >
                    Standard Formblatt
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div className="text-lg text-white">
              <span className="font-light">standort</span>
              <span className="font-semibold">beilstein</span>
            </div>
            <div className="space-y-4 md:space-y-6 mt-4">
              <div className="flex items-start space-x-4">
                <div>
                  <svg
                    className="w-6 h-6 mt-1 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <address className="not-italic">
                    Hauptstrasse 44
                    <br />
                    D-71717 Beilstein
                    <br />
                    <a
                      className="hover:text-yellow-600 text-pink-600"
                      href="tel:0049706294990"
                    >
                      +49 (0)7062 94990
                    </a>
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-lg text-white">
              <span className="font-light">standort</span>
              <span className="font-semibold">steinheim</span>
            </div>
            <div className="space-y-4 md:space-y-6 mt-4">
              <div className="flex items-start space-x-4">
                <div>
                  <svg
                    className="w-6 h-6 mt-1 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex">
                  <address className="not-italic">
                    Friedrichstraße 8
                    <br />
                    D-71711 Steinheim
                    <br />
                    <a
                      href="tel:0049714481550"
                      className="hover:text-yellow-600 text-pink-600"
                    >
                      +49 (0)7144 81550
                    </a>
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-lg text-white">
              <span className="font-light">konto</span>
              <span className="font-semibold">daten</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex items-start space-x-4">
                <div className="space-y-4 md:space-y-6 mt-4">
                  <div className="flex flex-col items-start space-x-4">
                    <div className="">
                      <div>Commerzbank</div>
                      <div>
                        IBAN: <span>DE11 5004 0000 0584 6787 03</span>
                      </div>
                      <div>
                        BIC: <span>COBADEFFXXX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col items-center mt-16">
          <div className="max-w-screen-xl mx-auto flex flex-col items-center mt-16">
            <div className="flex items-center space-x-2">
              <a
                href="https://www.facebook.com/ReisebueroRode/"
                className="hover:text-yellow-600 text-pink-600"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
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
                href="https://www.instagram.com/rodereisen/"
                className="hover:text-yellow-600 text-pink-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="text-sm text-white mt-4">
              &copy; 1981 - {new Date().getFullYear()} Reisebüro Rode. Alle
              Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

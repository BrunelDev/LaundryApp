import { Navbar } from "../components/navbar/navbar";
export default function Contact() {
  return (
    <section class="bg-blue-200 py-12" id="contact">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Contactez-nous</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              rhoncus justo vitae turpis convallis aliquam.
            </p>
            <ul class="text-lg text-gray-800">
              <li class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a8 8 0 00-8 8c0 3.047 1.898 5.72 4.657 6.832.476.192.98.301 1.494.168l1.432-.348a1 1 0 01.754.11l2.957 1.973a1 1 0 001.08 0l2.957-1.973a1 1 0 01.754-.11l1.432.348c.514.133 1.018.024 1.494-.168C18.102 15.72 20 13.047 20 10c0-4.418-3.582-8-8-8zm0 2a6 6 0 100 12 6 6 0 000-12zm-1 4a1 1 0 00-1 1v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V9a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Abomey-Calavi, Cotonou, BENIN
              </li>
              <li class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a8 8 0 00-8 8c0 3.047 1.898 5.72 4.657 6.832.476.192.98.301 1.494.168l1.432-.348a1 1 0 01.754.11l2.957 1.973a1 1 0 001.08 0l2.957-1.973a1 1 0 01.754-.11l1.432.348c.514.133 1.018.024 1.494-.168C18.102 15.72 20 13.047 20 10c0-4.418-3.582-8-8-8zm0 2a6 6 0 100 12 6 6 0 000-12zm-1 4a1 1 0 00-1 1v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V9a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                +229 59 00 23 48
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a8 8 0 00-8 8c0 3.047 1.898 5.72 4.657 6.832.476.192.98.301 1.494.168l1.432-.348a1 1 0 01.754.11l2.957 1.973a1 1 0 001.08 0l2.957-1.973a1 1 0 01.754-.11l1.432.348c.514.133 1.018.024 1.494-.168C18.102 15.72 20 13.047 20 10c0-4.418-3.582-8-8-8zm0 2a6 6 0 100 12 6 6 0 000-12zm-1 4a1 1 0 00-1 1v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V9a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                allinone@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Nom
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nom"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Adresse e-mail
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Adresse e-mail"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                />
              </div>
              <div class="mt-4">
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Soumettre
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

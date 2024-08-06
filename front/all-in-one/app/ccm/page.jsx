export default function Ccm() {
  return (
    <body class="bg-blue-200 font-sans">
      <main class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
            <img src="fold.png" alt="Processus 1" class="mr-4"></img>
            <div>
              <h2 class="text-3xl font-semibold mb-2">Tri du linge</h2>
              <p class="text-xl text-gray-700">
                Nous trions minutieusement votre linge selon les couleurs, les
                tissus et les instructions spécifiques.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
            <img src="washAndDry.png" alt="Processus 2" class="mr-4" />
            <div>
              <h2 class="text-xl font-semibold mb-2">Lavage professionnel</h2>
              <p class="text-xl text-gray-700">
                Nous utilisons des machines modernes et des produits écologiques
                pour un lavage optimal de votre linge.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 flex items-center">
            <img src="pickup.png" alt="Processus 3" class="mr-4" />
            <div>
              <h2 class="text-3xl font-semibold mb-2">
                Repassage et livraison
              </h2>
              <p class="text-xl tex-gray-700">
                Chaque vêtement est repassé avec soin pour garantir un aspect
                impeccable et professionnel.
              </p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

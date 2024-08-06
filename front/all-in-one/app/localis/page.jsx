export default function Localis(){
    // Initialisation de la carte
    var mymap = L.map('map').setView([48.8566, 2.3522], 13);
            
    // Ajout du fond de carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Ajout du marqueur
    var marker = L.marker([48.8566, 2.3522]).addTo(mymap);
    return(
        <body class="bg-gray-100 font-sans">

            <!-- Header -->
            <header class="bg-white shadow-md py-6">
                <div class="container mx-auto px-4">
                    <h1 class="text-2xl font-bold text-gray-800">Bienvenue chez Blanchisserie Service</h1>
                </div>
            </header>

            <!-- Main Content -->
            <main class="container mx-auto px-4 py-8">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Comment ça marche ?</h2>
                    <p class="text-gray-700 mb-4">Chez Blanchisserie Service, nous avons simplifié le processus de nettoyage de votre linge. Il vous suffit de déposer votre linge sale à notre point de service ou de planifier une collecte à domicile. Nous nous occupons du reste !</p>
                    <h2 class="text-xl font-semibold mb-4">Avantages</h2>
                    <ul class="list-disc text-gray-700 mb-4 pl-4">
                        <li>Service rapide et efficace</li>
                        <li>Utilisation de produits écologiques</li>
                        <li>Personnel qualifié</li>
                        <li>Service de collecte à domicile</li>
                    </ul>
                    <h2 class="text-xl font-semibold mb-4">Localisation</h2>
                    <p class="text-gray-700 mb-4">Nous sommes situés au 123 Rue des Lavandières, 75000 Paris, France.</p>
                </div>
            </main>

            <!-- Footer -->
            <footer class="bg-gray-800 text-white py-6">
                <div class="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Blanchisserie Service. Tous droits réservés.</p>
                </div>
            </footer>

        </body>
    
    
    )
}
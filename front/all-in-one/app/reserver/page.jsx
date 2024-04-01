export default function Reserver(){
    return(
        <body class="bg-blue-300">
            <div class="mx-auto px-20 py-4 text-5xl text-blue-500">Réservez votre commande </div>
            <p class="mx-auto px-20 py-3 text-2xl">Faites votre réservation en quelques minutes.</p>
    <div class="container mx-auto px-1 py-6">
        <div class="bg-blue-200 rounded-lg shadow-md overflow-hidden">
            <div class="bg-blue-400 text-white px-6 py-4">
                <h1 class="text-2xl font-bold">Réserver</h1>
            </div>
            <div class="p-6">
                <form action="#" method="post">
                    <div class="mb-4">
                        <label for="nom" class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                        <input type="text" id="nom" name="nom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Votre nom"/>
                    </div>
                    <div class="mb-4">
                        <label for="nom" class="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
                        <input type="text" id="nom" name="nom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Votre prénom"/>
                    </div>
                    <div class="mb-4">
                        <label for="nom" class="block text-gray-700 text-sm font-bold mb-2">Ville</label>
                        <input type="text" id="nom" name="nom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Votre ville"/>
                    </div>
                    <div class="mb-4">
                        <label for="tel" class="block text-gray-700 text-sm font-bold mb-2">Téléphone</label>
                        <input type="tel" id="tel" name="tel" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Whatsapp"/>
                    </div>
                    <div class="mb-4">
                        <label for="precision" class="block text-gray-700 text-sm font-bold mb-2">Précision de la localisation</label>
                        <textarea id="precision" name="precision" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Précision de la localisation"></textarea>
                    </div>
                    <div class="mb-4">
                        <label for="moyen_paiement" class="block text-gray-700 text-sm font-bold mb-2">Moyen de paiement</label>
                        <select id="moyen_paiement" name="moyen_paiement" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="carte">Carte bancaire</option>
                            <option value="especes">Espèces</option>
                            <option value="mobile">Paiement mobile</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Réserver</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
)
}
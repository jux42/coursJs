document.addEventListener('DOMContentLoaded', function () {
    const pokemonInput = document.getElementById('pokemonInput');
    const fetchButton = document.getElementById('fetchPokemon');
    let pokemonInfo = document.getElementById('pokemonInfo');

    fetchButton.addEventListener('click', function () {

        let pokemonNameOrId = pokemonInput.value.trim();

        if (pokemonNameOrId !== '') {
            pokemonInput.value = "";


                const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;
                fetch(apiUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Pokémon non trouvé');
                        }

                        return response.json()
                            .then(data => {
                                myPokemon(data);
                            });

                        function myPokemon(data) {

                                    const pokeDiv = document.createElement('div' )

                                    const pokeId = document.createElement('p' )
                                    pokeId.textContent = `ID : ${data.id}`;
                                    const showPokemon = document.createElement("p");
                                    showPokemon.textContent = `Pokemon : ${data.name}`;
                                    const describePokemon = document.createElement('p');
                                    describePokemon.textContent = `height : ${data.height}`;
                                    const pokeImg = document.createElement('img');
                                    pokeImg.srcset = `${data.sprites.other.dream_world.front_default}`;


                                    pokemonInfo.appendChild(pokeDiv);

                                    pokeDiv.appendChild(pokeId);
                                    pokeDiv.appendChild(showPokemon);
                                    pokeDiv.appendChild(describePokemon);
                                    pokeDiv.appendChild(pokeImg);



                        }
                    })
                    .catch(error => {
                        alert(error); // Rejeté si une des promesses est rejetée

                    });

        }
    });
});




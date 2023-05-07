const charactersList = document.getElementById('characters-list');
const apiUrl = 'https://swapi.dev/api/people/';

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((character) => {
      const characterCard = document.createElement('li');
      characterCard.className = 'characters-card w-64 p-4 m-2';

      const characterName = document.createElement('h2');
      characterName.className = 'character-name';
      characterName.textContent = character.name;

      const characterInfo = document.createElement('ul');
      characterInfo.className = 'character-info';

      const characterDetails = [
        { label: 'Height', value: character.height },
        { label: 'Mass', value: character.mass },
        { label: 'Hair Color', value: character.hair_color },
        { label: 'Skin Color', value: character.skin_color },
        { label: 'Eye Color', value: character.eye_color },
        { label: 'Birth Year', value: character.birth_year },
        { label: 'Gender', value: character.gender },
      ];

      characterDetails.forEach((detail) => {
        const detailItem = document.createElement('li');
        detailItem.textContent = `${detail.label}: ${detail.value}`;
        characterInfo.appendChild(detailItem);
      });

      characterCard.appendChild(characterName);
      characterCard.appendChild(characterInfo);
      charactersList.appendChild(characterCard);
    });
  })
  .catch((error) => {
    console.error('Error fetching character data:', error);
  });

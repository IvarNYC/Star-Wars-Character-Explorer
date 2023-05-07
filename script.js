document.addEventListener('DOMContentLoaded', () => {
    const charactersList = document.getElementById('characters-list');
  
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        data.results.forEach(character => {
          const li = document.createElement('li');
  
          li.innerHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height} cm</p>
            <p>Mass: ${character.mass} kg</p>
            <p>Hair Color: ${character.hair_color}</p>
            <p>Skin Color: ${character.skin_color}</p>
            <p>Eye Color: ${character.eye_color}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Gender: ${character.gender}</p>
          `;
  
          charactersList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching SWAPI data:', error));
  });
  
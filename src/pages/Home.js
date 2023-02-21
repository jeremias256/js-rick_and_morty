
import getData from '../utils/getData.js';

const Home = async () => {
    const characters = await getData();
    
    const view = `
        <div class="characters">
            ${characters.results.map( ({id, name, image})  => `

                <article class="character-item">
                    <a href="#/${id}/"> <img src=${image} alt=${name}> </a>
                    <h2>${name}</h2>
                </article>
                
            `).join('')}
        </div>
    `;

    return view;
}

export default Home;

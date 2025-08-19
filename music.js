document.getElementById('search-btn').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Loading...';

    try {
        const response = await fetch(`https://musicbrainz.org/ws/2/artist/?query=${query}&fmt=json`);
        const data = await response.json();
        
        resultsDiv.innerHTML = '';
        data.artists.forEach(artist => {
            resultsDiv.innerHTML += `
                <div class="card">
                    <h3>${artist.name}</h3>
                    <p>Type: ${artist.type || 'Unknown'}</p>
                    ${artist.country ? `<p>Country: ${artist.country}</p>` : ''}
                    ${artist['begin-area'] ? `<p>Begin Area: ${artist['begin-area'].name}</p>` : ''}
                </div>
            `;
        });
    } catch (error) {
        resultsDiv.innerHTML = 'Error fetching data';
        console.error(error);
    }
});
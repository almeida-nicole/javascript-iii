import axios from 'axios'

const inputSearch = document.getElementById('input');

function musicBrainzArtistSearch() {
  inputSearch.addEventListener("keydown", function(event) {
    event.preventDefault();
      axios.get('http://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json')
        .then(function (response) {
          console.log('sucesso', response)
        })
        .catch(function (error) {
          console.log('error', error)
        });
  })
}

  export default musicBrainzArtistSearch


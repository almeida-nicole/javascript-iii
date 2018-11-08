import axios from 'axios'
export default musicBrainzArtistSearch

const inputSearch = document.getElementById('input');

inputSearch.addEventListener("keydown", function(event){
  if (event.key == "Enter") {
    musicBrainzArtistSearch()
      axios.get(`http://musicbrainz.org/ws/2/artist/?query=${this.value}&fmt=json`)
      .then(function (response) {
        console.log('sucesso', response);
      })
      .catch(function (error) {
        console.log('error', error);
      });
    }
})



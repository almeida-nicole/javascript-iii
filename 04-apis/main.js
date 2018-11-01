// aqui.
let inputBusca = document.getElementById("busca");
let resultados = document.getElementById("results");

inputBusca.addEventListener("keydown", function(event){
    if (event.key == "Enter") {
        event.preventDefault();
        resultados.children[0].innerHTML = `<img src="loading.gif" id="loading">`
        get_data(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.value}&type=video&key=${gkey}`)
        .then(function(data) {
            obj = JSON.parse(data)
            for (let i = 0; i < obj.items.length; i++) {
                const item = document.createElement("a");
                item.setAttribute("href", `https://www.youtube.com/watch?v=${obj.items[i].id.videoId}`)
                item.innerHTML = `
                <img src="${obj.items[i].snippet.thumbnails.default.url}">
                <div>
                <h1>${obj.items[i].snippet.title}</h1>
                <p>${obj.items[i].snippet.description}</p>
                </div>`
                resultados.appendChild(item);
            }
            resultados.children[0].innerHTML = `Faça sua busca...`
            resultados.children[0].style.display = "none";
          })
        .catch(function(error) {
            resultados.children[0].innerHTML = `Deu ruim`            
        })       
    }else {
        resultados.innerHTML = `<p>Nenhum resultado encontrado</p>` 
    }
})


// get_data(`https://viacep.com.br/ws/${cep}/json/`)
//         .then(function(data) {
//             data = JSON.parse(data)
//             if (data.erro) {
//                 cep_input.classList.add("error")
//                 cep_error.style.display = "block"

//                 logradouro_input.value = ""
//                 complemento_input.value = ""
//                 bairro_input.value = ""
//                 localidade_input.value = ""
//                 uf_input.value = ""
//             } else {
//                 logradouro_input.value = data.logradouro
//                 complemento_input.value = data.complemento
//                 bairro_input.value = data.bairro
//                 localidade_input.value = data.localidade
//                 uf_input.value = data.uf
//             }
//         })
//         .catch(function(error) {
//             cep_input.classList.add("error")
//             cep_error.style.display = "block"

//             logradouro_input.value = ""
//             complemento_input.value = ""
//             bairro_input.value = ""
//             localidade_input.value = ""
//             uf_input.value = ""
//         })

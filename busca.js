const url = 'https://www.youtube.com/embed?listType=search&list='
let formSearch = document.getElementById('formSearch')
function buscaYouTube(){
    let busca = document.getElementById('inputSearch').value
    let iframe = document.getElementById('iframeId')
    if(busca === '') {
        iframe.style.display = 'none'
    }else{
        iframe.style.display = 'block'
    }
    iframe.src = url+busca
}
formSearch.addEventListener('input', buscaYouTube)

function buscaYouTube(){
    var busca = document.getElementById('inputSearch').value;
    if(busca === '') {
        document.getElementById('iframeId').style.display = 'none';
        document.getElementById('containerFooter').style.display = 'none';
    }else{
        document.getElementById('iframeId').style.display = 'inline-block';
        document.getElementById('containerFooter').style.display = 'block';
    }
    var url = 'https://www.youtube.com/embed?listType=search&list=';
    document.getElementById('iframeId').src = url+busca;
}
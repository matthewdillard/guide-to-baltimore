var iframe = document.getElementById('iframe-map');
iframe.contentDocument.body.addEventListener('click', Handler);

function Handler() {
    alert('works');
}
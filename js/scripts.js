function someAlert() {
    alert('hey');
}

document.getElementsByTagName('TABLE')[0].addEventListener('click', function() {
   someAlert(); 
});
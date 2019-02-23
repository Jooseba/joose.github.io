// JavaScript source code
function init() {
	var xhr= new XMLHttpRequest();
	xhr.open('GET', 'nav.html', true);
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return; // or whatever error handling you want
		document.getElementById('header').innerHTML= this.responseText;
	};
	xhr.send();

	var xhr= new XMLHttpRequest();
	xhr.open('GET', 'footer.html', true);
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return; // or whatever error handling you want
		document.getElementById('footer').innerHTML= this.responseText;
	};
	xhr.send();
}
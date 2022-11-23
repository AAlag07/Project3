var modal = document.getElementById("myModal");

var img = document.getElementById("two");
var modalImg = document.getElementById("img01");
var captionText= document.getElementById("caption");
img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
		modal.style.display = "none";
}

function initMap () {
		const manila = { lat: 14.559, lng: 120.984 };
		const map = new google.maps.Map(document.getElementById("map"), {
				zoom:5,
				center: manila,
		});
		const marker = new google.maps.Marker({
				position: manila,
				map: map,
		});
}

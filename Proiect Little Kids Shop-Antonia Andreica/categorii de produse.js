function lighttheme() {
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
}

function darktheme() {
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
}

function mesaj ()
	{alert ("Ai gasit ceea ce cautai?"); }
	
function adaugat ()
	{alert ("Produsul s-a adaugat in cos!"); }
	
function checkSale(popupId) {
    let allPopups = document.querySelectorAll('.popuptext');
    for (let popup of allPopups) {
        if (popup.id !== popupId) {
            popup.style.display = 'none';
        }
    }
    
    let popup = document.getElementById(popupId);
    if (popup.style.display === 'none' || !popup.style.display) {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.card') || event.target.tagName === 'BUTTON') {
        let allPopups = document.querySelectorAll('.popuptext');
        for (let popup of allPopups) {
            popup.style.display = 'none';
        }
    }
});


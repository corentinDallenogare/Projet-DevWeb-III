/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */


let utilisateurConnecte = GetCookie("connexion");
let xhr_admin = new XMLHttpRequest();
let admin ="";
xhr_admin.open("GET", "http://localhost/admin?adressemail="+GetCookie("connexion")+"&motdepasse="+GetCookie("motdepasse"));
xhr_admin.setRequestHeader("content-type", "application/json");
xhr_admin.onload = function () {


	if (xhr_admin.responseText=== "1"){

		renderAdmin();
	}
	else {
		renderSiConnecte();
	}

};
xhr_admin.send();

function changeHead() { // animation visuelles au niveau de la photo de couverture et de  la barre d'état



	if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {  //lorsqu'on descend de 180 px
		document.getElementById("imgCouv").style.transform = "scale(1.20)";  //augmenter l'échelle

	}
	else {                                                                                 //quand on remonte
		document.getElementById("imgCouv").style.transform = "scale(1)";
	}

}

function deconnexion(){
	DeleteCookie ("connexion",null,null);
	DeleteCookie ("motdepasse",null,null);
}

function zoomeIn(n) {    //zoom lors du passage sur les images
	document.getElementsByClassName("zoom")[n].style.transform= "scale(0.90)";
	document.getElementsByClassName("zoom")[n].style.transition= "all .3s";
}
function zoomOut(n) {  // dézoom lorsque la souris sort de la photo
	document.getElementsByClassName("zoom")[n].style.transform= "scale(1)";
	document.getElementsByClassName("zoom")[n].style.transition= "all .3s";
}

function renderSiPasConnecte() {
	const navbar =<div id="head">

		<nav className="navbar navbar-expand-lg  navbar-light bg-light">
			<a className="navbar-brand" href="/">
				<img  id="logoEnTete" src="img/falcohm_logo.png" alt="logo de la page" width="75px" height="75px"></img>
				FALC'OHM SYSTEM
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarnav" aria-controls="navbarnav" aria-expanded="false"
					aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarnav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="/">A Propos<span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="contact">Contacts</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="materiel">Matériels</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="authentification">Authentification</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="devis">Devis</a>
					</li>
				</ul>

			</div>
		</nav>



	</div>;
	ReactDOM.render(navbar,document.querySelector("#container"));
}

function renderSiConnecte() {
	const navbar =<div id="head">

		<nav className="navbar navbar-expand-lg  navbar-light bg-light">
			<a className="navbar-brand" href="/">
				<img  id="logoEnTete" src="img/falcohm_logo.png" alt="logo de la page" width="75px" height="75px"></img>
				FALC'OHM SYSTEM
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarnav" aria-controls="navbarnav" aria-expanded="false"
					aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarnav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="/">A Propos<span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="contact">Contacts</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="materiel">Matériels</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="devis">Devis</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="authentification" onClick={deconnexion}>Déconnexion</a>
					</li>
					<li className="nav-item">
						<a href="profil" className="nav-link"><img id="logoProfil" src="img/profil.png" alt="icone de profil" width="25px" height="25px"></img></a>
					</li>
				</ul>

			</div>
		</nav>



	</div>;
	ReactDOM.render(navbar,document.querySelector("#container"));
}


function renderAdmin() {
	const navbar =<div id="head">

		<nav className="navbar navbar-expand-lg  navbar-light bg-light">
			<a className="navbar-brand" href="/">
				<img  id="logoEnTete" src="img/falcohm_logo.png" alt="logo de la page" width="75px" height="75px"></img>
				FALC'OHM SYSTEM
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarnav" aria-controls="navbarnav" aria-expanded="false"
					aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarnav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="/">A Propos<span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="contact">Contact</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="materiel">Matériels</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="devis">Devis</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="authentification" onClick={deconnexion}>Déconnexion</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="administration" >Administration</a>
					</li>
				</ul>

			</div>
		</nav>



	</div>;
	ReactDOM.render(navbar,document.querySelector("#container"));
}

if (utilisateurConnecte == null) {

	renderSiPasConnecte();
}
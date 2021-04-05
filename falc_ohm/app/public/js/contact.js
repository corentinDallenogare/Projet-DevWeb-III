let form = document.getElementById("formContact");
let identite = document.getElementById("nom");
let mail = document.getElementById("email");
let commentaire = document.getElementById("commentaire");

form.addEventListener("submit", (param)=>{
	param.preventDefault();
	
	let data = {
		identite: identite.value,
		mail: mail.value,
		commentaire: commentaire.value,
	};

	console.log(data);

	let xhr = new XMLHttpRequest();

	xhr.open("POST", "/mail");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.onload = function () {
		console.log(xhr.responseText);
		if(xhr.responseText == "success") {
			alert("Mail envoyé avec success");

			identite.value = "";
			mail.value = "";
			commentaire.value = "";
		}
		else {
			alert("Une donnée est mal encodée");
		}
	};
	xhr.send(JSON.stringify(data));
});

// eslint-disable-next-line no-undef
class buttonSubmit extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
	}


	render() {
		if (this.state.clicked) {
			// eslint-disable-next-line react/react-in-jsx-scope
			return <div><button type="submit" className="btn btn-light" onClick={() => this.setState({clicked: true})}>
                Envoyer
			</button>
                Message bien envoyé
			</div>;
		}

		// eslint-disable-next-line react/react-in-jsx-scope
		return <button type="submit" className="btn btn-light" onClick={() => this.setState({clicked: true})}>
            Envoyer
		</button>;
	}
}

const domContainer = document.querySelector("#buttonSubmit");
// eslint-disable-next-line no-undef
ReactDOM.render(React.createElement(buttonSubmit), domContainer);

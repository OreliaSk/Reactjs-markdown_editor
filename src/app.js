/*import {sampleText} from './sampleText';*/



class MarkdownApp extends React.Component {
	
	constructor(props) {
		const sampleText = '# Titre\n## Sous-Titre \n### Titre plus profond\n \nLes paragraphes sont séparés\npar une ligne vide.\n\nLaisser deux espaces à la fin d\'une ligne pour  \naller à la ligne.\n\nAttributs *italique*, **gras**, \n`monospace`, ~~rayé~~.\n\nListe:\n\n  * HTML\n  * CSS\n  * Reactjs\n\nListe numérotée:\n\n  1. Reactjs\n  2. HTML\n  3. CSS\n\n *[Orélia Sokambi](https://github.com/OreliaSk)* \n\n Lien automatique : https://www.linkedin.com/in/orelia-sokambi/ \n\n```\n console.log("Testez vous même cet éditeur en markdown !"); \n``` ';
		super(props);
		this.state = {
			text : sampleText
		}
	}

	// Functions
	editText(e){
		const text = e.target.value;
		console.log(text);
	}
	

	render() {

		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<textarea 
							onChange={this.editText}
							value={this.state.text} 
							rows="35" 
							className="form-control"
						>
						</textarea>
					</div>
					<div className="col-md-6">
						{this.state.text}
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<MarkdownApp />, document.getElementById('app'))
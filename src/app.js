/*import {sampleText} from './sampleText';*/
const sampleText = 
'# Titre\n## Sous-Titre \n### Titre plus profond\n \nLes paragraphes sont séparés\npar une ligne vide.\n\nLaisser deux espaces à la fin d\'une ligne pour  \naller à la ligne.\n\nAttributs *italique*, **gras**, \n`monospace`, ~~rayé~~.\n\nListe:\n\n  * HTML\n  * CSS\n  * Reactjs\n\nListe numérotée:\n\n  1. Reactjs\n  2. HTML\n  3. CSS\n\n *[Orélia Sokambi](https://github.com/OreliaSk)* \n\n Lien automatique : https://www.linkedin.com/in/orelia-sokambi/ \n\n```\n console.log("Testez vous même cet éditeur en markdown !"); \n``` ';



class MarkdownApp extends React.Component {
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<textarea rows="35" value={sampleText} className="form-control"></textarea>
					</div>
					<div className="col-md-6">
						{sampleText}
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<MarkdownApp />, document.getElementById('app'))
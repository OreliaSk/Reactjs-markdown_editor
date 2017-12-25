"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*import {sampleText} from './sampleText';*/

var MarkdownApp = function (_React$Component) {
	_inherits(MarkdownApp, _React$Component);

	function MarkdownApp(props) {
		_classCallCheck(this, MarkdownApp);

		var sampleText = '# Titre\n## Sous-Titre \n### Titre plus profond\n \nLes paragraphes sont séparés\npar une ligne vide.\n\nLaisser deux espaces à la fin d\'une ligne pour  \naller à la ligne.\n\nAttributs *italique*, **gras**, \n`monospace`, ~~rayé~~.\n\nListe:\n\n  * HTML\n  * CSS\n  * Reactjs\n\nListe numérotée:\n\n  1. Reactjs\n  2. HTML\n  3. CSS\n\n *[Orélia Sokambi](https://github.com/OreliaSk)* \n\n Lien automatique : https://www.linkedin.com/in/orelia-sokambi/ \n\n```\n console.log("Testez vous même cet éditeur en markdown !"); \n``` ';

		var _this = _possibleConstructorReturn(this, (MarkdownApp.__proto__ || Object.getPrototypeOf(MarkdownApp)).call(this, props));

		_this.state = {
			text: sampleText
		};
		return _this;
	}

	// Functions


	_createClass(MarkdownApp, [{
		key: "editText",
		value: function editText(e) {
			var text = e.target.value;
			console.log(text);
		}
	}, {
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-6" },
						React.createElement("textarea", {
							onChange: this.editText,
							value: this.state.text,
							rows: "35",
							className: "form-control"
						})
					),
					React.createElement(
						"div",
						{ className: "col-md-6" },
						this.state.text
					)
				)
			);
		}
	}]);

	return MarkdownApp;
}(React.Component);

ReactDOM.render(React.createElement(MarkdownApp, null), document.getElementById('app'));

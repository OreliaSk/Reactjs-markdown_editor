import React from 'react';
import {render} from 'react-dom';
import './style/style.css';
import {sampleText} from './sampleText';
import marked from 'marked';


class MarkdownApp extends React.Component {
	
	state = {
		text : sampleText
	}

	// Functions components
	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('text', nextState.text);
	}

	componentWillMount() {
		const localStorageText = localStorage.getItem('text');
		if (localStorageText) {
			this.setState({ text : localStorageText});
		}
	}

	// Functions
	editText = (e) => {
		const text = e.target.value;
		this.setState({text});
	}

	renderText = (text) =>  {
		const renderText = marked(text, {sanitize : true});
		return { __html : renderText }
	}

	render() {

		return(
			<div>
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand">Markdown editor</a>
				    </div>
				  </div>
				</nav>
				<div className="main container">
					<div className="row">
						<div className="col-md-4 col-md-offset-2">
							<textarea 
								onChange={this.editText}
								value={this.state.text} 
								rows="29" 
								className="form-control"
							>
							</textarea>
						</div>
						<div className=" renderText col-md-4">
							<div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

render(
	<MarkdownApp />, 
	document.getElementById('root')
);



import React from 'react';
import {render} from 'react-dom';
//import './style/style.css';
import {sampleText} from './sampleText';
import marked from 'marked';


class MarkdownApp extends React.Component {
	
	state = {
		text : sampleText
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
						<div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
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



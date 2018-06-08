import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index'

class PostsNew extends Component {
	renderField(field) {
	//gets us meta from field, and touched and error from meta
		const { meta: { touched, error }, label } = field;
	const className = `form-group ${touched && error ? 'has-danger' : ''}`

		return (
			<div className={className} >
				<label> {label} </label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {	
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}


	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					name="title"
					component={this.renderField}
					label="Title"
				/>
				<Field
					name="categories"
					component={this.renderField}
					label="Categories"
				/>
				<Field
					name="content"
					component={this.renderField}
					label="Post Content"
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title || values.title.length < 3) {
		errors.title = "Enter a title that is at least 3 characters";
	}

	if (!values.content) {
		errors.content = "Enter content";
	}

	if (!values.categories) {
		errors.categories = "Enter a category";
	}

	return errors;
}

export default
	reduxForm({
		validate,
		form: 'PostsNewForm'
	})
		(connect(
			null,
			{ createPost }
		)(PostsNew));
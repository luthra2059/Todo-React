import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    render(){
    return (
        <form onSubmit={this.onSubmit} style={{display:'flex'}}>
            <input 
            onChange={this.onChange} 
            type='text' 
            name='title' value={this.state.title} style={{flex:'10', padding:'5px'}} placeholder='Add Todo...'/>
            <input type='submit' value='Submit' className="btn" style={{flex:'1'}}/>
        </form>
    )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}
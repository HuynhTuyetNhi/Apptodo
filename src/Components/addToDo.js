import React, { Component } from 'react'

export default class addToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTask: ""
        }
    }
    handleChange = (e) => {
        console.log(e.target);
        this.setState({
            nameTask: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.nameTask);
        this.props.addNote(this.state.nameTask);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-inline" >
                    <div className="addToDo">
                        <input value={this.state.nameTask} onChange={this.handleChange} type="text" className="form-control" id="idTask" />
                    </div>
                    <button type="submit" className="btn btn-light" >
                        <i className="fas fa-plus iconAdd"></i>
                        Add Task
                </button>

                </form>
            </div>
        )
    }
}

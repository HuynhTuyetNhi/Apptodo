import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../Actions/toDo";
import ItemToDo from '../Components/itemToDo';
import AddToDo from './addToDo';
import 'firebase/database';


class listToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: "",
            Task: [],
            idTask: "",
            haveData: false
        }

    }
    componentWillMount() {
        const newNote = this.state.note;
        const TaskOld = this.state.Task;
        this.props.listTask();
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            haveData: true,
            Task: nextProps.Task
        })
    }
    remove = (id) => {
        console.log(id);
        this.props.completeToDo(id);
    }
    renderItem = () => {
        let result;
        let array = [];
        if (this.state.haveData === true) {
            console.log(this.state.Task);
            result = this.state.Task.map((notes, index) => {
                console.log("update giao dien", notes);
                Object.keys(notes).forEach(function (item) {
                    array.push(notes[item]);
                })
            })
            result = array.map((item, index) => {
                return <ItemToDo remove={this.remove} info={item} key={index} />
            })
        }
        else {
            result = <div>Không có dữ liệu</div>;
        }
        return result;
    }

    addNote = (notes) => {
        console.log(notes);
        this.props.insertTask({ idTask: notes.length + 1, nameTask: notes });
        this.setState({
            Task: notes
        })
    }
    render() {
        return (
            <div>
                <div className="mainContent">
                    <h1 className="txtTittle">ToDo App</h1>
                    <AddToDo addNote={this.addNote} />
                </div>
                <div className="container itemToDo ">
                    <table id="table_body" className="table listToDo">
                        <div className="body_content">
                            <tbody>

                                {this.renderItem()}

                            </tbody>
                        </div>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        Task: state.Task
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        insertTask: (tittle) => dispatch(actions.insertToDo(tittle)),
        listTask: () => dispatch(actions.listTask()),
        completeToDo: (id) => dispatch(actions.completeToDo(id))


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(listToDo)
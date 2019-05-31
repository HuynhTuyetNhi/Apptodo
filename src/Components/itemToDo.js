import React, { Component } from 'react'

class itemToDo extends Component {
    constructor(props) {
        super(props);
        console.log("asd", props.info);

    }

    handleDelete = (id) => {
        this.props.remove(id);
        console.log(id);
        console.log(this.props.info);

    }
    render() {

        return (
            <div className="item_task">
                <tr>
                    <td>
                        {this.props.info.nameTask}
                    </td>
                    <div className="group">
                        <div className="content">
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                        <div className="content bgBlue">
                            <i className="icon fas fa-check"></i>
                        </div>
                        <div className="content bgred">

                            <i onClick={() => this.handleDelete(this.props.info.idTask)} className="icon fas fa-times"></i>


                        </div>
                    </div>
                </tr>
            </div>


        )
    }
}

export default itemToDo

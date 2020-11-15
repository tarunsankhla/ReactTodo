import React, { Component } from 'react';
import axios from 'axios';

export default class CreaateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        const newTODO= {
            todo_description : this.state.todo_description,
            todo_responsible : this.state.todo_responsible,
            todo_priority :  this.state.todo_priority,
            todo_completed : this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add',newTODO).then(res=> console.log(res.data));
        
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.todo_priority==='High'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
    // constructor(props){
    //     super(props);
    //     this.state={
    //         todo_description: '',
    //         todo_responsible: '',
    //         todo_priority: '',
    //         todo_completed: false
    //     }
    //     this.onChangeTodoDescription=this.onChangeTodoDescription.bind(this);
    //     this.onChangeTodoPriority=this.onChangeTodoPriority.bind(this);
    //     this.onChangeTodoResponsible=this.onChangeTodoResponsible.bind(this);
    //     this.onsubmit=this.onsubmit.bind(this);

    // }
    // render() {
    //     return (
    //         <div  style={{marginTop :10}}>
    //             <h3>Create Form</h3>
    //             <form onsubmit={this.onsubmit}>
    //                 <div className="form-group">
    //                     <label>Description: </label>
    //                     <input type='text' className='form-control' onChange={this.onChangeTodoDescription}
    //                     value={this.state.todo_description}/>
    //                 </div>
    //                 <div className="form-group">
    //                     <label>Responsible: </label>
    //                     <input type="text"className='form-control' onChange={this.onChangeTodoResponsible}
    //                     value={this.state.todo_responsible}/>
    //                 </div>
    //                 <div className="form-group">
    //                     <div className='form-check form-check-inline'>
    //                         <input className='form-check-input'
    //                                 type='radio'
    //                                 name='priorityOptions'
    //                                 id='priorityLow'
    //                                 value='Low'
    //                                 checked={this.state.todo_priority==='LOW'}
    //                                 onChange={this.onChangeTodoPriority}
    //                         />
    //                         <label className="form-check-label">Low</label>
    //                     </div>
    //                     <div className='form-check form-check-inline'>
    //                         <input className='form-check-input'
    //                                 type='radio'
    //                                 name='priorityOptions'
    //                                 id='priorityMedium'
    //                                 value='Medium'
    //                                 checked={this.state.todo_priority==='Medium'}
    //                                 onChange={this.onChangeTodoPriority}
    //                         />
    //                         <label className="form-check-label">Medium</label>
    //                     </div>
    //                     <div className='form-check form-check-inline'>
    //                         <input className='form-check-input'
    //                                 type='radio'
    //                                 name='priorityOptions'
    //                                 id='priorityHigh'
    //                                 value='High'
    //                                 checked={this.state.todo_priority==='High'}
    //                                 onChange={this.onChangeTodoPriority}
    //                         />
    //                         <label className="form-check-label">High</label>
    //                     </div>
    //                 </div> 
    //                 <div className='form-group'>
    //                     <input type='submit' value='CreateTodo' className='btn btn-primary'/>
    //                 </div>   
    //             </form>                
    //         </div>
    //     )
    // }
    // onChangeTodoDescription(e) {
    //     this.setState({
    //         todo_description: e.target.value
    //     });
    // }

    // onChangeTodoResponsible(e) {
    //     this.setState({
    //         todo_responsible: e.target.value
    //     });
    // }
    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }
    // onsubmit(e){
    //     e.preventDefault();

    //     console.log(`Form submitted`);
    //     console.log(`form description: ${this.state.todo_description}`);
    //     console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    //     console.log(`Todo Priority: ${this.state.todo_priority}`);
    //     this.setState={
    //         todo_description:'',
    //         todo_priority:'',
    //         todo_responsible:'',
    //         todo_completed:false
    //     }
    
    // }
    // <h3 align="center">Update Todo</h3>
//     <form onSubmit={this.onSubmit}>
//     <div className="form-group"> 
//         <label>Description: </label>
//         <input  type="text"
//                 className="form-control"
//                 value={this.state.todo_description}
//                 onChange={this.onChangeTodoDescription}
//                 />
//     </div>
//     <div className="form-group">
//         <label>Responsible: </label>
//         <input 
//                 type="text" 
//                 className="form-control"
//                 value={this.state.todo_responsible}
//                 onChange={this.onChangeTodoResponsible}
//                 />
//     </div>
//     <div className="form-group">
//         <div className="form-check form-check-inline">
//             <input  className="form-check-input" 
//                     type="radio" 
//                     name="priorityOptions" 
//                     id="priorityLow" 
//                     value="Low"
//                     checked={this.state.todo_priority==='Low'} 
//                     onChange={this.onChangeTodoPriority}
//                     />
//             <label className="form-check-label">Low</label>
//         </div>
//         <div className="form-check form-check-inline">
//             <input  className="form-check-input" 
//                     type="radio" 
//                     name="priorityOptions" 
//                     id="priorityMedium" 
//                     value="Medium" 
//                     checked={this.state.todo_priority==='Medium'} 
//                     onChange={this.onChangeTodoPriority}
//                     />
//             <label className="form-check-label">Medium</label>
//         </div>
//         <div className="form-check form-check-inline">
//             <input  className="form-check-input" 
//                     type="radio" 
//                     name="priorityOptions" 
//                     id="priorityHigh" 
//                     value="High" 
//                     checked={this.state.todo_priority==='High'} 
//                     onChange={this.onChangeTodoPriority}
//                     />
//             <label className="form-check-label">High</label>
//         </div>
//     </div>
//     <div className="form-check">
//         <input  className="form-check-input"
//                 id="completedCheckbox"
//                 type="checkbox"
//                 name="completedCheckbox"
//                 onChange={this.onChangeTodoCompleted}
//                 checked={this.state.todo_completed}
//                 value={this.state.todo_completed}
//                 />
//         <label className="form-check-label" htmlFor="completedCheckbox">
//             Completed
//         </label>                        
//     </div>

//     <br />

//     <div className="form-group">
//         <input type="submit" value="Update Todo" className="btn btn-primary" />
//     </div>
// </form>
// </div>
}
import React, { Component } from 'react';
import { Row, Col, UncontrolledTooltip, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import PageTitle from '../../../../components/PageTitle';
import HyperDatepicker from '../../../../components/Datepicker';
import defaultAvatar from '../../../../assets/images/users/avatar-1.jpg';

import TaskItem from './Task';
import { tasks } from './Data';

// kanban
class Kanban extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTasks: tasks.filter(t => t.status === 'Pending'),
            inprogressTasks: tasks.filter(t => t.status === 'Inprogress'),
            reviewTasks: tasks.filter(t => t.status === 'Review'),
            doneTasks: tasks.filter(t => t.status === 'Done'),
            totalTasks: tasks.length,
            newTaskModal: false,
            newTask: null,
        };

        this.getList = this.getList.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.toggleNewTaskModal = this.toggleNewTaskModal.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNewTask = this.handleNewTask.bind(this);
        this.newTask = this.newTask.bind(this);
    }

    /**
     * Toggles the new task modal
     */
    toggleNewTaskModal = () => {
        this.setState(prevState => ({
            newTaskModal: !prevState.newTaskModal,
        }));
    };

    /**
     * Creates new empty task with given status
     */
    newTask = (status, queue) => {
        this.setState({
            newTask: { dueDate: new Date(), userAvatar: defaultAvatar, status: status, queue: queue },
            newTaskModal: true,
        });
    };

    /**
     * When date changes
     * @param {} date
     */
    handleDateChange(date) {
        if (this.state.newTask) {
            this.setState({
                newTask: { ...this.state.newTask, dueDate: date },
            });
        }
    }

    // a little function to help us with reordering the result
    reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    /**
     * Moves an item from one list to another list.
     */
    move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);
        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    /**
     * Gets the list
     */
    getList = id => this.state[id];

    /**
     * On drag end
     */
    onDragEnd = result => {
        const { source, destination } = result;
        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = this.reorder(this.getList(source.droppableId), source.index, destination.index);

            let state = { ...this.state };
            state[source.droppableId] = items;
            this.setState(state);
        } else {
            const result = this.move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            const state = { ...this.state, ...result };
            this.setState(state);
        }
    };

    /**
     * Handles the new task form submission
     */
    handleNewTask(event, values) {
        const newTask = {
            ...this.state.newTask,
            ...values,
            id: this.state.totalTasks + 1,
            dueDate: this.state.newTask.dueDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
            totalComments: 0,
        };

        var state = { ...this.state };
        var tasks = state[newTask.queue];
        tasks.push(newTask);
        state[newTask.queue] = tasks;
        state['newTask'] = null;
        state['newTaskModal'] = false;
        state['totalTasks'] = state.totalTasks + 1;
        this.setState(state);
    }

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'Apps', path: '/apps/kanban' },
                        { label: 'Kanban', path: '/apps/kanban', active: true },
                    ]}
                    title={'Kanban'}
                />

                <Row>
                    <Col>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <div className="board">
                                {/* todo */}
                                <Droppable droppableId="todoTasks">
                                    {(provided, snapshot) => (
                                        <div className="tasks" ref={provided.innerRef}>
                                            <button
                                                className="btn btn-link p-0 text-secondary float-right px-0 py-2"
                                                id="addNewTodo"
                                                onClick={() => this.newTask('Pending', 'todoTasks')}>
                                                <i className="mdi mdi-plus"></i>
                                            </button>
                                            <UncontrolledTooltip placement="bottom" target="addNewTodo">
                                                Add New Todo Task
                                            </UncontrolledTooltip>

                                            <h5 className="mt-0 task-header">TODO ({this.state.todoTasks.length})</h5>

                                            {this.state.todoTasks.length === 0 && (
                                                <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                            )}

                                            {this.state.todoTasks.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>
                                                            <TaskItem task={item} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>

                                {/* in progress */}

                                <Droppable droppableId="inprogressTasks">
                                    {(provided, snapshot) => (
                                        <div ref={provided.innerRef} className="tasks">
                                            <button
                                                className="btn btn-link p-0 text-secondary float-right px-0 py-2"
                                                id="addInprogressTask"
                                                onClick={() => this.newTask('Inprogress', 'inprogressTasks')}>
                                                <i className="mdi mdi-plus"></i>
                                            </button>
                                            <UncontrolledTooltip placement="bottom" target="addInprogressTask">
                                                Add New In-progress Task
                                            </UncontrolledTooltip>
                                            <h5 className="mt-0 task-header text-uppercase">
                                                In Progress ({this.state.inprogressTasks.length})
                                            </h5>
                                            {this.state.inprogressTasks.length === 0 && (
                                                <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                            )}

                                            {this.state.inprogressTasks.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>
                                                            <TaskItem task={item} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>

                                {/* review */}

                                <Droppable droppableId="reviewTasks">
                                    {(provided, snapshot) => (
                                        <div ref={provided.innerRef} className="tasks">
                                            <button
                                                className="btn btn-link p-0 text-secondary float-right px-0 py-2"
                                                id="addReviewTask"
                                                onClick={() => this.newTask('Review', 'reviewTasks')}>
                                                <i className="mdi mdi-plus"></i>
                                            </button>
                                            <UncontrolledTooltip placement="bottom" target="addReviewTask">
                                                Add New Review Task
                                            </UncontrolledTooltip>
                                            <h5 className="mt-0 task-header text-uppercase">
                                                Review ({this.state.reviewTasks.length})
                                            </h5>
                                            {this.state.reviewTasks.length === 0 && (
                                                <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                            )}

                                            {this.state.reviewTasks.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>
                                                            <TaskItem task={item} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>

                                {/* done */}

                                <Droppable droppableId="doneTasks">
                                    {(provided, snapshot) => (
                                        <div ref={provided.innerRef} className="tasks">
                                            <button
                                                className="btn btn-link p-0 text-secondary float-right px-0 py-2"
                                                id="addNewDone"
                                                onClick={() => this.newTask('Done', 'doneTasks')}>
                                                <i className="mdi mdi-plus"></i>
                                            </button>
                                            <UncontrolledTooltip placement="bottom" target="addNewDone">
                                                Add Completed Task
                                            </UncontrolledTooltip>

                                            <h5 className="mt-0 task-header text-uppercase">
                                                Done ({this.state.doneTasks.length})
                                            </h5>
                                            {this.state.doneTasks.length === 0 && (
                                                <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                            )}

                                            {this.state.doneTasks.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>
                                                            <TaskItem task={item} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </DragDropContext>
                    </Col>
                </Row>

                {/* new task model */}
                {this.state.newTask && (
                    <Modal isOpen={this.state.newTaskModal} toggle={this.toggleNewTaskModal} size="lg">
                        <ModalHeader toggle={this.toggleNewTaskModal}>Create New Task</ModalHeader>
                        <ModalBody>
                            <AvForm className="p-2" onValidSubmit={this.handleNewTask}>
                                <AvField
                                    name="project"
                                    label="Project"
                                    type="select"
                                    required
                                    className="custom-select">
                                    <option>Select</option>
                                    <option>Hyper</option>
                                    <option>CRM</option>
                                    <option>iOS App</option>
                                </AvField>

                                <Row>
                                    <Col md={8}>
                                        <AvField name="title" label="Title" type="text" required />
                                    </Col>
                                    <Col md={4}>
                                        <AvField
                                            name="priority"
                                            label="Priority"
                                            type="select"
                                            required
                                            className="custom-select">
                                            <option>Select</option>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </AvField>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <AvField
                                            name="user"
                                            label="Assign To"
                                            type="select"
                                            required
                                            className="custom-select">
                                            <option>Select</option>
                                            <option>Coderthemes</option>
                                            <option>Robert Carlile</option>
                                            <option>Louis Allen</option>
                                            <option>Sean White</option>
                                            <option>Riley Steele</option>
                                            <option>Zak Turnbull</option>
                                        </AvField>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label>Due Date</label> <br />
                                            <HyperDatepicker
                                                hideAddon={true}
                                                dateFormat="yyyy-MM-dd"
                                                selected={this.state.newTask.dueDate}
                                                onChange={this.handleDateChange}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="text-right">
                                    <Button
                                        color="light"
                                        type="button"
                                        className="mr-1"
                                        onClick={this.toggleNewTaskModal}>
                                        Cancel
                                    </Button>
                                    <Button color="primary" type="submit">
                                        Create
                                    </Button>
                                </div>
                            </AvForm>
                        </ModalBody>
                    </Modal>
                )}
            </React.Fragment>
        );
    }
}

export default Kanban;

import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';

import PageTitle from '../../components/PageTitle';

const Item = ({ color }) => {
    return (
        <Card className={classNames('mb-0', 'mt-3', 'text-white', 'bg-' + color)}>
            <CardBody>
                <blockquote className="card-bodyquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </CardBody>
        </Card>
    );
};

/**
 * Reorders the list
 * @param {*} list
 * @param {*} startIndex
 * @param {*} endIndex
 */
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

// DragDrop
class DragDrop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    /**
     * On drag ends
     * @param {3} result
     */
    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(this.state.items, result.source.index, result.destination.index);

        this.setState({
            items,
        });
    }

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'UI', path: '/ui/dragdrop' },
                        { label: 'Extended UI', path: '/ui/dragdrop' },
                        { label: 'Drag and Drop', path: '/ui/dragdrop', active: true },
                    ]}
                    title={'Drag and Drop'}
                />

                <Row>
                    <Col>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <Droppable droppableId="droppable" direction="horizontal">
                                                {(provided, snapshot) => (
                                                    <div ref={provided.innerRef}>
                                                        <h4 className="header-title">Simple Drag and Drop Example</h4>
                                                        <p className="text-muted font-14">
                                                            Drag and drop cards in a list
                                                        </p>
                                                        <div className="d-flex">
                                                            {['primary', 'success', 'info', 'danger'].map(
                                                                (color, index) => (
                                                                    <Draggable
                                                                        key={color}
                                                                        draggableId={color}
                                                                        index={index}>
                                                                        {(provided, snapshot) => (
                                                                            <div
                                                                                className="mr-2"
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}>
                                                                                <Item color={color} />
                                                                            </div>
                                                                        )}
                                                                    </Draggable>
                                                                )
                                                            )}
                                                            {provided.placeholder}
                                                        </div>
                                                    </div>
                                                )}
                                            </Droppable>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </DragDropContext>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default DragDrop;

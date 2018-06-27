import React, { PureComponent } from 'react';
import {
  Button,
  DialogContainer,
  TextField,
  SelectionControl,
  SelectionControlGroup,
} from 'react-md';

const controls = [{
  label: 'Comment',
  value: 'comment',
}, {
  label: 'Cancel Button',
  value: 'dialog-cancel',
}, {
  label: 'Ok Button',
  value: 'dialog-ok',
}];

export default class DoctorReviewsDialog extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        visible: false,
        focusOnMount: true,
        containFocus: true,
        initialFocus: undefined
    };
    
    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false });
    };

    handleTargetChange = (value) => {
        this.setState({ initialFocus: value ? `#${value}` : undefined });
    };

    handleMountChange = (checked) => {
        this.setState({ focusOnMount: checked });
    };

    handleFocusChange = (checked) => {
        this.setState({ containFocus: checked });
    };



    handleChange(event) {
        this.setState({value: event});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        this.props.sendToServer({
            rating: this.state.value,
            comment: this.state.value
        });
        event.preventDefault();
    } 



    render() {
        const { visible, initialFocus, focusOnMount, containFocus } = this.state;
        const actions = [{
            id: 'dialog-cancel',
            secondary: true,
            children: 'Cancel',
            onClick: this.hide
        }, {
            id: 'dialog-ok',
            primary: true,
            children: 'Ok',
            onClick: this.handleSubmit
        }];

        return (
            <div>
                <Button flat secondary iconBefore={false} iconChildren="rate_review" onClick={this.show}>Add Review</Button>
                <DialogContainer
                    id="focus-control-dialog"
                    title="Add Review"
                    visible={visible}
                    actions={actions}
                    onHide={this.hide}
                    initialFocus={initialFocus}
                    focusOnMount={focusOnMount}
                    containFocus={containFocus}
                    contentClassName="md-grid"
                >
                    <form onSubmit={this.handleSubmit}>

                        <TextField id="field-1" label="Field 1" placeholder="Lorem ipsum" className="md-cell md-cell--12" onChange={e => {
                                    this.setState((prevState) => ({ reviewObject : { ...prevState.reviewObject, field1: e.target.value } }))
                                }} />
                        <TextField id="comment" label="Comment" placeholder="Add your comment here" onChange={this.handleChange} rows={2} className="md-cell md-cell--12" />
                    </form>
                </DialogContainer>
            </div>
        );
    }
}
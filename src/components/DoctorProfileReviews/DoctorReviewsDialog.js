import React, { PureComponent } from 'react';
import StarRatingComponent from 'react-star-rating-component';
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

        this.state = {
            rating: 1,
            comment: ""
        };
      
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
        this.setState({comment: event});
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    
    handleSubmit(event) {
        this.props.sendReviewToServer({
            doctor: this.props.doctor,
            rating: this.state.rating,
            comment: this.state.comment
        });
        this.hide();
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
        const { rating } = this.state;

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
                    containFocus={containFocus}>
                    <form onSubmit={this.handleSubmit}>
                        <StarRatingComponent name="rating" starCount={5} value={rating} onStarClick={this.onStarClick.bind(this)}/>
                        <TextField id="comment" label="Comment" placeholder="Add your comment here" onChange={this.handleChange} rows={4}/>
                    </form>
                </DialogContainer>
            </div>
        );
    }
}
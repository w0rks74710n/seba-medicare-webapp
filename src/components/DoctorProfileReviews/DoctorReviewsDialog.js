import React, { PureComponent } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from "styled-components";
import {
  Button,
  DialogContainer,
  TextField
} from 'react-md';
import Recaptcha from 'react-recaptcha';

const Dialog = styled.div`

`;

export default class DoctorReviewsDialog extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            rating: 1,
            comment: ""
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRecaptcha = this.handleRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
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
        this.setState({ visible: false, rating: 1, comment: "" });
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

    onStarClick(value) {
        this.setState({rating: value});
    }
    
    handleRecaptcha() {
        console.log('captcha loaded!');
    }

    verifyCallback(response) {
        if(response){
            this.setState({
                isVerified: true
            });
        }
    }

    handleSubmit(event) {
        if(this.state.isVerified) {
            this.props.sendReviewToServer({
                doctor: this.props.doctor,
                rating: this.state.rating,
                comment: this.state.comment
            });
            this.hide();
            event.preventDefault();
        } else {
            alert('Please verify you are a human!');
        }
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
            <Dialog>
                <Button flat secondary iconBefore={false} iconChildren="rate_review" onClick={this.show}>Add Review</Button>
                <DialogContainer
                    id="focus-control-dialog"
                    title="Add Review"
                    visible={visible}
                    width="500px"
                    actions={actions}
                    onHide={this.hide}
                    initialFocus={initialFocus}
                    focusOnMount={focusOnMount}
                    containFocus={containFocus}>
                    <form onSubmit={this.handleSubmit}>
                        <StarRatingComponent name="rating" starCount={5} value={rating} onStarClick={this.onStarClick.bind(this)}/>
                        <TextField id="comment" label="Comment" placeholder="Add your comment here" onChange={this.handleChange} rows={4}/>
                        <Recaptcha
                            sitekey="6LeOO2EUAAAAAHLJLvHbExgIiRym7QylZPDxFmcz" 
                            render="explicit" 
                            onloadCallback={this.handleRecaptcha}
                            verifyCallback={this.verifyCallback}/>
                    </form>
                </DialogContainer>
            </Dialog>
        );
    }
}
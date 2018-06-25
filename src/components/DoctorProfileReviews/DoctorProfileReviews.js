import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileReviewsComponent = styled.section`
    width: 900px;
    float: left;
    padding-left: 80px;
    margin: 20px;


    .review-header {

    }
    
    .review-title {

        .rating {
            display: inline;
        }
    }

    .review-text {
        padding: 20px;
    }

    .add-comment {
        label {
            padding: 40px;

        }

        textarea {
            width: 650px;
            height: 150px;
        }

        button {
            margin: 30px;
            padding: 10px 20px;
            float: right;
        }
    }

`;

const SectionTitle = styled.section`
    font-size: 1.6em;
    font-weight: bold;
    border-bottom: 1px solid black;
`;

class DoctorProfileReviews extends Component {

  render() {
    return(
      <DoctorProfileReviewsComponent>
        <SectionTitle>Reviews</SectionTitle>

        <div className="review-title">
            Jane Doe
            <div className="rating">
                <i className="material-icons" style={{width: '24px'}}>star_rate</i>
                <i className="material-icons" style={{width: '24px'}}>star_rate</i>
                <i className="material-icons" style={{width: '24px'}}>star_rate</i>
                <i className="material-icons" style={{width: '24px'}}>star_rate</i>
                <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            </div>
        </div>
        <div className="review-text">
        lorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsu
        lorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem ipsum
        lorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem
        </div>
        <div className="add-comment">
            <h3>Add a new comment</h3>
            <form>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <input type="text" name="rating"/>
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea name="comment"></textarea>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
      </DoctorProfileReviewsComponent>
    )
  }
}

export default DoctorProfileReviews;


import React from "react";
import { Field } from 'redux-form';
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

const renderTextField = ({ input, meta: { touched, error }, ...others }) => (
  <TextField {...input} {...others} error={touched && !!error} errorText={error} />
);

export const EditExperienceForm = ({ handleSubmit, onSubmit }) => {
  return(
    <Card>
      <CardTitle title={'Experience'} style={{paddingBottom: 0}}/>
      <CardText style={{paddingTop: 0}}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          id="experience[areaOfSpecialization]"
          name="experience[areaOfSpecialization]"
          label="Area of Specialization"
          component={renderTextField}
          className="md-cell--top" />
        <Field
          id="experience[yearsOfExperience]"
          name="experience[yearsOfExperience]"
          label="Years of Experience"
          component={renderTextField}
          className="md-cell--top" />
        <Field
          id="experience[previousExperiences]"
          name="experience[previousExperiences]"
          label="Previous Experiences"
          rows={5}
          maxLength={5000}
          className="md-cell--top"
          helpText="Here you can describe which relevant achievements you have accomplished during your career, such
               as certifications, medical journal mentions and more."
          component={renderTextField} />
        <Field
          id="experience[treatmentFocus]"
          name="experience[treatmentFocus]"
          label="Treatment Focus"
          rows={3}
          maxLength={1000}
          className="md-cell--top"
          helpText="Here you can describe what are your treatment focuses"
          component={renderTextField} />
          <Cell size={12}>
            <Button raised children="Submit" type="submit" />
          </Cell>
        </form>
      </CardText>
    </Card>
  );
};

export default EditExperienceForm;

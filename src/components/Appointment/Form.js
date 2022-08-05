import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import React, { useState } from "react";

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState({
    student: null,
    interviewer: null
  });
  const reset = function () {
    setStudent("");
    setInterviewer(null);
  }
  const cancel = function () {
    reset();
    props.onCancel();
  }

  function validate() {
    if (!student && !interviewer) {
      setError({
        ...error,
        student: "Student name cannot be blank",
        interviewer: "Please select an interviewer"
      })
      return false
    }

    if (student === "") {
      setError({...error, student: "Student name cannot be blank"})
      return false;
    }

    if (interviewer === null) {
      setError({ ...error, interviewer: "Please select an interviewer" })
      return false;
    }
    return true;
  }

  const handleSave = () => {
    if (validate()) {
      props.onSave(student, interviewer);
    }
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            data-testid="student-name-input"
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => {
              setStudent(event.target.value)
              if(error.student) {
                setError({
                  ...error,
                  student: null
                })
              }
            }}
          />
          <section className="appointment__validation">{error.student}</section>
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
        <section className="appointment__validation">{error.interviewer}</section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={handleSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}
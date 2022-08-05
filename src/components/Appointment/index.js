import React from "react";
import "components/Appointment/styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode"
import Form from "./Form";
import Confirm from "./Confirm";
import Error from "./Error";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "Could not save appointment";
  const ERROR_DELETE = "Could not delete appointment";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW)
      })
      .catch((error) => {
        transition(ERROR_SAVE, true);
        console.log(error.message);
      })
  }

  function deleteInterview() {

    transition(DELETING, true);

    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY)
      })
      .catch((error) => {
        transition(ERROR_DELETE, true);
        console.log(error.message);
      });
  }

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && (
        <Empty onAdd={() => transition(CREATE)} />
      )}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}

      {mode === SAVING && <Status message={SAVING} />}

      {mode === DELETING && <Status message={DELETING} />}

      {mode === CONFIRM && <Confirm
        message={"Are you sure you would like to delete"}
        onCancel={back}
        onConfirm={deleteInterview}
      />}

      {mode === EDIT && <Form
        student={props.interview.student}
        interviewers={props.interviewers}
        interviewer={props.interview.interviewer.id}
        onCancel={back}
        onSave={save}
      />}

      {mode === ERROR_SAVE && (<Error message={ERROR_SAVE} onClose={back} />)}

      {mode === ERROR_DELETE && (<Error message={ERROR_DELETE} onClose={back} />)}


    </article>
  )
}
// Retrieve all appointments for user-selected day
export function getAppointmentsForDay(state, day) {
  let appts = [];
  state.days.forEach((elem) => {
    if (elem.name === day) {
      appts = elem.appointments
    }
  })

  const allAppts = []
  for (const appt of appts) {
    if (state.appointments[appt]) {
      allAppts.push(state.appointments[appt])
    }
  }
  return allAppts
}

// Retrieve interviewer from provided interview object
export function getInterview(state, interview) {

if(!interview) {
  return null;
}

return(
  {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  }
)
};

export function getInterviewersForDay(state, day) {
  let interviewersID = [];
  state.days.forEach((elem) => {
    if (elem.name === day) {
      interviewersID = elem.interviewers
    }
  })

  // const allInterviewers = []
  // for (const interviewerID of interviewers) {
  //   if (state.interviewers[interviewerID]) {
  //     allInterviewers.push(state.interviewers[interviewerID])
  //   }
  // }

  const interviewersForDay = interviewersID.map(id => state.interviewers[id]);

  return interviewersForDay
}
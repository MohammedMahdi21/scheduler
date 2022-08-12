![Interview Scheduler](https://github.com/MohammedMahdi21/scheduler/blob/master/public/images/logo.png?raw=true)

Interview Scheduler is a single-page application (SPA) using `React`, that allows users to book technical interviews between students and mentors.

The App allow you to book an appointment between 12 pm and 5 pm, from Monday to Friday. When booking an appointment, the user enters his name and then chooses an interviewer from the list of interviewers. The user can save, modify or cancel the appointment.




## Final Project

### Booking an appointment
![](https://github.com/MohammedMahdi21/scheduler/blob/master/docs/Interview%20Scheduler%20Gif-1.gif?raw=true)

### Editing an appointment
![](https://github.com/MohammedMahdi21/scheduler/blob/master/docs/Interview%20Scheduler%20Gif-2.gif?raw=true)

### Canceling an appointment
![](https://github.com/MohammedMahdi21/scheduler/blob/master/docs/Interview%20Scheduler%20Gif-3.gif?raw=true)

## Getting Started

1. Install dependencies with `npm install`.

2. Using two terminal windows
    - use `npm start` to run the application on Webpack Development Server in the root of scheduler folder.
    - use `npm start` to run the scheduler-API server in the root of scheduler-api folder.

3. the application will use `http://localhost:8000` and the API servier will use `http://localhost:8001`

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Dependencies
- axios 0.27.2 or above
- classnames 2.2.x or above
- normalize.css 8.0.x or above
- react 16.9.x or above
- react-dom 16.9.x or above
- react-scripts 3.x or above
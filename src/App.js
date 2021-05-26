import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScheduleAssessment from './pages/ScheduleAssessment';
import AllAssessments from './pages/AllAssessments';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/scheduleAssessment' component={ScheduleAssessment} />
          <Route path='/assessments' component={AllAssessments} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

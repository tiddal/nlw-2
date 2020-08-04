import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Teachers from '../pages/Teachers';
import TeacherForm from '../pages/TeacherForm';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
    <Route path="/study" component={Teachers} />
    <Route path="/teach" component={TeacherForm} />
  </BrowserRouter>
);

export default Routes;

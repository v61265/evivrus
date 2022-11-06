import InterviewPage from './page/InterviewPage';
import DefaultPage from './page/DefaultPage';
import ApcsPage from './page/ApcsPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/interview' element={<InterviewPage />}></Route>
          <Route exact path='/apcs' element={<ApcsPage />}></Route>
          <Route path='*' element={<DefaultPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

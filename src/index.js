    // import React from 'react';
    // import ReactDOM from 'react-dom';

    // import App from "./components/App";







    // ReactDOM.render(
  
    //  <App />,
    //  document.getElementById('root')
    // );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
// import ManagePost from "./components/Managepost";
//  import Addpost from "./components/Addpost"
// import Addpeople from './components/Addpeople';
// import ManagePeople from './components/Managepeople';
import DIY from './components/DIY';
import Debate from './components/Debate';
import Enterprenurship from './components/Enterprenurship';
import Art from './components/Art';
import Heritage from './components/Heritage';
import Main from "./components/Main";
import Edit from './components/Edit';
import Edituser from './components/Edituser';
import Diyaddpost from './components/DIY/diyaddpost';
import DIYManagePost from './components/DIY/diymanagepost';
import DIYAddpeople from './components/DIY/diyaddpeople';
import DIYManagePeople from './components/DIY/diymanagepeople';
import Debateaddpost from './components/Debate/debateaddpost';
import DebateManagePost from './components/Debate/debatemanagepost';
import DebateAddpeople from './components/Debate/debateaddpeople';
import DebateManagePeople from './components/Debate/debatemanagepeople';
import Enteraddpost from './components/Enterprenurship/EnterAddpost';
import EnterAddpeople from './components/Enterprenurship/EnterAddpeople';
import EnterManagePost from './components/Enterprenurship/EnterManagepost';
import EnterManagePeople from './components/Enterprenurship/EnterManagepeople';
import Artaddpost from './components/Art and Designing/Artaddpost';
import ArtAddpeople from './components/Art and Designing/Artaddpeople';
import ArtManagePost from './components/Art and Designing/Artmanagepost';
import ArtManagePeople from './components/Art and Designing/Artmanagepeople';
import Heritageaddpost from './components/Heritage and Environment/Heritageaddpost';
import HeritageAddpeople from './components/Heritage and Environment/Heritageaddpeople';
import HeritageManagePost from './components/Heritage and Environment/Heritagemanagepost';
import HeritageManagePeople from './components/Heritage and Environment/Heritagemanagepeople';
function Appp(){
  return(
    <Router>
      <Switch>
        <Route exact="true" path="/" component={Main} />
        {/* <Route path="/Managepost" component={ManagePost} />
         <Route path="/Addpost" component={Addpost} /> 
        <Route path="/Addpeople" component={Addpeople} />
        <Route path="/Managepeople" component={ManagePeople} /> */}
        <Route path="/DIY" component={DIY} />

        <Route path="/Debate" component={Debate} />
        <Route path="/Enterprenurship" component={Enterprenurship} />
        <Route path="/Art" component={Art} />
        <Route path="/Heritage" component={Heritage} />
        <Route path="/Edit/:id" component={Edit} />
        <Route path="/Edituser/:id" component={Edituser} />
        <Route path="/diyaddpost" component={Diyaddpost} />
        <Route path="/diymanagepost" component={DIYManagePost} />
        <Route path="/diyaddpeople" component={DIYAddpeople} />
        <Route path="/diymanagepeople" component={DIYManagePeople} />
        <Route path="/debateaddpost" component={Debateaddpost} />
        <Route path="/debatemanagepost" component={DebateManagePost} />
        <Route path="/debateaddpeople" component={DebateAddpeople} />
        <Route path="/debatemanagepeople" component={DebateManagePeople} />
        <Route path="/EnterAddpost" component={Enteraddpost} />
        <Route path="/EnterAddpeople" component={EnterAddpeople} />
        <Route path="/EnterManagepost" component={EnterManagePost} />
        <Route path="/EnterManagepeople" component={EnterManagePeople} />
        <Route path="/Artaddpost" component={Artaddpost} />
        <Route path="/Artaddpeople" component={ArtAddpeople} />
        <Route path="/Artmanagepost" component={ArtManagePost} />
        <Route path="/Artmanagepeople" component={ArtManagePeople} />
        <Route path="/Heritageaddpost" component={Heritageaddpost} />
        <Route path="/Heritageaddpeople" component={HeritageAddpeople} />
        <Route path="/Heritagemanagepost" component={HeritageManagePost} />
        <Route path="/Heritagemanagepeople" component={HeritageManagePeople} />
        


      </Switch>
    </Router>
  )
}
ReactDOM.render(
  <Appp />,
  document.getElementById('root')
);











import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";


const Router: React.FC = () => (
  <div data-testid="Router"> 
  
        <BrowserRouter >

        <Switch>
           <Route path='/'
                    exact
                    component={NotFound} />
              <Route
                    path='/items' exact
                    component={NotFound} />

              <Route path="/items/:id"
                    exact 
                    component={NotFound}/>

             <Route path='*'  component={NotFound}/>
             <Route path='/items/*'  component={NotFound}/>
         </Switch>
       
      </BrowserRouter>
  </div>

);

export default Router;

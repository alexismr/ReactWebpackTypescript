import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import  './NotFound.module.scss';


const NotFound: React.FC<RouteComponentProps> = ( props:RouteComponentProps) =>{
  return (
    <div className="NotFound" data-testid="NotFound">
             La ruta no ( {props.match.url}) existe 
    </div>
  )
 }

export default NotFound;

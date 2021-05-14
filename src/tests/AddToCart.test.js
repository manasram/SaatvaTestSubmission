import React from 'react';
import App from "../App";
import {render,fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Button} from "react-bootstrap";

describe('Product Page Test',()=>{
   it('Should pass',()=>{
        const {app} =render(<React.Fragment></React.Fragment>);
        expect(app.querySelector('button')).toHaveTextContent('Add to Cart');
        expect(app.querySelector('span')).toHaveTextContent(0);
        fireEvent.click(app.querySelector('button'));
        expect(app.querySelector('span')).toHaveTextContent(1);
        fireEvent.click(app.querySelector('button'));
        expect(app.querySelector('span')).toHaveTextContent(2);
   });
});
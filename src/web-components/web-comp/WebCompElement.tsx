import ReactDOM from 'react-dom';
import React from 'react';
import WebComp from './WebComp';

export default class WComp extends HTMLElement {
    config: any;

    connectedCallback() {
        this.render();
    }

    render() {
        ReactDOM.render(
            <React.StrictMode>
                <WebComp config={this.config}/>
            </React.StrictMode>,
            this
        );
    }

    set prop(prop: any) {
        console.log('got it', prop);
        this.config = prop;
        this.render();
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this);
    }
}
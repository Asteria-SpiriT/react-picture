import '../styles/index.scss';

import React, { Component } from 'react';

class Home extends Component {
    constructor(){
        super();
    }

    render (){
        return (
            <div className="home">
                <h2>Home Page</h2>
                <p>Hello, react.</p>
            </div>
        )
    }
}

export default Home
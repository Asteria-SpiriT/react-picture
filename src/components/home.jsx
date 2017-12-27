import React from 'react';
import '../styles/index.scss';

// const Home = () => (
//     <div className="content">
//         <p>Hello, react.</p>
//     </div>
// )
class Home extends React.Component {
    constructor (){
        super();
        this.state = {
            name: 'React'
        }
    }

    render (){
        return (
            <div className="content">
                <h3>{this.props.title}</h3>
                <p>Hello, {this.state.name}.</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}

export default Home;
import React from 'react';
import firebase from '../firebase';
class About extends React.Component {
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('Descriptions').doc('1');
        this.unsubscribe = null;
        this.state = {
            description: "Loading...."
        }
    }

    onCollectionUpdate = (querySnapshot) => {
        var {description} = querySnapshot.data()
        console.log(description);
        this.setState({
            description
       });
      }
      
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render(){
        return (<div id="about" className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="about-card" className="card">
                        <div className="card-content">
                            <p>
                                {this.state.description}
                            </p>
                        </div>

                        <div id="about-btn" className="card-action">
                            <div className="about-btn">
                                <a href="/" className="btn waves-effect">Download CV <i className="fa fa-bath"></i> </a>
                                <a href="#contact" className="btn waves-effect">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
    }
}
export default About;
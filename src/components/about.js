import React from 'react';
import firebase from '../firebase';
class About extends React.Component {
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('Descriptions').doc('1');
        this.unsubscribe = null;
        this.state = {
            description: <div>
                    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" style={{color: "#3F51B5"}}></i>
                </div>
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
        var obj = this;
        firebase.firestore().collection('Links').doc('cv').get().then(doc => {
            console.log(doc.data());
            if(doc.exists){
                obj.setState({link: doc.data().link})
            }
        });
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
                                <a href={this.state.link} download={true} rel="noopener noreferrer" target="_blank" className="btn waves-effect">Download CV </a>
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
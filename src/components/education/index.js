import React from 'react';
import Card from './card';
class Education extends React.Component{
    render() {
        return (<section id="education" className="section">
        <div className="container">
            <div className="section-title">
                <h4 className="text-uppercase text-center"><i className="title-icon fa fa-graduation-cap"></i>Education</h4>
            </div>

            <div id="timeline-education">
                {this.props.cardData.map(obj => <Card data={obj} />)}
            </div>
        </div>
    </section>);
    }
}

export default Education;   
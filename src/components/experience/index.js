import React from 'react';
import Card from '../education/card';
class Experience extends React.Component {
    render(){
        return (
            <section id="experience" className="section">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-uppercase text-center"><i className="title-icon fa fa-suitcase"></i>Experience</h4>
                    </div>

                    <div id="timeline-experience">
                        {this.props.cardData.map(obj => <Card data={obj} />)}
                    </div>
                </div>
            </section>
        );
    }
}
export default Experience;
import React from 'react';
import Category from './category';

class Skills extends React.Component {
    render() {
        return (<section id="skills" className="section">
        <div className="container">
            <div className="section-title">
                <h4 className="text-uppercase text-center"><i className="title-icon fa fa-sliders"></i>Skills</h4>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div id="skills-card" className="card">
                        <div className="card-content">
                            <div className="row">
                                {this.props.skills.map(obj => <Category name={obj.name} items={obj.items} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
    }
}

export default Skills;
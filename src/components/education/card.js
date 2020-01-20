import React from 'react';

class Card extends React.Component {
    render(){
        return (
            <div className="timeline-block">
                <div className="timeline-dot"></div>
                <div className="card timeline-content">
                    <div className="card-content">
                        <h6 className="timeline-title">{this.props.data.title}</h6>
                        <div className="timeline-info">
                            <h6>
                                <small>{this.props.data.subtitle1}</small>
                            </h6>
                            <h6>
                                <small>{this.props.data.subtitle2}</small>
                            </h6>
                        </div>
                        <p>
                            {this.props.data.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
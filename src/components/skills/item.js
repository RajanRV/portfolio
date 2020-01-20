import React from 'react';

class Item extends React.Component {
    render(){
        return (
            <div className="skillbar" data-percent={this.props.percentage}>
                <div className="skillbar-title"><span>{this.props.name}</span></div>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">{this.props.percentage}</div>
            </div>
        );
    }
}
export default Item;
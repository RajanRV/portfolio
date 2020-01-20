import React from 'react';
import Item from './item';
class Category extends React.Component {
    render(){
        return (
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="skills-title">
                    <h6 className="text-center">{this.props.name}</h6>
                </div>
                {this.props.items.map(obj => <Item name={obj.name} percentage={obj.percentage} />)}
            </div>
        );
    }
}
export default Category;
import React from 'react';

class Preloader extends React.Component{
    render(){
        return (<div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="box-holder animated bounceInDown">
                        <span className="load-box"><span className="box-inner"></span></span>
                    </div>
                    <div className="text-holder text-center">
                        <h2>Rajan Vasani</h2>
                        <h6>Web Developer</h6>
                    </div>
                </div>
            </div>
        </div>);
    }    
}

export default Preloader;
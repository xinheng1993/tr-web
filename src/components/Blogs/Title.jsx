import React, { Component } from "react";



class Title extends Component{
    render(){
        let title = this.props.title
        return(
            <div>
                <h1>
                    {title}
                </h1>
            </div>
        );
    }
}

export default Title;
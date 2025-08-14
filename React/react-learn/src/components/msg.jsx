import React, {Component} from 'react'

class Msg extends React.Component{
    constructor(){
        super()
        this.state = {
            msg : 'computer science and engineering'
        }
    }
    changeMessage(){
        this.setState({
            message: 'thank you! welcome to CSE'
        })
    }

    render(){
        return(
            <div>
                <h1>welcome to CHARUSAT! {this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Click Me!!</button>
            </div>
        )
    }
}

export default Msg

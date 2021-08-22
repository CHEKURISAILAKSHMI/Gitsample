import { render } from '@testing-library/react'
import React ,{ Component } from 'react'
class StateEx extends Component{
    constructor(){
        super()
        this.state={
            message : 'LOGIN'
        }
    }
        changeStates(){
           
            this.setState({
                message: 'LOGIN SUCCESS'
            })
        }
        
    render() {
        return( 
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeStates()}> Click here !</button>
        </div>
        )
    }
}
export default StateEx
import { render } from '@testing-library/react'
import React ,{ Component } from 'react'
class Conditions extends Component{
    constructor(){
        super()
        this.state={
            status:false
        }
    }

//Short Circuit Operator
    render(){
        return this.state.status && <h1>LOGIN SUCCESS</h1>
    }

// TERNARY OPERATOR
    // render() {
    //     return(
    //         this.state.status ?
    //             ( <h1>LOGIN SUCCESS</h1>) :  (<h1>PLEASE LOGIN!!</h1>)
    //     )
    // }


//Element Variable Randering
//     render(){
//         let message
//         if(this.state.status){
//             message= 'LOGIN SUCCESS'
//         }
//         else
//         message='Please LOGIN !!'
//     return <div>{message}</div>
//     }

// IF-ELSE CONDITIONAL RENDERING
    // render() {
    //     if(this.state.status){
    //         return <h1>LOGIN SUCCESS</h1>
    //     }
    //     else
    //     return <h1>PLEASE LOGIN!!</h1>
        

   // }
}
export default Conditions
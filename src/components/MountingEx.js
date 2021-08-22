import { render } from '@testing-library/react'
import React ,{ Component } from 'react'
class MountingEx extends Component{
    constructor(props){
        super(props)
        this.state= {
            name :'sai'
        }
        
        console.log("Mounting - Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Mounting- Derived State")
        return null
    }
    componentDidMount(){
        console.log("Mounting- ComponentDidMount")
    }
    shouldComponentUpdate(){
        console.log("Updating- ShouldComponetUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Updating- getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("Updating- ComponetDidUpdate")
    }

       changeState=()=>
       {
           this.setState({
               name:'sailakshmi'
           })
        }        
    render() {
        console.log("Mounting- Render")
        
        return (<div>
            <h1>LIFECYCLE</h1>
            <button onClick={this.changeState}>Update !</button>
            </div>)
    }
}
export default MountingEx
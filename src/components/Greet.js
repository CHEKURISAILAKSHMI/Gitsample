import { render } from '@testing-library/react'
import React ,{ Component } from 'react'
class Greet extends Component{
    render() {
        return <h1>Hey {this.props.name} - Class Component</h1>
    }
}
export default Greet
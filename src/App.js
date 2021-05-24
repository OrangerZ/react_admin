import React,{Component} from 'react';
import { message, Button, Space } from 'antd';
/*root component*/

export default class App extends Component {

    success =()=>{
        message.success ('This is a success message');
    };

    render() {
        return <Button type="dashed" onClick={this.success}>Dashed Button</Button>
    };
}
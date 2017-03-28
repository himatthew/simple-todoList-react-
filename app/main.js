import {Component} from 'react';
import { render } from 'react-dom';

class TodoBox extends  Component{
    constructor() {
        super();
        this.state={
            data:[
                {"id": "0001", "task":"吃饭", "complete": "false"},
                {"id": "0002", "task":"睡觉", "complete": "false"},
                {"id": "0003", "task":"打豆豆", "complete": "true"}
            ]
        };
        this.handleTaskDelete=this.handleTaskDelete.bind(this);
    }
    handleTaskDelete(taskId){
        var data=this.state.data;
        data=data.filter((task)=>task.id!==taskId)
        this.setState({data})
    }
    handle
}

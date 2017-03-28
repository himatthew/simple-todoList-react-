/**
 * Created by Matthew on 2017/3/27.
 */
import React,{Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'

class Greeter extends Component{
    render(){
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}
export default Greeter

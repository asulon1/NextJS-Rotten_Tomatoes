import React, { Component } from 'react'
import styles from './Button.module.css'
import CommentsModal from './CommentsModal'


export default class CommentsButton extends Component {

    state = {
        visible: false
    }

    montre = () => {
        this.setState({
            visible: true
        })
    }

    cache = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className='block items-center'>
            <button
            onClick={this.montre}
            className="bg-blue-800 rounded-md p-4 ">
                New comment 
            </button>

            <CommentsModal 
            visible={this.state.visible}
            cache={this.cache}/>

            </div>
        )
    }
}

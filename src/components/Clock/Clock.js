// Just testing clock react method - not connected to any files

import React from 'react';
import Formatter from './Formatter';

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = this.getTime();
    // }

    state = {
        currentTime: new Date()
    }

    componentDidMount() {
        this.setState({
            currentTime: new Date()
        }, this.updateTime);
        // function that will be called to stop
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
    }

    updateTime = e => {
        this.timerId = setTimeout(() => {
            this.setState({
                currentTime: new Date()
            }, this.updateTime);
        })
    }

    // setTimer() {
    //     clearTimeout(this.timeout);
    //     this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    // }
    // updateClock() {
    //     this.setState(this.getTime, this.setTimer)
    // }

    // getTime() {
    //     const currentTime = new Date();
    //     return {
    //         hours: currentTime.getHours(),
    //         minutes: currentTime.getMinutes(),
    //         seconds: currentTime.getSeconds(),
    //         ampm: currentTime.getHours()>= 12 ? 'pm' : 'am'
    //     }
    // }



    render() {
        // const {hours, minutes, seconds, ampm } = this.state;
        const { currentTime } = this.state
        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();
        const second = currentTime.getSeconds();

        return (
            <div className='clock'>
                <Formatter
                    {...this.props}
                    state={this.props}
                    hours={hour}
                    minutes={minute}
                    seconds={second}
                />

                {/* {
                    hours === 0 ? 12 :
                    (hours > 12) ?
                    hours - 12 : hours
                } : {
                    minutes > 9 ? minutes : `0${minutes}`
                } : {
                    seconds > 9 ? seconds : `0${seconds}`
                } {ampm} */}
            </div>
        )
    }
}

export default Clock;
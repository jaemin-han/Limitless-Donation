import React from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';

const data = require('../components/data.json');
const fetchEvent = () => Promise.resolve(data).then(json => json.slice(0, 4))

class Timeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false
        }
    }

    refresh() {
        this.setState({refreshing: true})
    }

    onComponentRefresh() {
        this.setState({refreshing: false})
    }
    render() {
        const { refreshing } = this.state;
        return (
            <div className='notificationsFrame'>
                <div className='panel'>
                    <Header/>
                    <Content
                        onComponentRefresh={this.onComponentRefresh.bind(this)}
                        requestRefresh={refreshing}
                        fetchData={fetchEvent}
                    />
                    <Footer>
                        <button onClick={this.refresh.bind(this)}>
                            Refresh
                        </button>
                    </Footer>
                </div>
            </div>
        );
    }
}

export default Timeline;
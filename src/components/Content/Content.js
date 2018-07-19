import React from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';

const data = require('../data.json').slice(0, 4);

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            activities: []
        };
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.requestRefres === true) {
            this.setState({loading: true}, this.updateData);
        }
    }

    // Call out to github data and refresh directory
    updateData() {
        this.setState(
            {
                loading: false,
                activities: data.sort(() => 0.5 - Math.random()).slice(0,4)
            },
            this.props.onComponentRefresh
        );
    }

    render() {
        const { loading, activities } = this.state;

        return (
            <div className='content'>
                <div className='line' />
                    {loading && <div>Loading</div>}
                    {activities.map(activity => (
                        <ActivityItem key={activity.id} activity={activity} />
                    ))}
            </div>
        )
    }
}

export default Content;
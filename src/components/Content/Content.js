// import React from 'react';
// import ActivityItem from '../ActivityItem/ActivityItem';

// const data = require('../data.json').slice(0, 4);

// class Content extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             loading: false,
//             activities: [],
//             filtered: data,
//             searchFilter: ''
//         };
//     }

//     componentDidMount() {
//         this.updateData();
//     }

//     componentWillReceiveProps(nextProp) {
//         // if (nextProp.requestRefresh === true) {
//         //     this.setState({loading: true}, this.updateData);
//         // }
//         if (nextProps.requestRefresh !== this.props.requestRefresh) {
//             this.setState ({
//                 loading: true
//             }, this.updateData);
//         }
//     }

//     // After the content has refreshed, we want to reset the loading variable
//     onComponentRefresh() {
//         this.setState({loading: false})
//     }

//     // handleSearch = txt => {
//     //     if (txt === '') {
//     //         this.setState({
//     //             filtered: this.state.activities
//     //         })
//     //     } else {
//     //         const { activities } = this.state
//     //         const filtered = activities.filter(a => a.actor && a.actor.login.match(txt))
//     //         this.setState({
//     //             filtered
//     //         })
//     //     }
//     // }

//     handleSearch(val) {
//         this.setState({
//             searchFilter: val,
//             loading: true
//         })
//     }

//     // Call out to github data and refresh directory
//     updateData() {
//         this.setState(
//             {
//                 loading: false,
//                 activities: data.sort(() => 0.5 - Math.random()).slice(0,4)
//             },
//             this.props.onComponentRefresh
//         );
//     }

//     render() {
//         const { loading, activities } = this.state;

//         return (
//             <div>
//                 {/* <Header
//                     onSubmit={this.handleSearch}
//                     title='github activity..'
//                 /> */}
//                 <div className='content'>
//                     <div className='line' />
//                         {loading && <div>Loading</div>}
//                         {activities.map(activity => (
//                             <ActivityItem key={activity.id} activity={activity} />
//                         ))}
//                 </div>
//             </div>


            
//         )
//     }
// }

// export default Content;
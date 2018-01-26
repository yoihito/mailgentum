import React from 'react';

const MonitorLifecycle = (Component) => {
    class Monitor extends React.Component {
        componentDidMount() {
            console.log(`componentDidMount ${Component.name}`);
        }

        componentWillUnmount() {
            console.log(`componentWillUnmount ${Component.name}`);
        }

        render() {
            return <Component {...this.props}/>;
        }
    }

    return Monitor;
}

export default MonitorLifecycle;
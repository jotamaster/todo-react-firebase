import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
 
class ReadMore extends Component {
    constructor(...args) {
        super(...args);
 
        this.state = {
            expanded: false,
            truncated: false
        };
 
        this.handleTruncate = this.handleTruncate.bind(this);
        this.toggleLines = this.toggleLines.bind(this);
    }
 
    handleTruncate(truncated) {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    }
 
    toggleLines(event) {
        event.preventDefault();
 
        this.setState({
            expanded: !this.state.expanded
        });
    }
 
    render() {
        const {
            children,
            more,
            less,
            lines 
        } = this.props;
 
        const {
            expanded,
            truncated 
        } = this.state;
 
        return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                        <span>... <span style={{color : 'blue',cursor : 'pointer'}}  onClick={this.toggleLines}>{more}</span></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {children ? children : ''}
                </Truncate>
                {!truncated && expanded && (
                    <span style={{color : 'blue',cursor : 'pointer'}} onClick={this.toggleLines}>{less}</span>
                )}
            </div>
        );
    }
}
 
ReadMore.defaultProps = {
    lines: 2,
    more: 'Leer más',
    less: 'Leer menos'
};
 
ReadMore.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.node,
    lines: PropTypes.number
};
 
export default ReadMore;
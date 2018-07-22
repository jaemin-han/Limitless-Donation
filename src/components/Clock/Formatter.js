import React from 'react';

const Formatter = (props) => {
    let children = props.format.split('').map((e, idx) => {
        if (e === 'h') {
                return <Hour key={idx} {...props} />
            } else if (e === 'm') {
                return <Minute key={idx} {...props} />
            } else if (e === 's') {
                return <Second key={idx} {...props} />
            } else if (e === 'p') {
                return <Ampm key={idx} {...props} />
            } else if (e === ' ') {
                return <span key={idx}> </span>;
            } else {
                return <Separator key={idx} {...props} />
            }
    });

    return <span>{children}</span>
}
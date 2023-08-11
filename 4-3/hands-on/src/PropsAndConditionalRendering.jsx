/* eslint-disable react/prop-types */
const Clock = (props) => {
    const { time, color } = props;
    const isLightCoral = color === 'lightcoral';

    return (
        <h1 style={{ color: color }}>
            {time} {isLightCoral && '❤️'}
        </h1>
    );
};

export default Clock;
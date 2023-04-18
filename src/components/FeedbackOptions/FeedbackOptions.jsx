import PropTypes from 'prop-types';

export const Buttons = ({options, onLeaveFeedback}) => {

    const optionsKey = Object.keys(options)    
    return (
        <>
    <div>
{optionsKey.map((option, index) => {
    const btnName = option;
    return (
        <button key={index} type="button" onClick={() => {onLeaveFeedback(option)}}>
            {btnName}
        </button>
    );
})}
    </div>
    </>
    )
};

Buttons.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired, 
    onLeaveFeedback: PropTypes.func.isRequired
};
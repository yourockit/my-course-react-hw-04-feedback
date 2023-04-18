import PropTypes from 'prop-types';

export const Buttons = ({options, onLeaveFeedback}) => {

    return (
        <>
    <div>
{options.map((option, index) => {
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
    options: PropTypes.arrayOf(PropTypes.string).isRequired, 
    onLeaveFeedback: PropTypes.func.isRequired
};
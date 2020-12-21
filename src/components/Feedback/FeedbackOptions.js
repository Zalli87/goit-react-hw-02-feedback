import PropTypes from 'prop-types'
import s from './Feedback.module.css';

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <div className={s.options}>
            {options.map(option => (<button type="button" className={s.button} key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>))}
        </div>
    );
 
};

FeedbackOptions.protoType = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
/** Styling imports */
import styles from './FeedbackForm.module.css';
import FeedbackRating from './FeedbackRating.jsx'
import starImage from '../images/icon-star.svg'

const FeedbackForm = ({setSV, SV, setS}) => {
  
  let submitted = false;

  function handleClick() {
    setS(true);
    submitted = true;
    return;
  }

  console.log(styles);

  return (
    <div className={styles['Container']}>
      <div className={styles['Image']}><img src={starImage} /></div>
      <div id={styles['feedback-text']}>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>
      </div>
      <FeedbackRating setSV={setSV} SV={SV} />
      <div className={styles['Submit']}>
        <button 
          className={`${styles['Button']} ${submitted === true ? styles['submitted'] : ''}`}
          onClick={handleClick}>SUBMIT
        </button>
      </div>
    </div>
  )
}

export default FeedbackForm
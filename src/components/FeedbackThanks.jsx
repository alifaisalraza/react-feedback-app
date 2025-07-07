/** Styling imports */
import styles from './FeedbackThanks.module.css'
import thanksImage from '../images/illustration-thank-you.svg'

const FeedbackThanks = ({SV}) => {
  return (
    <div className={styles['Container']}>
      <div className={styles['Top']}>
        <img src={thanksImage} />
        <div className={styles['Selection']}>You selected {SV} out of 5</div>
      </div>
      <div className={styles['Bottom']}>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default FeedbackThanks
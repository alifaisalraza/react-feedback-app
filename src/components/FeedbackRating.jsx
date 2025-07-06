/** Styling imports */
import styles from './FeedbackRating.module.css'

const FeedbackRating = ({setSV, SV}) => {
  
  const ratings = [1, 2, 3, 4, 5];

  function handleClick(num) {
    setSV(num); // Notify parent
    return;
  }

  return (
    <div className={styles['Rating']}>
      {ratings.map((num) => (
        <div key={num} 
             className={`${styles['rating-child']} ${SV === num ? styles['selected'] : ''}`}
             onClick={() => handleClick(num)}
        >
          {num}
        </div>
      ))}
    </div>
  )

}

export default FeedbackRating
/** Component Imports */
import FeedbackForm from './components/FeedbackForm.jsx'
import FeedbackThanks from './components/FeedbackThanks.jsx'
import { useState } from 'react'
import styles from './App.module.css'

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles'
 *  4. We added additional comments below to guide you
 */

const App = () => {

  const [selectedValue, setSelectedValue] = useState(null);
  const [submitted, setSubmitted] = useState(false); // <-- new state

  return (
    <div className={styles['App']}>
      {!submitted ? (
        <FeedbackForm setSV={setSelectedValue} SV={selectedValue} setS={setSubmitted}/>
      ) : (
        <FeedbackThanks SV={selectedValue} />
      )}
    </div>
  )
}

export default App

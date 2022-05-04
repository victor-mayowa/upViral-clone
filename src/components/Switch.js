import React from 'react'
import styles from "./Switch.module.css"

const Switch = ({toggle, toggleHandler}) => {
  return (
      <>
      <label  className={styles.switch}>
          <input type="checkbox"checked={toggle} onChange={toggleHandler} />
          <span className={styles.slider}/>
      </label>
      </>
     
  )
}

export default Switch
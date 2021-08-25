import React from 'react'
import styles from './styles.module.css'


export const ButtonComponent = (props) => {
  console.log(props)
  return(
  <button className={styles[props.type]} >{props.text} </button>
  )
}

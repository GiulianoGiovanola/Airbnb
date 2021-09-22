import React from 'react'
import loading from '../img/loading.gif'
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.divload}>
            <img className={styles.load} src={loading} alt="loading..." />
        </div>
    )
}

export default Loading

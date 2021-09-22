import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import styles from './Price.module.css';

const Price = ({price}) => {
    return (
        <div className={styles.div}>
            {[ ...Array(price)].map(star =>{
                return <AttachMoneyIcon size={20} key={Math.floor(Math.random() * 100000)}/>
            })}
        </div>
    )
}

export default Price

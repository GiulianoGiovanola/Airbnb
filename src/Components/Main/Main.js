import React from 'react'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import NoResults from '../NoResults/NoResults';
import styles from './Main.module.css';

const Main = ({isLoading, hoteles}) => {
    return (
        <div className={`container ${styles.container_wrapper}`}>
            {!isLoading ? (
                hoteles.length > 0 ?(
            <div className="columns is-multiline is-mobile"> 
                {hoteles.map((hotel) =>  
                <Card hotel={hotel} key={hotel.name}/>)}
            </div> ) : (<div className={styles.noResults}><NoResults /></div>)
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Main

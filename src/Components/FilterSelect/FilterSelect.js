import React from 'react'
import styles from './FilterSelect.module.css';

const FilterSelect = ({name, onSelectChange, selected, options}) => {
    const optionsValues = options.map(({ value, name }) =>
        <option value={value}>{name}</option>
    )
        console.log(options)
    return (
        <div className="field">
            <div className="control">
                <div className="select" style={{ width: "100%" }}>
                    <select
                        style={{ width: "100%" }}
                        value={selected}
                        onChange={onSelectChange}
                        name={name}
                    >
                        {optionsValues}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterSelect
/*<div className={`select ${styles.options}`}>
                <select className={` ${styles.options_wrapper}`}>
                    <option hidden selected>Pais</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                    <option>Uruguay</option>
                </select>
            </div>
            <div className={`select ${styles.options}`}>
                <select className={` ${styles.options_wrapper}`}>
                    <option hidden selected>Precio</option>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                    <option>$$$$</option>
                </select>
            </div>
            <div className={`select ${styles.options}`}>
                <select className={` ${styles.options_wrapper}`}>
                    <option hidden selected>Tamaño</option>
                    <option>Hotel pequeño</option>
                    <option>Hotel mediano</option>
                    <option>Hotel grande</option>
                </select>
            </div>*/
import React from 'react';
import styles from './Box.module.css';



const Box = (props) => {
    return (
        <div className={styles.Box}>
            나는 박스 입니다.
        </div>
    );
};

export default Box;
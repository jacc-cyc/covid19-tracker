import React from 'react';
import styles from './Sentence.module.css';
import img2 from './bulbs.png'

const Sentence=()=>{
    
    var sent = [
        "Maintain appropriate social distance with other people as far as possible.",
        "Surgical mask can prevent transmission of respiratory viruses from ill persons.",
        "Avoid touching your eyes, mouth and nose.",
        "Wash hands with liquid soap and water, and rub for at least 20 seconds.",
        "Home should be cleaned thoroughly at least once per week with 1 in 99 diluted household bleach.",
        "Build up good body resistance and maintain healthy lifestyle.",
        "N95 respirators are generally not recommended for use by the general public in community settings."
    ];

    var content = sent[Math.floor(Math.random() * 7)];

    return(
        <div className={styles.container}>
            <h3><img className={styles.img2} src={img2} alt="lightbulb" />   {content}</h3>
        </div>
    )
}

export default Sentence;

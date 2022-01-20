import React from 'react'
import styles from './Modal.module.css'

export default function CommentsModal(props) {
        return (
            <div className={styles.Modal}
            style = {{
                transform: props.visible ? 'translateY(0vh' : 'translateY(-100vh)',
                opacity: props.visible ? '1' : '0'
            }}>
                <button onClick = {props.cache}>X</button>
                <p>Laisser votre commentaire dans l'emplacement:</p>
                <form action = "" method = "POST">
                    <label type="textarea" name ="commentaire" placeholder='Commentez'> Je vais commenter</label>
                    <br></br>
                    <br></br>
                    <textarea className = "bg-white rounded text-black" id="commentaire" type="text"  required  class="rounded text-black"/>
                    <br></br><br></br>
                    <button type="submit">Je commente</button>
                </form>
            </div>
        )
    
}

import styles from '../../style/components/main/main.module.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import InfoIcon from '@material-ui/icons/Info';
import { useState } from 'react';



export function Main() {

   const [isMuted, setIsMuted] = useState(true);

   function muted(){
       if (isMuted === true){
        setIsMuted(false);
       }else{
        setIsMuted(true);
       }

   }

    return (
        <main className={styles.main}>
           <video width="100%" height="100%" autoPlay loop muted = {isMuted}>
                 <source src="../video/S2.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className={styles.muturityRating}>
                <span>18</span>
            </div>
                <div className={styles.styleMute} onClick={muted}>
                    { isMuted ?(
                    <div><VolumeMuteIcon/></div>
                    ):(<div><VolumeUpIcon/></div>)}
                </div>
            <div>

            </div>
            <div className={styles.metaLayer}>
                <div className={styles.titleWrapper}>
                    <img src="./img/nos.jpeg" alt="nos" />

                </div>
                <div className={styles.supplementalMessage}>
                    Assista à temporada 1 agora

                </div>
                <div className={styles.sinopses}>
                        uma festa inesperada levou um jovem ao encontro de um anjo,<br/> e esse encontro mudou sua vida !!
                </div>
                <div className={styles.buttonsWrapper}>
                    <button><ArrowRightIcon  style={{ fontSize: 35 }}/>Assistir</button>
                    <button><InfoIcon/> &nbsp; Mais informações</button>
                </div>

            </div>
        </main>
    )
}
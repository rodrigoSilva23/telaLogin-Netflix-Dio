import styles from '../../style/components/header/header.module.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export function Header() {
    return (
      <header>
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
              <img src="./Netflix-Logo.png" alt="Logo da netflix" />
            </div>
            <nav className={styles.menuContainer}>
              <ul>
                <li><a href="# a">Início</a></li>
                <li><a href="# b">Série</a></li>
                <li><a href="# c">Filmes</a></li>
                <li><a href="# d">Bombando</a></li>
                <li><a href="# e">Minha lista</a></li>

              </ul>
              <div className={styles.secundaryMenu}>
                <span><SearchSharpIcon style={{ fontSize: 35 }}/></span>
                <span><NotificationsIcon style={{ fontSize: 35 }}/></span>
                <div className={styles.photoPerfilMenu}>
                  <img src="./img/rodrigo.jpg" alt="foto de perfil" />
                </div>
                  <span><ArrowDropDownIcon style={{ fontSize: 35 }}/></span>
              </div>
            </nav>
            <div>
              
            </div>
          </div>
      </header>
    );
  }
  
  
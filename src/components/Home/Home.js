import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./Home.module.css";

function Home (){
    return(
      <div>
        <div className={styles.oauth_button_wrapper}>
          <div className={styles.oauth_button}>
            <Link to="/google-calendar-oauth">
              <img className={styles.oauth_image} src={'https://www.drupal.org/files/project-images/google-calendar.png'} />
            </Link>
          </div>
        </div>

        <div className={styles.oauth_button_wrapper}>
          <div className={styles.oauth_button}>
            <Link to="/linkedin-oauth">
              <img className={styles.oauth_image} src={'https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Free-PNG-Image.png'} />
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Home;

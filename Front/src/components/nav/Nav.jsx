import SearchBar from "../searchbar/SearchBar";
import logo from './Rick-And-Morty-Logo.png'
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css'

export default function Nav(props){
    const {onSearch} = props
    
    return(
        
    <div className={styles.container}>
        <img  src={logo} alt='img' className={styles.img} />
        <NavLink to='/about'><span className={styles.child}>About</span></NavLink>
        <NavLink to='/home'><span className={styles.child}>Home</span></NavLink>
        <NavLink to='/favorites'><span className={styles.child}>Favorites</span></NavLink>
        <SearchBar className={styles.child} onSearch={onSearch}/> 
    </div>
    );
}
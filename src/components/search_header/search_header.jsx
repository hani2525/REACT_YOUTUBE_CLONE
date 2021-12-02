import React, { memo, useRef } from 'react';
import styles from './search_header.module.css'
const SearchHeader = memo(
    ({onSearch}) => {
        const inputRef = useRef(); //useRef를 사용해서 input에 담겨있는 value를 가져오고 inputRef에 담아준다.
        const handleSearch = () => {
            const value = inputRef.current.value; //useRef를 통해 inputRef에 담긴 현재 값을 value에 담아준다
            onSearch(value);
        }
        //onClick 함수를 실행할 때 handleSearch() 실행
        const onClick = () => {
            handleSearch();
        }
        //onClick 함수를 실행할 때 handleSearch() 실행 | 단, Enter키를 눌렀을 때만 실행 
        const onKeyPress = (event) => {
            if(event.key==='Enter'){
                handleSearch();
            }
        }
    
        return(
            <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder='Search...' onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
            </button>
        </header>    
        )
    }
);
  
    

export default SearchHeader;
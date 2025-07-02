import styles from './module_css/List.module.css';

export default function List (props){
    return (
        <ul className={styles.ul}>
            {
                props.items.map((v, i)=>{
                    return <li className={styles.li}>{v}</li>;
                })
            }
        </ul>
    );
};


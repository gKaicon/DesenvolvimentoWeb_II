import styles from './module_css/List.module.css';

export default function ListModule() {
    return (
        <>
            <p style={styles.p}>Tag de paragrafrafo usada para testar o moduleCSS.</p>
            <p style={localStyles.p}>Tag de paragrafrafo usada para testar o styles locais.</p>
        </>
    );

    const localStyles = {
        p:{
            padding: "10px",
            color: "blue",
            fontSize: "19px",
            padding: '10px',
            textAlign: 'center',
            fontWeight: 'bold'
        }
    }

};
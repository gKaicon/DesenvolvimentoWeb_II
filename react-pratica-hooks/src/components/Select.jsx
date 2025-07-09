import { useState, useRef, useEffect } from 'react';



const Select = () => {

    const [municipios, setMunicipios] = useState([]);

    const [uf, setUf] = useState('');



    const iptUf = useRef(null);



    function manipulaFormUf(e) {

        e.preventDefault();

        setUf(iptUf.current.value);        

    }

    useEffect(()=>{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then((res)=>{
            return res.json();
        })
        .then((json)=>{
            setMunicipios(json);
        });
    }, [uf]);

    return (
        <div>
            <form onSubmit={manipulaFormUf}>
                <label className='form-label'>UF: </label>
                <input className='input-group form-control' ref={iptUf}/>
                <button className='btn btn-primary m-2'>Buscar</button>
            </form>
            <select className='form-select'>
                <option value="0">Selecione...</option>
                {
                    municipios.map((v, i) => {
                        return <option> {v.nome} </option>
                    })
                }
            </select>
        </div>
    );

};



export default Select;

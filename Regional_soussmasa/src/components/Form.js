import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Form() {
    const [pays, setPays] = useState([])
    useEffect(()=>{
        const load_pays = async () => {
            return await fetch('https://countriesnow.space/api/v0.1/countries').then(resp=> resp.json()).then(resp=> setPays(resp.data))
        }
        load_pays()
    },[])
    // console.log(pays);
    return <>
        <h2>Formulaire d'inscription</h2>
        <label>Email:</label>
        <input type="email"/><br/>
        <label>Mot de passe:</label>
        <input type="password"/><br/>
        <label>Pays:</label>
        <select>
            <option value=''>Votre Pays ...</option>
            {pays.map((pay,index)=> <option value={pay.country} key={index}>{pay.country}</option>)}
        </select><br/>
        <label>Genre:</label>
        <input type="radio"/> <label>Homme</label>
        <input type="radio"/> <label>Femme</label><br/>
        <button>Valider</button>
    </>
}
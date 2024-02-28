import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addArticle_action, removeArticle_action } from "../store/actions"

export default function Articles() {
    const [articles, setArticles] = useState([])
    const panier = useSelector(state=> state.panier)
    useEffect(()=>{
        const load_articles = async () => {
            return await fetch('https://fakestoreapi.com/products').then(resp=> resp.json()).then(resp=> setArticles(resp)) 
        }
        load_articles()
    },[])
    const dispatch = useDispatch()
    const addArticle = (id) => {
        dispatch(addArticle_action(id))
    }
    const removeArticle = (id) => {
        dispatch(removeArticle_action(id))
    }
    // console.log(panier);
    const findArticle = (id) => {
        const articleFromId = articles.find(article=> article.id == id)
        return articleFromId.title
    }
    return <>
        <h3>Panier</h3>

        <ul>
            {panier.map((idArticle,index)=> <li key={index}>
                {findArticle(idArticle)}
            </li>)}
        </ul>
        <h2>Articles</h2>
        <ul>
            {articles.map((article, index)=><li key={index}>
                    <img src={article.image} width='50px'/>
                    <h6>{article.title}</h6>
                    <h4>{article.price} MAD</h4>
                    <button onClick={()=>addArticle(article.id)}>Add to panier</button>
                    <button onClick={()=>removeArticle(article.id)}>Remove</button>
                </li>
            )}
        </ul>
    </>
}
import { ADDARTICLE, REMOVEARTICLE } from "./types"

export const addArticle_action = (id) => {
    return {
        type: ADDARTICLE,
        payload: id
    }
}
export const removeArticle_action = (id) => {
    return {
        type: REMOVEARTICLE,
        payload: id
    }
}
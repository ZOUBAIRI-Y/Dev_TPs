const initialState = []
const Reducer = (state = initialState, action)=> {
    var tvshow = []
    if (action.type === 'Add_favorites') {
        tvshow = [...tvshow, action.playload]
        // console.log(tvshow)
        return {tvshow: tvshow}
    }
    if (action.type === 'deleteTVshow') {
        tvshow.splice(1,1)
        return {tvshow: tvshow}
    }
    else {
        return state;
    }
}
export default Reducer;
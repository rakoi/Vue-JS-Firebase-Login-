import axios from 'axios';
const state={
    articles:{}
};

const getters={
    articles:(state)=>state.articles,
    
};

const actions={
    async fetArticles({commit}){
        const response=await axios.get('https://newsapi.org/v2/everything?q=corona&apiKey=d5bda3d1dae143d7acb4045d3eab8e62');
     
        commit('setArticles',response.data.articles)
        console.log(state.articles)
    }
};

const mutations={
    setArticles:(state,data)=>(state.articles=data)

   
};


export default{
    state,
    getters,
    actions,
    mutations
}
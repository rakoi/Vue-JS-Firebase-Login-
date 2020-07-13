import axios from 'axios';

const state={
    countryStats:{},
    graphLabels:[],
    graphData:[],
    countryNames:[],
    globalStatus:{}
};

const getters={
        countryStats:(state)=>state.countryStats,
        graphLabels:(state)=>state.graphLabels,
        graphData:(state)=>state.graphData,
        countryNames:(state)=>state.countryNames,
        globalStatus:(state)=>state.globalStatus
};

const actions={
    async fetchCountryStat({commit},country){
        const response =await axios.get(`https://api.covid19api.com/total/country/${country}`);
        var length=response.data.length-1;
        var data=response.data[length]
        commit('setcountryStats',data)
    },
    async fetchgraphData({commit},country){
        
        const response=await axios.get(`https://api.covid19api.com/total/country/${country}`);
        let dates=[];
        let confirmed=[];
        for(const data of response.data){
            var formattedDate=(new Date(data.Date).getDay()+1)+' /'+ (new Date(data.Date).getMonth()+1)+' /'+ new Date(data.Date).getFullYear();
            dates.unshift(formattedDate);
            confirmed.unshift(data.Confirmed)
        }
       
        commit('setgraphData',confirmed)
        commit('setgraphLabels',dates)
    },
    async fetchGlobalData({commit}){
        const response=await axios.get(`https://api.covid19api.com/summary`);
        const countryNames=[];
        for(const data of response.data.Countries){
            countryNames.unshift(data.Country)
        }
      
        commit('setCountries',countryNames)
        commit('setGlobalStatus',response.data)
        
    }
    
};


const mutations={
    setcountryStats:(state,stats)=>(state.countryStats=stats),
    setgraphLabels:(state,graphLabels)=>(state.graphLabels=graphLabels),
    setgraphData:(state,graphData)=>(state.graphData=graphData),
    setCountries:(state,countryNames)=>(state.countryNames=countryNames),
    setGlobalStatus:(state,globalstatus)=>(state.globalStatus=globalstatus)
};

export default{
    state,
    getters,
    actions,
    mutations
}
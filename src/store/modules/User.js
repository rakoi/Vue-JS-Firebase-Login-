import firebase from 'firebase'
import router from "../../router/index"; 
const state={
    user:{}
};
const getters={
    loggedInUser:(state)=>state.user
  
  
};

const actions={
    async createUser({commit},credentials){
     
        firebase.auth()
                .createUserWithEmailAndPassword(credentials.email,credentials.password)
                .then(data=>{
                    console.log(data.user)
                     
                    this.$route.router.push({path: '/home'});
                    
                }).catch(error=>{
                    console.log(error)
                });
           
    },
    async loginUser({commit},credentials){
        
        
        firebase
          .auth()
          .signInWithEmailAndPassword(credentials.email, credentials.password)
          .then(data => {
            
            router.push({path: '/'})
          })
          .catch(err => {
           // toastr.error(err.message);
           
            alert(err.message)
          });
    },
    async logout({commit}){
        
        firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "/"
          });
        });

    },
    async fetchUser({commit}){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                commit('setUser',user);
                
               
            }else{
               
            }
        })
    }
};

const mutations= {
    setUser:(state,user)=>(state.user=user)
};


export default{
    state,
    getters,
    actions,
    mutations
}



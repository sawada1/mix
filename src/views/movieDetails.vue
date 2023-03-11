<template>
    <div class=" movieDetails">
      <div>
       <h2>{{ movie.Title }}</h2>
       <p>{{ movie.Year }}</p>
       <img class="container" :src="movie.Poster" alt="">
       <p class="lorem">{{ movie.Plot }}</p>
      </div>
        
    </div>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios';
export default {
 
 props:['id'],  
  setup(props){
    const movie = ref({});

    const theMovie = async ()=>{
        let result = await axios.get(`http://www.omdbapi.com/?apikey=c54b2482&i=${props.id}&plot=full`);
        console.log(result);
        console.log(result.data);
        movie.value = result.data;
    }
    theMovie();
    

    return{movie}
    }
}

</script>

<style lang="scss" scoped>

.movieDetails{
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    background-color: #444;
    gap: 50px;
    color: #fff;
    min-height: 100vh;
    padding: 30px;
    .lorem{
        width: 100%;
        // padding: 100px;
        font-size: 20px;
        line-height: 40px;
    }
}

</style>
<template>
    <div class="moviesHome">
      <h2><span>vue</span>movies</h2>  
        <div class="landing">
         <div class="text">
          <h3>batman</h3>
          <p>Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit. Facilis dolorem fugit nemo reiciendis 
          dolor voluptates quae consectetur, eos nisi.
           Fuga labore porro itaque delectus rerum. Quisquam animi eligendi error molestiae.</p>
         </div>
      
        </div>
        <div class="container search">
           <input type="text" v-model="search" placeholder="what are you looking for">
           <button @click="getthemovie" class="btn btn-success">search</button>
         </div>
         <div class=" allmovies">
          <div class="themovie" v-for="movie in movies">
          <router-link :to="{name:'movieDetails' , params:{id: movie.imdbID}}">
            <img :src="movie.Poster" alt="">
          </router-link>
          <span class="bg-success">{{ movie.Type }}</span>
          <p>{{ movie.Year }}</p>
          <h3>{{ movie.Title }}</h3>
          </div>
        
    </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios';
export default {
 
  setup(props){
   let movies = ref([]);
   let search = ref(null);

   let getthemovie = async ()=>{
    let result = await axios.get(`https://www.omdbapi.com/?apikey=c54b2482&s=${search.value}`);
    console.log(result);
    console.log(result.data);
    movies.value = result.data.Search;
   }

    
    return{search , movies , getthemovie}
    }
}
</script>

<style lang="scss" scoped>
*{
    text-align: center;
}
h2{
text-align: center;
color: #fff;
padding: 30px;
span{
    color: green;
}
}
.moviesHome{
    background-color: #444;
    min-height: 100vh;
    // padding: 30px;

    .landing{
        color: #fff;
        background-image: url('https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
        background-size: cover;
        background-position: 5% 5% 5%; 
        height: 550px;
     .text{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        background-color: #0000003c;
        padding: 30px;
        justify-content: flex-end;
        width: 100%;
        height: 70%;
        p{
            width: 70%;
        }
     }
    }
    .search{
        margin-top: 40px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
        gap: 30px;
        input{
            border: none;
            outline: none;
            border-radius: 20px;
            width: 70%;
            padding: 15px;
            font-size: 18px;
        }
        button{
         font-size: 20px;
        }
    }
    .allmovies{
        display: grid;
        grid-template-columns: repeat(2 , 1fr);
        gap: 50px;
        width: 100%;
        .themovie{
            background-color: #fff;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.411);
            height: fit-content;
        //    margin: 100px 20px;
            margin: 30px;
           display: flex;
           border-radius: 20px;
           flex-direction: column;
           cursor: pointer;
           p{
            color: gray;
            margin-top: 20px;
           }
            img{
                width: 100%;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
                object-fit: cover;
                // height: 100%;
                
            }
            span{
                padding: 10px;
                font-size: 20px;
                color: #fff;
            }

        }
    }
}


// @media (max-width: 1115px){
//     .moviesHome{
//         .allmovies{
//             grid-template-columns: repeat(2 , 1fr);
//         }
//     }
// }
// @media (max-width: 920px){
//     .moviesHome{
//         .allmovies{
//             .themovie{
//                 height: 420px;
//             }
//         }
//     }
// }
@media (max-width: 800px){
    .moviesHome{
        width: 100%;
        .allmovies{
            width: 100%;
            grid-template-columns: repeat(1 , 1fr);
            // margin-bottom: 100px;
            padding: 50px;
            gap: 50px;
            margin: 0;
            .themovie{
                margin: 0;
                width: 100%;
                height: 100%;
                padding: 20px;
                // margin: 50px 0px;
            }
        }
    }
}


@media(max-width:650px){
    .moviesHome{
        .landing{
            background-position: 50%;
            .text{
                width: 100%;
                height: 100%;
                p{
                    width: 100%;
                }
            }
        }
    }
}


</style>
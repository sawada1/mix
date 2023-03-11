<template>
    <div class="mainApp" :class="{'cold': temp < 16,'warm': temp > 16}" >
    <div class="inp">
        <input type="text"  @keypress.enter="getTheWeather()"  placeholder="search here ..." v-model="query">
       <div class="themainWeather" v-if="theWeather.main != undefined">
        <div class="text1">
         <h3>{{ theWeather.name }} , <span>{{ country }}</span></h3>
         <p>{{ dateBuilder() }}</p>
        </div>
        <div class="degree">
           <h2><span>{{ temp }}</span>°c</h2>
           <h4>{{ theWeather.weather[0].main }}</h4>

          </div>
       </div>
    </div>
    <h2 class="error" v-if="errmessage">{{ errmessage }}</h2>
    </div>
</template>

<script>
import {ref , onMounted} from 'vue';
import axios from 'axios'
export default {
    setup(){
     let query = ref(null);
    let country = ref(null);
     let theWeather = ref({});
     let temp = ref(null);
    let errmessage = ref(null);

     const getTheWeather = async () =>{
        let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query.value}&units=metric&APPID=85f85b10d692a8bfc2736f9af172e8e0`);
        // console.log(result.data);
        try{
            if(result.status == 200){
            theWeather.value = result.data;
        console.log(theWeather.value);
        // console.log(theWeather.value.response.data);
        console.log( Math.floor(theWeather.value.main.temp));
        country.value = theWeather.value.sys.country;
        temp.value = Math.floor(theWeather.value.main.temp);
        // errmessage.value = `city not found`;
        } else{
            console.log( result.response.data.message);
           
        }
        } catch(e){
            console.log(e);
        }
        
     
     }

     const dateBuilder =  () => {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }

     return{query , getTheWeather , temp, theWeather , country , dateBuilder , errmessage}
    }
}
</script>

<style lang="scss">
.mainApp{
    min-height: 100vh;
    // min-width: 100vw;
    // background-image: url('../assets/cold-bg.jpg');
    // background-repeat: no-repeat;
    // background-size:cover;
    // background-position: bottom;
    background-color: skyblue;
    padding: 25px;
    // padding: 100px;
    &.cold{
        background-image: url('../assets/cold-bg.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: bottom;
    }
    &.warm{
        background-image: url('../assets/warm-bg.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: bottom;
    }
   .inp{
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    input{
        width: 100%;
        padding: 20px;
        font-size: 20px;
        outline: none;
        border: none;
        border-radius: 20px;
    }
   }

       .themainWeather{
        margin-top: 100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        color: #fff;
        .text1{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            h3{
                font-size: 45px;
              
            }
            p{
                font-size: 30px;
                color: gray;
            }
        }
        .degree{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            h2{
                font-size: 70px;
            }
            h4{
                font-size: 40px;
            }
        }
       }
       .error{
        color: tomato;
        font-size: 50px;
       }
}


</style>
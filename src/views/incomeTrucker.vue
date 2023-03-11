<template>
    <div>
       <div class="nav">
       <h1 style="font-size: 25px;">income tracker</h1>
       <span>${{ theTotal }}</span>
       </div>
       <div class="w-100 d-flex justify-content-center">
        <div class="theinput">
        <form action="" @submit.prevent>
         <input type="text" v-model="des" placeholder="income description ..." required>
        <input type="number" v-model="num" placeholder="income value ..." required>
        <input type="date" v-model="date" required>
        <button @click="getincome">submit</button>  
        </form>
      
       </div>  
       </div>

       <div class="allboxes" >
        <div class="box"  v-for="(thedata , index) in theincome">
        <div class="text1">
            <span @click="deleteitem(thedata.id)">delete</span>
        <h3>{{ thedata.des }}</h3>    
        </div>
          <div class="text2">
           <span>${{ thedata.value }}</span>
           <span>{{ thedata.date }}</span>
          </div>
    
        </div>
     
       </div>
       
    </div>
</template>

<script>
import{ref, computed , onMounted} from 'vue'
import {useStore} from 'vuex'
export default {
    setup(){

         const store = useStore();

        let date = ref("");
        let des = ref("");
        let num = ref("");
    



         let theincome = ref(JSON.parse(localStorage.getItem('theincome')));
         
         let theTotal = ref(JSON.parse(localStorage.getItem('theincome')) == null ? 0 : JSON.parse(localStorage.getItem('theincome')).map((e)=>e.value).reduce((x,y)=>x+y,0));
        //  let theTotal = ref(0);

       let arr = [];

        const getincome = ()=>{
            if(des.value != "" && num.value != "" && date.value != ""){
                let data = {
             id: Date.now(),
               des: des.value,
                value: num.value,
                date: date.value,
         }
         store.commit('getIncome',data);
         theincome.value = JSON.parse(localStorage.getItem('theincome'));
             des.value = "";
             date.value = "";
             num.value = "";
             theTotal.value = JSON.parse(localStorage.getItem('theincome')) == null ? 0 : JSON.parse(localStorage.getItem('theincome')).map((e)=>e.value).reduce((x,y)=>x+y,0);
            } 
     
          
        }


        onMounted(()=>{
            console.log(theincome.value);
        });

        const deleteitem = (index)=>{
        //    store.commit('deleteitem' , index);
           let arr = theincome.value;
        arr = arr.filter(v => v.id != index);
        localStorage.setItem('theincome', JSON.stringify(arr));
        theincome.value = JSON.parse(localStorage.getItem('theincome'));
        theTotal.value = JSON.parse(localStorage.getItem('theincome')) == null ? 0 : JSON.parse(localStorage.getItem('theincome')).map((e)=>e.value).reduce((x,y)=>x+y,0);
        }

        return{ des , date , num , getincome , theTotal , theincome , deleteitem}
    }
}

</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    color: #fff;
    background-color: #333;
    border-bottom: 8px solid rgb(199, 199, 41);
    span{
        background-color: rgb(199, 199, 41);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22px;
        
    }
}
.theinput{
    width: 90%;
    form{
        width: 100%;
    margin: 50px 0px;
    display: flex;
    align-items: center;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.469);
    background-color: #ccc;
    justify-content: space-between;
    input{
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 18px;
    }
    button{
        border: none;
        background-color:rgb(199, 199, 41);
        padding: 20px;
        color: #fff;
        font-size: 20px;
        border-radius: 30px;
        cursor: pointer;
    }
    }
   
}

.allboxes{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 80%;
    margin: 20px auto;
    .box{
        width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 30px;
     background-color: #ccc;
     border-radius: 30px;
     box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.444);
     text-align: center;
     .text1{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 40px;
        span{
            background-color: tomato;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            color: #fff;
            font-size: 20px;
        }
     }
     .text2{
        display: flex;
        align-items: center;
        gap: 40px;
        span{
            font-size: 25px;
        }
     }
    }
}
@media (max-width:930px){
    .theinput{
        width: 90%;
        form{
            width: 100%;
            flex-direction: column;
        gap: 50px;
      input{
        background-color: #fff;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        }
    
      }
    }
}
// @media (max-width:780px){
//     .allboxes{
//         width: 600px;
//     }
// }


@media (max-width:660px){
    .allboxes{
        .box{
            // gap: 70px;
            flex-direction: column;
            .text1{
                flex-direction: column;
                width: 100%;
                span{
                    width: 100%;
                }
            }
            .text2{
                width: 100%;
                flex-direction: column;
            }
       
        }
    }
}
</style>
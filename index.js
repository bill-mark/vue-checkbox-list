<template>
<div class="allchose_wrap">
   <div class="list_title" v-if="initname">{{initname}}</div>
   <div class="list_chose">
        <div  class="list_box" @click="show_secondlist">  
            {{names}}        
        </div>
        <div class="cover" @click="close_secondList" v-show="is_show"></div>
        <div  :class="['apps_chose_list_wrap']"  v-show="is_show">
               <div class="apps_chose_list" >
                   <div v-for="item in initlist" style="display:flex;height:25px">
                         <input type="checkbox" :id="item.id" :value="item.id" v-model="item.state">
                         <label  :for="item.id" >
                              <div class="label" :title=item.name>
                                  {{item.name}}
                              </div>
                         </label>
                   </div>
               </div>
        </div> 
   </div>
</div>   
</template>
<script >
export default{
  props:{
     'initlist':Array,
     'initname':'',
     'inittype':'',
  },
  data(){
      return{
         is_show:false,
         names:'全选',
         initlist_checked:[]
      }
  },
  mounted(){
  },
  watch:{
        initlist_checked:{
          handler:function(){
                  if(this.initlist_checked.length == 0 || this.initlist_checked.length ==this.initlist.length){
                    this.names = '全选'
                    return
                  }
                  let name_array = []
                  this.initlist_checked.forEach( v=>{
                          name_array.push(v.name)
                  })
                  this.names = name_array.join(',')
          },
          deep:true
        },
        initlist:{
          handler:function(){
            //全选
            if(this.initlist[0].state == true && this.initlist[0].last_state == false){
              this.initlist.forEach(v=>{
                v.state = true
              })
              this.initlist[0].last_state = true  
                
              return
            }
            //去掉全选
            if(this.initlist[0].state == false && this.initlist[0].last_state == true){
              this.initlist.forEach(v=>{
                v.state = false
              })
              this.initlist[0].last_state = false
              
              return
            }   

            this.initlist_checked = []
            this.initlist_checked = this.initlist.filter( (item,index)=>{           
                return item.state == true
            })

            //子达到全选
            if(this.initlist[0].state == false && (this.initlist_checked.length == this.initlist.length-1)){
                    this.initlist[0].state = true 
                    this.initlist[0].last_state = true
                 
                    return
            }

            //全选去掉子
            if(this.initlist[0].state == true && (this.initlist_checked.length == this.initlist.length-1)){
                    this.initlist[0].state = false 
                    this.initlist[0].last_state = false
                   
                    this.initlist_checked = []
                    return
            }
            
          },
          deep:true
        }
  },
  methods:{
    show_secondlist(){   //展开列表          
           this.is_show = true 
    },
    close_secondList(data){ //取消选择---关闭列表    
           if(localStorage.appmanager_choose == undefined){
              var allchose_ee =  []
           }else{
              var allchose_ee = JSON.parse(localStorage.appmanager_choose)
           }
           
           var allchose_ff = localStorage.portal_id
           allchose_ee[allchose_ff] = this.initlist_checked
           localStorage.appmanager_choose  = JSON.stringify(allchose_ee) 

           this.is_show = false         
           var allchose_cc = []
           this.initlist_checked.forEach( v=>{
              if(v.name != '全选') {
                allchose_cc.push(v.id)
              }
           })
           this.$emit('has_checked',allchose_cc,this.inittype)
    },
  }
}
</script>

<style lang="scss" scoped>
 .allchose_wrap{
    display: flex;
    margin-left: 32px;
    .list_title{
        margin-top:5px;
        font-size: 12px;
        color: #666;
    }
    .list_chose{                   
        width:138px;
        height:26px;
        margin-left: 10px;
        margin-top: 0px;
        background-color: white;
        border: 1px solid #ddd;
        color:#666;
        outline: none;
        border-radius:2px;
        .list_box{
           word-wrap: break-word;
           display: inline-block;
           padding-left: 10px;
           margin-top: 4px;
           width: 136px;
           height: 20px;
           overflow: hidden;
           padding-right: 14px;
           background-image: url(/static/下拉.png);
           background-size: 6px 14px;
           background-repeat: no-repeat;
           background-position: 126px 2px;
           font-size: 12px;
           color: #333;
        }
        .cover{
          background: white;
          opacity: .01;
          position: fixed;
          z-index:5;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .apps_chose_list_wrap{
            height:180px;
            position:relative;
            background-color:white;
            z-index:100;
            border-radius:2px;
            border:1px solid #e5e5e5;
            box-shadow: 0px 0px 1px 1px #e5e5e5;
            margin-top:-8px;
            .apps_chose_list{
               position: absolute;
               z-index: 100;
               margin-top: 0px;
               background: white;
               border-radius: 4px;
               padding-top: 10px;
               margin-left: 10px;
               max-height: 175px;
               overflow-y: scroll;
               .label{
                 width:104px;
                 height:17px;
                 overflow:floow;
                 white-space:nowrap;
                 margin-top:-2px;
                 margin-left:4px;
                 font-size:12px;
                 color: #3a2c2c;
               }
            }           
        }       
      }
 } 
</style>









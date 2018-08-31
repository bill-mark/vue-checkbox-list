# vue-checkbox-list
vue 多选下拉框插件( a  plugin for vue checkbox list)

使用方法(.vue单文件):
1.npm install vue-checkbox-list --save

2.在.vue文件中
  import allchose from 'vue-checkbox-list'

					    		<allchose :initlist="category" :initname="category_name" 
					    		          :inittype="category_type" @has_checked="get_selected">
				          </allchose>

参数说明:
    initlist:传入的参数数组,要传json格式,ajax获得的数据最好先转成string再转成json
    initname:下拉框标题,没有可不传
    inittype:使用多个多选下拉框可传不同参数,用来彼此区分
    has_checked:选择结束回调函数
    
    initlist格式为数组对象,比如:
    [
      {id:0,last_state:false,name:'全选',state:false},
      {app_num:3,id:28,name:"test1",state:false,status:1},
      {app_num:1,id:29,name:'test2',state:false,status:2}
    ]
    每个对象的id属性必填,state默认为false,全选对象多个laststate,默认false
    
   
ENGLISH:
Usage (.Vue single file):

1.npm install vue-checkbox-list --save



2. in the.Vue file

Import allchose from'vue-checkbox-list'



<allchose: initlist= "category": initname= "category_name"

Inittype= "category_type" @has_checked= "get_selected" >

</allchose>



Parameter Description:

Initlist: An incoming array of parameters, in JSON format, the data obtained by AJAX is best converted to string and then to JSON

Initname: drop-down box title is not allowed.

Inittype: uses multiple multiple drop down boxes to transfer different parameters to distinguish one from one another.

Has_checked: selects the end callback function.



Initlist is an array object, for example:

[

{id:0, last_state:false, name:', state:false},

{app_num:3, id:28, name: "test1", state:false, status:1},

{app_num:1, id:29, name:'test2', state:false, status:2}

]

The ID attribute of each object is required, state is false by default, multiple laststate of the selected object, default false.

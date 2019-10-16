<template>
    <div>
        用户名：<input v-model="uname" type="text">
        密码：<input v-model="upwd" type="text">
        <input type="button" value="登录" @click="login" name="" id="">
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
            var reg=/^\w{3,12}$/i;
            if(reg.test(this.uname) && reg.test(this.upwd)){
                this.axios.get("login",{
                    params:{
                        uname:this.uname,
                        upwd:this.upwd
                    }
                }).then(response=>{
                    console.log(0);
                    if(response.data.code==1){
                        console.log(1)
                    }else{
                        console.log("-1")
                    }
                })
            }else{
                console.log("消息","用户名或密码错误")
                return
            }
        }
    }
}
</script>
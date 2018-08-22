<template>
    <div id="regist">
          <HeaderTab></HeaderTab>  
        <group>
            <x-input title="" name="mobile" placeholder="请输入手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
            <x-input title="" type="text" placeholder="请输入验证码" v-model="code" required>
                <x-button :gradients="['#1D62F0', '#19D5FD']" slot="right" type="primary" mini :disabled="getCode.disabled" @click.native="handleGetCode" style="width: 100px;">{{getCode.txt}}</x-button>
            </x-input>
            <x-input title="" type="password" placeholder="请设置登录密码" v-model="password" :min="6" :max="16" required></x-input>
            <x-input title="" type="password" placeholder="确认密码" v-model="passwordC" :min="6" :max="16" required></x-input>
        </group>
        <p><span></span></p>
        <box gap="10px 25px">
            <x-button :gradients="['#1D62F0', '#19D5FD']" type="primary" @click.native="handleRegist">注册</x-button><!--fetchDatas,  -->
        </box>
        <p>
            <router-link to="/Login" class="p-router">已有账号？去登录</router-link>
        </p>
          <loading v-model="showLoading" :text="loadText"></loading>
    </div>
</template>

<script>
    import HeaderTab from '@/components/header.vue';
   import {Loading,XInput,Box,Group,XButton} from 'vux';
//   import axios from '@/components/ajax.vue';
    export default {
        name: 'regist',
        data() {
            return {
                mobile: '', //手机号
                code: '', //验证码
                password: '', //密码
                passwordC: '', //确认密码
                getCode: {
                    txt: '获取验证码',
                    disabled: false,
                },
                showLoading: false,
                loadText: '请稍等',
            }
        },
        mounted:function(){
           
        },
        methods: {
            //获取接口
            fetchDatas: async function (mobile, password) {
                let params = {
                mobile: '15122667367',
                password: '111111',
                };
                const res = await this.http.get(this.api.container, params);//获取成功
                if (res.status == 200) {
                this.getpage = res.data.data;
                this.pagedata = this.getpage.records;
                this.total = this.getpage.total;//拿到总条数
                } else {
                const dataError = await this.http.get(this.api.error, params);//获取失败
                if (dataError.status != 200) {
                    console.info(dataError);
                }
                }
            },
            handleGetCode() {
                if(this.mobile) {
                    this.getCode.disabled = true;
                    this.getCode.txt = '获取中...';
                    let seconds = 60;
                    let self = this;
                    let time = setInterval(function() {
                        --seconds;
                        self.getCode.txt = seconds + 's';
                        if(seconds <= 0) {
                            clearInterval(time);
                            self.getCode.disabled = false;
                            self.getCode.txt = '获取验证码';
                        }
                    }, 1000)
                } else {
                    this.$vux.toast.text('请先填写手机号');
                }
            },
            handleRegist() {
                if(!this.mobile || !this.code || !this.password || !this.passwordC) {
                    this.$vux.toast.text('您有未填项，不能注册')
                } else if(this.password != this.passwordC) {
                    this.$vux.toast.text('两次输入的密码不一致')
                } else {
                      this.$vux.toast.text('注册成功')
                      this.$router.push({name:'Login'})
                } 
                
            }
        },
        created() {
            window.document.title = '注册';
             //获取接口
        },
        components: {
            XInput,
            XButton,
            Group,
            Box,
            HeaderTab,
           Loading
        } 
    }
</script>
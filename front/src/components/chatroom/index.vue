<template>
    <div class="chatroom">
        <el-container>
            <el-aside style="background-color: #E9EEF3;width: 150px">
                <ul>
                    <li>聊天室</li>
                    <li>
                        <ul>
                            <li>今日有约聊天室</li>
                            <li>聊天室测试1</li>
                        </ul>
                    </li>
                    <li>好友</li>
                    <li>
                        <ul>
                            <li>老王</li>
                            <li>老李</li>
                        </ul>
                    </li>
                </ul>
            </el-aside>
            <el-main>
                <el-container>
                    <el-header>
                        <el-row type="flex">
                            <el-col :span="6"><div>今日有约聊天室</div></el-col>
                        </el-row>
                    </el-header>
                    <el-container>
                        <el-aside width="200px">
                            <ul>
                                <li>用户列表</li>
                                <li>
                                    <ul>
                                        <el-popover
                                                v-for="(item, i) in userList" :key="i"
                                                placement="right"
                                                width="400"
                                                trigger="click"
                                        >
                                            <!--弹出框-->
                                            <div class="userInforBox" >
                                                <div style="font-size: 20px;">
                                                    <!--头像-->
                                                    <div style="height: 50px;width: 50px;display: inline-block">
                                                        <img :src="item.avatar" alt="" style="border-radius:50%;height: 100%;width: 100%">
                                                    </div>
                                                    {{item.userName}}
                                                </div>
                                                <div>
                                                    <p>{{item.signature}}</p>
                                                </div>
                                                <div>
                                                    <p>
                                                        <svg class="icon" aria-hidden="true">
                                                            <use xlink:href="#icon-user"></use>
                                                        </svg>
                                                        {{item.sex}} {{item.age}}岁 {{item.constellation}} {{item.region}}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        <i class="el-icon-goods"></i>
                                                        爱好： {{item.hobby}}
                                                    </p>
                                                </div>
                                            </div>
                                            <!--用户名-->
                                            <li slot="reference" @click="actived(i)" :class=" num == i ? 'userList actived' : 'userList' " >{{item.userName}}</li>
                                        </el-popover>
                                    </ul>
                                </li>
                            </ul>

                        </el-aside>
                        <el-main>
                            <div class="allMsg">
                                <!--消息列表-->
                                <div v-for="(item,i) in msgList" :key="i">

                                    <!--用户名-->
                                    <div v-if="item.userName !== my.myName" class="user">
                                        <p>{{item.userName}}</p>
                                    </div>
                                    <div v-else class="user rightUser">
                                        <p>{{item.userName}}</p>
                                    </div>

                                    <!--聊天气泡-->
                                    <div v-if="item.userName !== my.myName" class="box">
                                        <div class="contentImg">
                                            <img :src="item.avatar" alt="" style="border-radius:50%;height: 100%;width: 100%">
                                        </div>
                                        <div class="content leftContent">
                                            <span>{{item.msg}}</span>
                                        </div>
                                    </div>

                                    <div v-else class="box rightBox">
                                        <div class="contentImg">
                                            <img :src="item.avatar" alt="" style="border-radius:50%;height: 100%;width: 100%">
                                        </div>
                                        <div class="content rightContent">
                                            <span>{{item.msg}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-main>
                    </el-container>

                    <div class="msg-box">
                        <el-form ref="form" :model="form" label-width="80px" style="border: 1px solid lavender;">
                            <!--消息输入框-->
                            <textarea class="msgInputer" resize="none" :rows="10" type="textarea" @keyup.enter.native="submit" v-model="form.msg"></textarea>
                            <el-row type="flex" class="row-bg" justify="end" style="">
                                <el-button type="primary" @click="form.msg = ''">清空</el-button>
                                <el-button type="primary" @click="submit">发送</el-button>
                            </el-row>

                        </el-form>
                    </div>
                </el-container>
            </el-main>

        </el-container>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                num: null,
                my: {
                    myName: "曹金鹏",
                    avatar: require("../../../public/avatar.jpg")
                },
                msgList: [
                    {
                        userName: "老A",
                        msg: "消息1",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老B",
                        msg: "消息2",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老B",
                        msg: "消息3",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "曹金鹏",
                        msg: "消息4",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老D",
                        msg: "消息5",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老D",
                        msg: "特别长的消息测试特别长的消息测试特别长的消息测试特别长的消息测试特别长的消息测试特别长的消息测试",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老D",
                        msg: "消息7",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老D",
                        msg: "消息8",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老D",
                        msg: "消息9",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老D",
                        msg: "消息10",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                    {
                        userName: "老D",
                        msg: "消息11",
                        avatar: require("../../../public/avatar.jpg"),
                    },
                ],
                userList: [
                    {
                        userId: "1287861672",
                        userName: "曹金鹏",
                        avatar: require("../../../public/avatar.jpg"),
                        signature: "签名测试",
                        sex: "男",
                        age: 21,
                        constellation: "双子座",
                        region: "天津河西",
                        career: "程序猿",
                        hobby: "羽毛球 里里",
                    },
                    {
                        userId: "123456",
                        avatar: require("../../../public/avatar.jpg"),
                        userName: "老A",
                        signature: "签名测试",
                        sex: "这个人没有透露性别",
                        age: "这个人没有透露年龄",
                        constellation: "这个人没有透露星座",
                        region: "这个人没有透露地区",
                        career: "这个人没有透露职业",
                        hobby: "这个人没有透露爱好",
                    },
                    {
                        userId: "1234567",
                        avatar: require("../../../public/avatar.jpg"),
                        userName: "2B",
                        signature: "签名测试",
                        sex: "这个人没有透露性别",
                        age: "这个人没有透露年龄",
                        constellation: "这个人没有透露星座",
                        region: "这个人没有透露地区",
                        career: "这个人没有透露职业",
                        hobby: "这个人没有透露爱好",
                    },
                    {
                        userId: "12345678",
                        avatar: require("../../../public/avatar.jpg"),
                        userName: "3C",
                        signature: "签名测试",
                        sex: "这个人没有透露性别",
                        age: "这个人没有透露年龄",
                        constellation: "这个人没有透露星座",
                        region: "这个人没有透露地区",
                        career: "这个人没有透露职业",
                        hobby: "这个人没有透露爱好",
                    },
                    {
                        userId: "123456789",
                        avatar: require("../../../public/avatar.jpg"),
                        userName: "狗蛋",
                        signature: "签名测试",
                        sex: "这个人没有透露性别",
                        age: "这个人没有透露年龄",
                        constellation: "这个人没有透露星座",
                        region: "这个人没有透露地区",
                        career: "这个人没有透露职业",
                        hobby: "这个人没有透露爱好",
                    },
                ],
                form: {
                    msg: "",
                },
            }
        },
        methods: {
            actived(n){
                this.num = n;
            },
            submit() {
                this.msgList.push({userName: this.my.myName,msg: this.form.msg, avatar: this.my.avatar});
                this.form.msg = "";
            },
            // getData
        },
        created() {

        },
        mounted() {
            let box = document.getElementsByClassName("el-main")[1];
            box.scrollTop = box.scrollHeight + 61;
        },
        updated() {
            let box = document.getElementsByClassName("el-main")[1];
            box.scrollTop = box.scrollHeight + 61;
        }
    }
</script>

<style scoped lang="scss">
    ul,li{
        list-style:none
    }
    p{
        margin: 0;
        padding: 0;
    }
    .chatroom {
        ul,li {
            padding: 5px 10px 5px 10px;
        }
        .el-header {
            line-height: 60px;
            div {
                color: cornsilk;
            }

        }
        .userList {
            font-size: 5px;
        }
        .actived {
            background-color: #B3C0D1;
            color: #333;
        }
        .allMsg {
            height: 500px;
            .box {
                display: flex;
                align-items: flex-start;
            }
            .rightBox {
                flex-direction: row-reverse;
            }

            .user {
                font-size: 5px;
                padding: 5px;
                margin: 5px;
            }
            .rightUser {
                display: flex;
                flex-direction: row-reverse;
            }
            .content {
                position: relative;
                border-radius: 5px;
                padding: 10px;
                width:fit-content;
                margin: {
                    bottom: 5px;
                }
                background: {
                    color: aliceblue;
                }
            }
            .contentImg {
                width: 50px;
                height: 50px;
                margin: 0 10px 0 10px;
            }
            .leftContent {
                &:before {
                    content: '';
                    position: absolute;
                    top: 25px;
                    z-index: 10;
                    /*border: solid transparent;*/
                    /*border-width: 8px 10px;*/
                    border: 8px solid aliceblue;
                    border-top-color: transparent;
                    border-left-color: transparent;
                    border-bottom-color: transparent;
                    left: -15px;
                }
            }
            .rightContent {
                &:after {
                    content: '';
                    position: absolute;
                    top: 25px;
                    z-index: 10;
                    /*border: solid transparent;*/
                    /*border-width: 8px 10px;*/
                    border: 8px solid aliceblue;
                    border-top-color: transparent;
                    border-right-color: transparent;
                    border-bottom-color: transparent;
                    right: -15px;
                }
            }
        }
        .msg-box {
            background-color: #fff;
        }
        .msgInputer {
            border: 0;
            resize:none;
            width: 99%;
        }

        .msgInputer:focus {
            outline: none;
        }

        .el-header, .el-footer {
            background-color: #B3C0D1;
            color: #333;
        }
        .el-aside {
            background-color: #D3DCE6;
            color: #333;
        }

        .el-main {
            padding: 0;
            background-color: #E9EEF3;
            color: #333;
        }
    }

</style>
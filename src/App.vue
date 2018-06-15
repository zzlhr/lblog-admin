<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-header"
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="Home">博客后台管理系统</el-menu-item>
                    <el-menu-item class="right-menu-item" index="3">我的</el-menu-item>
                    <el-menu-item class="right-menu-item" index="4">消息</el-menu-item>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                            router
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu v-for="(menuItem, index) in leftMenu" :index="menuItem.menuIndex">
                            <template slot="title" :tabindex="menuItem.menuIndex">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{ menuItem.menuName }}</span>
                            </template>
                            <el-menu-item v-for="(item, i) in menuItem.menuItems" @click="jump(item)" :data-key="item.itemName"
                                          :index="item.itemIndex">
                                          {{ item.itemName }}
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <component :is="link"></component>
                    </el-main>
                    <el-footer>Copyright © 2018, Content By lhr 保留所有权利.</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import ArticleList from './components/article/List'
    import ArticleStatistics from './components/article/statistics'
    import ArticleComment from './components/article/comment'
    import Home from "./components/Home";
    export default {
        components: {Home, ArticleList, ArticleStatistics, ArticleComment},
        data() {
            return {
                link: 'Home',
                leftMenu: [
                    {
                        menuIndex: 'article',
                        menuName: '文章管理',
                        menuItems: [
                            {
                                itemIndex: 'ArticleList',
                                itemName: '文章列表'
                            },
                            {
                                itemIndex: 'ArticleStatistics',
                                itemName: '访客统计'
                            },
                            {
                                itemIndex: 'ArticleComment',
                                itemName: '留言管理'
                            }
                        ]
                    },
                ],
                activeIndex: 'Home',
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                // this.addTab(key)
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            jump(item){
                this.$set(this.$data, 'link', item.itemIndex)
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        height: 100%;
    }

    .el-header {
        background-color: rgb(84, 92, 100);
    }

    .el-container {
        height: 100%;
    }

    .el-aside {
        background-color: rgb(84, 92, 100);
    }

    .el-menu {
        border-right: solid 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .el-pagination, .el-footer {
        text-align: center;
    }

    .right-menu-item {
        float: right !important;
    }
</style>

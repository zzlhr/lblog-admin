/**
 *  加载模块
 */


import ArticleList from '../components/article/List'
import ArticleStatistics from '../components/article/statistics'
import ArticleComment from '../components/article/comment'

const routes = [
    {
        path: '/article',
        component: ArticleList,
        children: [
            {
                path: 'list',
                component: ArticleList
            },
            {
                path: 'comment',
                component: ArticleComment
            },
            {
                path: 'statistics',
                component: ArticleStatistics
            }
        ]
    }
];

export  default  routes


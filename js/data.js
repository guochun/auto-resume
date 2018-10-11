;(function() {
    var data = `
    /*
    * 面试官你好 我是郭纯
    * 我以动画的形式来介绍我自己
    * 只用代码的形式太过单调
    * 我就用代码的形式来介绍
    * 首先准备一些样式
    */

    /* 现在添加一些基本的样式 */
    html {
        background: rgb(222,222,222);
        font-size: 16px;
    }
    #code {
        border: 1px solid red;
        padding: 16px;
    }

    /* 让代码高亮 */
    .token.punctuation {
        color: #999;
    }
    .token.selector {
        color: #690;
    }
    .token.property {
        color: #905;
    }
    .token.function {
        color: #DD4A68;
    }

    /* 添加3D效果 */
    #code {
        transform: rotate(360deg);
    }

    /* 现在开始正式介绍一下我自己*/
    #code {
        position: fixed;
        left: 0;
        width: 50%;
        height: 100%;
       
    }
    #padder {
        position: fixed;
        right: 0;
        width: 50%;
        height: 100%;
        background: black;
        display: flex;
        justify-content: center;
        align-item: center;
        padding: 16px;
     }
     #padder>.content {
        background: white;
        height: 100%;
        width: 100%;
     }
    `
    var mk = `
        #自我介绍
        名字: 郭纯
    `

    window.styleCodeData = data
    window.mkCodeData = mk
})()
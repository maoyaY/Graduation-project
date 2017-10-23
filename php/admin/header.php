<?php 
 header('Content-type:text/html;charset=UTF-8');
?>

    <nav class="navbar navbar-default ">
        <div class="container">
            <div class="navbar-header">
                <a href="../../customer/index/index.html" class="navbar-brand"><img src="../../images/logo.jpg" width="157" height="94"></a>
                <button  type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="../index/index.html">首  页 <span class="sr-only">(current)</span></a></li>
                    <li ><a href="../trade/tradeIndex.html">交易管理</a></li>

                    <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            商品管理<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="../products/products.html">全部</a></li>
                            <li><a href="../products/productHot.html">热销</a></li>
                            <li><a href="../products/productBad.html">滞销</a></li>
                            <li><a href="../products/productOut.html">缺货</a></li>
                        </ul>
                    </li>
                     <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            留言管理<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="../leaveWord/leaveWordHas.html">已回复</a></li>
                            <li><a href="../leaveWord/leaveWordWait.html">未回复</a></li>
                        </ul>
                    </li>
                     <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            故事管理<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="../story/storyShow.html">故事查询</a></li>
                            <li><a href="../story/upStory.html">上传故事</a></li>
                        </ul>
                    </li>

                    <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            信息管理<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="../info/vipInfo.html">会员信息</a></li>
                            <li><a href="../info/customerInfo.html">用户信息</a></li>
                        </ul>
                    </li>
                     <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            系统管理<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="../system/adminShow.html">查看管理员</a></li>
                            <li><a href="../system/addAdmin.html">添加管理员</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

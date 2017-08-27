$(document).ready(function(){
            var bt=$("#nav1 ul");
            var biaoti=$("#nav1 .biaoti");
            console.log(biaoti)
            // biaoti.onclick=function(){
            //     alert(1)
            //     biaoti.find("a").css("color","blue");
            // }
            bt.on("click","li",function(){
                var index=$(this).index();
                
                bt.find("li").find("a").css("color","#fff");
                bt.find("li").eq(index).find("a").css("color","blue")
            })
})

$(document).ready(function(){
	    var logo=$("#nav2 .logo")[0];
	    console.log(logo)
	    var lisbox=$("#nav2 .menu");
	    console.log(lisbox)
	
	    logo.onclick=function(){
//	         alert(1)
	        lisbox.toggleClass("xian");
	    }
})


$(document).ready(function() {
            //轮播图
            var ban=$(".ban1 li");
            // console.log(ban)
            var banner=$(".ban1")[0];

            var ban_prev=$(".banner .prev")[0];
            var ban_next=$(".banner .next")[0];
            var t=setInterval(move, 4000);

            var now=0;
            var next=0;

            function move(){
                next=now+1;
                if(next>=ban.length){
                    next=0;
                }
                
                ban.eq(now).css("display","none").end().eq(next).css("display","block")
                now=next;
            }

            banner.onmouseover=function(){
                clearInterval(t);
            }
            banner.mouseout=function(){
                    t=setInterval(move,4000);
            }

            ban_prev.onclick=function(){
                next=now-1;
                 if(next<0){
                    next=ban.length-1;
                }

                ban.eq(now).css("display","none").end().eq(next).css("display","block")
                now=next;
            }

            ban_next.onclick=function(){
                move();
            }


});


$(document).ready(function() {

    $(window).scroll(function(){  
                    //当点击跳转链接后，回到页面顶部位置  
                    var backup=$("#backup")[0];
                    backup.onclick=function(){  
                        $('body,html').animate({scrollTop:0},1000);  
                    } 
            });
   
});
$(document).ready(function(){
  // banner
   var banner=$(".bnbox")
   var btnone=$(".item")
   var b=$("b",banner)
   var i=$("i",banner)
   var span=$("span",$(".bn-btn"))
   var imgs=$(".br-sn",banner)
   var bnow=0;
   var bnext=0;
   var bt;
   var bannerl=$(".btn-anniu");
   var bannerr=$(".btn-anniu1");
   var bflag=true;
    i.eq(0).css({height:5,background:"#e3101e"})
    btnone.eq(0).css("display","block")
    span.eq(0).css("display","none")
   imgs.css({"zIndex":0,"opacity":0})
   imgs.eq(0).css({"zIndex":50,"opacity":1})
   function bmove(){
    bnext=bnow+1;
    if(bnext==imgs.length){
      bnext=0;
    }
    imgs.eq(bnext).css({"zIndex":50}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1},function(){bflag=true});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext
   }
   function bmove1(){
    bnext=bnow+1;
    if(bnext>=imgs.length){
      bnext=0;
    }
    imgs.css({"zIndex":50,"opacity":0})
    if(bnow%2!=0){
    imgs.eq(bnext).css({"zIndex":52}).end().eq(bnow).animate({"opacity":0.5},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext;
    }
    else{
      imgs.eq(bnext-1).css("opacity",1)
      bnow=bnext;
    }
   
   }
    function bmovel(){
    bnext=bnow-1;
    if(bnext<0){
      bnext=imgs.length-1;
    }
    imgs.eq(bnext).css({"zIndex":50,"opacity":1}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1},function(){bflag=true});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext
   }
   bannerr.click(function(){
      if(bflag){bmove()}
      bflag=false;
   })
    bannerl.click(function(){
      if(bflag){bmovel()}
      bflag=false;
   })
    bth=setInterval(bmove1,2000)
   banner.hover(function(){clearInterval(bth);
   },function(){bth=setInterval(bmove1,2000)
   })
   b.mouseover(function(){
        var index2=b.index($(this));
        console.log(index2)
      i.css({height:3,background:"#fff"})
      btnone.css("display","none")
      span.css("display","block")
     
      i.eq(index2).css({height:5,background:"#e3101e"})
      var index1=Math.floor((index2)/2)
      btnone.eq(index1).css("display","block")
      span.eq(index1).css("display","none")
      imgs.eq(index2).css({"zIndex":50}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
      end().eq(index2).animate({"opacity":1},function(){bflag=true});
      bnow=index2;
   
   })
 //每楼轮播图
  $(".lunbo-box").each(function(index){
    lunbo($(".lunbo-box:eq("+index+")"),$(".lun:eq("+index+") li"))
  })
  function lunbo(a,b){
  var box=a;
  var yuanxing=$(".xfk",a);
  var imgs=b;
  var zuoniu=$(".pre",a);
  var youniu=$(".after",a);
   yuanxing.eq(0).addClass("hot");
   var now=0;
   var t=setInterval(move,2000);
  box.on("mouseover",function(){
    clearInterval(t);
   zuoniu.show();
   youniu.show();
   })
   box.on("mouseout",function(){
    t=setInterval(move,2000)
   zuoniu.hide();
   youniu.hide();
   })
 youniu.on("click",function(){
      move();
  })
 zuoniu.on("click",function(){
    move1();
  })
 yuanxing.each(function(index){
   yuanxing.eq(index).mouseover(function(){
  imgs.fadeOut().eq(index).fadeIn();
  yuanxing.removeClass("hot").eq(index).addClass("hot");
  now=index;
   })
 })
function move(){
  now++;
  if(now==imgs.size()){
    now=0;
  }
  imgs.fadeOut().eq(now).fadeIn();
  yuanxing.removeClass("hot").eq(now).addClass("hot")

}
 function move1(){
    now--;
    if(now<0){
      now=imgs.length-1;
    }
    imgs.fadeOut().eq(now).fadeIn();
  yuanxing.removeClass("hot").eq(now).addClass("hot")
  } 
}
 //送至北京
  $(".beijingbox").hover(function(){
  	$(".xuanxiang").show();
  	$(this).css("background","#fff");
    $(".beijing").css("color","#c00");
  },function(){
  	$(".xuanxiang").hide();
  	$(this).css("background","#f1f1f1");
     $(".beijing").css("color","#888")
  })
var AW=$(".choujiang li").width();
var FLAG=true;
$(".choujiang ul").css("width",AW*$(".choujiang li").length);
$(".iconR").click(function(){
  if(FLAG){
    MOVERR();
    FLAG=false;
  }
})
$(".iconL").click(function(){
  if(FLAG){
    MOVELL();
    FLAG=false;
  }
})
function MOVERR(){
  $(".choujiang ul").animate({left:-AW*3},function(){
    var first=$(".choujiang ul li:first-child");
    $(".choujiang ul").append(first).css("left",0);
    FLAG=true;
  })
}
function MOVELL(){
       var first=$(".choujiang ul li:first-child");
       var last=$(".choujiang ul li:last-child");
       first.insertBefore(last);
    $(".choujiang ul").css("left",-AW*3).animate({left:0},function(){
      FLAG=true;
    })
}
//头部
    function wode(obj1,obj2){
    	obj1.hover(function(){
    	obj2.show();
    	obj1.addClass("biankuang");
      $(".hongzi",obj1).css("color","#c00")
    },function(){
    	obj2.hide();
      obj1.removeClass("biankuang");
       $(".hongzi",obj1).css("color","#666")
    })
    }
    wode($(".wodebox"),$(".wdjd")) //我的京东
    wode($(".shoujibox"),$(".juti"))//手机京东
    wode($(".guanzhubox"),$(".gzjd")) //关注京东
    wode($(".kehubox"),$(".khfw")) //客户服务
    wode($(".wangzhanbox"),$(".wzdh")) //网站导航	
//购物车 
$(".gwc").hover(function(){
  $(".shop").show();
},function(){
  $(".shop").hide();
})
//广告图
$(".changtu i").click(function(){
  $(".changtu").hide();
})
// banner右上
var AWW=$(".gjhezi li").height();
var FLAG1=true;
var T11=setInterval(TOP,2000);
$(".gjhezi ul").css("height",AWW*$(".gjhezi li").length);
$(".guanjun").hover(function(){
  clearInterval(T11);
},function(){
  T11=setInterval(TOP,2000);
})
$(".top").click(function(){
  if(FLAG1){
    TOP();
    FLAG1=false;
  }
})
$(".bottom").click(function(){
  if(FLAG1){
    botttom();
    FLAG1=false;
  }
})
function TOP(){
  $(".gjhezi ul").animate({top:-AWW},function(){
       var first=$(".gjhezi ul li:first-child");
    $(".gjhezi ul").append(first).css("top",0);
    FLAG1=true;
  })
}
function botttom(){
       var first=$(".gjhezi ul li:first-child");
       var last=$(".gjhezi ul li:last-child");
       last.insertBefore(first);
    $(".gjhezi ul").css("top",-AWW).animate({top:0},function(){
      FLAG1=true;
    })
}
//猜你喜欢
$(".cnxh-change").click(function(){
  shift();
})
var nrn=0;
function shift(){
  nrn++;
 if(nrn==$(".cnxh-inner ul").length){
  nrn=0;
 }
 $(".cnxh-inner ul").hide().eq(nrn).show();
}
//晒单
$(".huanyizu a:first-child").click(function(){
  huanzu();
})
var hz=0;
function huanzu(){
 hz++;
 if(hz==$(".sd ul").length){
 hz=0;
 }
 $(".sd ul").hide().eq(hz).show();
}
//每楼选项卡按钮切换
$(".tab-page").each(function(index){
  $(".f2box").eq(index).hover(function(){
    $(".tab-page").eq(index).show();
  },function(){
    $(".tab-page").eq(index).hide();
  })
  $(".tab-page").eq(index).click(function(){
  qiehuan();
  })
  var ss=0;
  function qiehuan(){
  ss++;
 if(ss==$(".f2box:eq("+index+") .content").length){
  ss=0;
 }
 $(".f2box:eq("+index+") .content").hide().eq(ss).show();
 $(".f2box:eq("+index+") .dapai").removeClass("dapaizi-active");
 $(".f2box:eq("+index+") .dapai:eq("+ss+")").addClass("dapaizi-active");
 }
})

//每楼选项卡
$(".f2box").each(function(index){
  $(".f2box:eq("+index+") .dapai:eq("+0+")").addClass("dapaizi-active");
  $(".f2box:eq("+index+") .content:eq("+0+")").css("z-index",10);
  $(".f2box:eq("+index+") .dapai").each(function(index1){
     $(".f2box:eq("+index+") .dapaizi:eq("+index1+")").mouseover(function(){
     $(".f2box:eq("+index+") .content").hide();
     $(".f2box:eq("+index+") .content:eq("+index1+")").show();
     $(".f2box:eq("+index+") .dapai").removeClass("dapaizi-active");
     $(".f2box:eq("+index+") .dapai:eq("+index1+")").addClass("dapaizi-active");   
    })
   })
})
//左导航
var Cheight=document.documentElement.clientHeight;
var n1;
var sign1=true;
$(".floorlist").each(function(index){
  $(".floorlist").eq(index).data("h",$(".floorlist").eq(index).position().top);
})
$(window).on("scroll",function(){
  if(sign1){
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=$(obj).scrollTop(); 
    if(top>=$(".floorlist").eq(0).data("h")-300){
      $(".lcdh").show();
      var nheight=$(".lcdh").height();
       $(".lcdh").css("top",(Cheight-nheight)/2)  
    }
    $(".floorlist").each(function(index){
      if(top>=$(".floorlist").eq(index).data("h")-200){
        $(".floorlist").each(function(index1){
            $(".hander b").eq(index1).hide();
            $(".hander a").css("color","#e3013")
        })
            $(".hander b").eq(index).show();
            $(".hander a").css("color","#777")
        n1=index;
      }
    })
    if(top>200){
      $(".go-back").show();
    }else{
       $(".go-back").hide();
    }
    if(top<$(".floorlist").eq(0).data("h")-600||top>=$(".cuxiao").offset().top-300){
      $(".lcdh").hide();
    }
  }
})
$(".hander").each(function(index){
  $(".hander").eq(index).click(function(){
 sign1=false;
 $(document.body).animate({scrollTop:$(".floorlist").eq(index).data("h")},function(){
  sign1=true;
 });
 $(document.documentElement).animate({scrollTop:$(".floorlist").eq(index).data("h")},function(){
  sign1=true;
 })
 n1=index;
})
  $(".hander").eq(index).hover(function(){
    $(".hander a").eq(index).css("color","#e3101e");
    $(".hander a span").eq(index).css("color","#e3101e");
  },function(){
     $(".hander a").eq(index).css("color","#777");
     $(".hander a span").eq(index).css("color","#777");
  })
})
jQuery.backTop($(".sx-top"),300);  
jQuery.backBottom($(".sx-bottom"),300);  
//banner左侧导航
$(".dh").hover(function(){
  var index=$(".dh").index($(this));
  $(".zhankai").eq(index).show();
},function(){
  var index=$(".dh").index($(this));
  $(".zhankai").eq(index).hide();
})
//返回顶部
 jQuery.backTop($(".go-back"),300);  
//按需加载
$("img").addClass("lazy");
$(".floorbox img").removeClass("lazy");
$(".saoma img").removeClass("lazy");
$(".bnxia img").removeClass("lazy");
$(".cnbox img").removeClass("lazy");
$(".br-sn img").removeClass("lazy");
$("img.lazy").attr("src","image/loading-sm.png");
$("img.lazy").lazyload();

//快讯
// var bannerflag=true;
// if (bannerflag) {
//         bannerflag=false;
// $(".zhege").mouseover(function(){
//     var index=$(".zhege").index($(this));
//     $(".meige").css("z-index",5).eq(index).css("z-index",10)
//     $(".meige").animate({"top":"29px"},function(){
//         $(".kgx").css("display","none").eq(index).css("display","block");
//         bannerflag=true;
//     });
//     $(".bnbrbox").animate({"top":"-41px"}); 
// })
// }
// $(".hfcz").css("display","none").eq(0).css("display","block");
// $(".gnjpz").css("display","none").eq(0).css("display","block");
// $(".zzry").css("display","none").eq(0).css("display","block");
// $(".dk").css("display","none").eq(0).css("display","block");
// $(".l3").eq(0).css("background","#c81623");
// $(".l4").eq(0).css("background","#c81623");
// $(".l2").eq(0).css("background","#c81623");
// $(".l5").eq(0).css("background","#c81623");
// $(".l1a1").eq(0).css("color","#fff");
// $(".l1a2").eq(0).css("color","#fff");
// $(".l1a4").eq(0).css("color","#fff");
// $(".l1a5").eq(0).css("color","#fff");
// $(".sjx1").eq(0).css("display","block");
// $(".sjx2").eq(0).css("display","block");
// $(".sjx4").eq(0).css("display","block");
// $(".sjx5").eq(0).css("display","block");
// $(".l3").mouseover(function(){
//     var index=$(".l3").index($(this));
//         $(".hfcz").css("display","none").eq(index).css("display","block");
//         $(".l3").css("background","#fff").eq(index).css("background","#c81623");
//         $(".l1a1").css("color","#666").eq(index).css("color","#fff");
//         $(".sjx1").css("display","none").eq(index).css("display","block");
//     })
// $(".l2").mouseover(function(){
//     var index=$(".l2").index($(this));
//         $(".gnjpz").css("display","none").eq(index).css("display","block");
//         $(".l2").css("background","#fff").eq(index).css("background","#c81623");
//         $(".l1a2").css("color","#666").eq(index).css("color","#fff");
//         $(".sjx2").css("display","none").eq(index).css("display","block");
//     })
// $(".l4").mouseover(function(){
//     var index=$(".l4").index($(this));
//         $(".zzry").css("display","none").eq(index).css("display","block");
//         $(".l4").css("background","#fff").eq(index).css("background","#c81643");
//         $(".l1a4").css("color","#666").eq(index).css("color","#fff");
//         $(".sjx4").css("display","none").eq(index).css("display","block");
//     })
// $(".l5").mouseover(function(){
//     var index=$(".l5").index($(this));
//         $(".dk").css("display","none").eq(index).css("display","block");
//         $(".l5").css("background","#fff").eq(index).css("background","#c81643");
//         $(".l1a5").css("color","#666").eq(index).css("color","#fff");
//         $(".sjx5").css("display","none").eq(index).css("display","block");
//     })
// $(".closex").click(function(){
//     $(".middlekx").animate({"top":"209px"});
//     $(".bnbrbox").animate({"top":"0"});
//     $(".kgx").css("display","none") 
// })
// 二维码
$(".em1").hover(function(){
    $(".em1 div").css("display","block");
},function(){
    $(".em1 div").css("display","none");
})
$(".em2").hover(function(){
    $(".em2 div").css("display","block");
},function(){
    $(".em2 div").css("display","none");
})
// 信息列表
$(".police i").eq(1).css("backgroundPosition","-35px -180px");
$(".police i").eq(2).css("backgroundPosition","-70px -180px");
$(".police i").eq(3).css("backgroundPosition","-105px -180px");
$(".police i").eq(4).css("backgroundPosition","-140px -180px");
$(".police b").eq(2).css("padding-top","9px");
$(".police b").eq(4).css("padding-top","9px");
//右导航
$(".app").mouseover(function(){
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":-140});
  $(".app b").css("background-position","-40px -464px");
})
$("body").click(function(){
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":140});
  $(".app b").css("background-position","-47px -464px");
})
function hover(a,b,c){
  a.hover(function(){
  b.stop(true);
  b.delay(200).animate({"left":-82});
  c.css("background-position","-40px -464px");
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":140});
  $(".app b").css("background-position","-47px -464px");
},function(){
   b.stop(true);
   b.delay(200).animate({"left":82});
   c.css("background-position","-47px -464px");
})
}
hover($(".servy"),$(".servy .transform"), $(".servy b"));
hover($(".service"),$(".service .transform"), $(".service b"));
hover($(".go-back"),$(".go-back .transform"), $(".go-back b"));
 
})





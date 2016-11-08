window.onload=function(){
	// 轮播图
  var box=$(".bnbox");
	var bt=$(".bt");
	var imgs=$(".bn");
	var zuoniu=$(".btL");
	var youniu=$(".btR");
	bt[0].className="bt hot";
  var now=0;
  var t=setInterval(move,2000)
  box[0].onmouseover=function(){
  	clearInterval(t);
  	zuoniu[0].style.display="block";
  	youniu[0].style.display="block";
  }
  box[0].onmouseout=function(){
  	t=setInterval(move,2000);
  	zuoniu[0].style.display="none";
  	youniu[0].style.display="none";
  }
  youniu[0].onclick=function(){
  	      move();
  }      
  zuoniu[0].onclick=function(){
  now--;
      if(now<0){
        now=imgs.length-1;
      }
      for(var i=0;i<imgs.length;i++){
        animate(imgs[i],{opacity:0});
        bt[i].className="bt";
      }
  animate(imgs[now],{opacity:1});
  bt[now].className="bt hot";
 }  

  for(var i=0;i<bt.length;i++){
	bt[i].index=i;
  	bt[i].onmouseover=function(){
  	for(var i=0;i<imgs.length;i++){
        animate(imgs[i],{opacity:0});
        bt[i].className="bt";
        }
    animate(imgs[this.index],{opacity:1});
    bt[this.index].className="bt hot";
    now=this.index
  	}   
}
function move(){
    now++;
    if(now==imgs.length){
      now=0;
    }
    for(var i=0;i<imgs.length;i++){
      animate(imgs[i],{opacity:0});
      bt[i].className="bt";
    }
  animate(imgs[now],{opacity:1});
  bt[now].className="bt hot";
}  

 // 送至：北京   
   var xuanxiang=$(".xuanxiang")[0];
   var city=$("li",xuanxiang);
   var a=$("a",xuanxiang);
   var beijing=$(".beijingbox")[0];
   beijing.onmouseover=function(){
   	xuanxiang.style.display="block";
   	beijing.style.background="#fff";
   }
   beijing.onmouseout=function(){
   	xuanxiang.style.display="none";
   	beijing.style.background="#f1f1f1";
   }
   for(var i=0;i<city.length;i++){
       city[i].index=i;
     	 city[i].onmouseover=function(){
     	 city[this.index].style.background="#f4f4f4";
     	 a[this.index].style.color="#c81623";
     }
       city[i].onmouseout=function(){
     	 city[this.index].style.background="#fff";
     	 a[this.index].style.color="#666";
     }
     	 city[i].onclick=function(){
     	 city[this.index].style.background="#c81623";
     	 a[this.index].style.color="#fff";
      }
   }
   //我的京东
   var wodebox=$(".wodebox")[0];
   var wdjd=$(".wdjd")[0];
   var hongzi=$(".hongzi")[0];
   hover(wodebox,function(){
    wdjd.style.display="block";
    wodebox.style.background="#fff";
   },function(){
    wdjd.style.display="none";
    wodebox.style.background="#f1f1f1";
   })
   //手机京东
   var shoujibox=$(".shoujibox")[0];
   var juti=$(".juti")[0];
   hover(shoujibox,function(){
    juti.style.display="block";
    shoujibox.style.background="#fff";
   },function(){
    juti.style.display="none";
    shoujibox.style.background="#f1f1f1";
   })
   //关注京东
   var guanzhubox=$(".guanzhubox")[0];
   var gzjd=$(".gzjd")[0];
   hover(guanzhubox,function(){
    guanzhubox.style.background="#fff";
    gzjd.style.display="block";
   },function(){
    guanzhubox.style.background="#f1f1f1";
    gzjd.style.display="none";
   })
   //客户服务
   var kehubox=$(".kehubox")[0];
   var khfw=$(".khfw")[0];
   hover(kehubox,function(){
    kehubox.style.background="#fff";
    khfw.style.display="block";
   },function(){
    kehubox.style.background="#f1f1f1";
    khfw.style.display="none";
   })
   //网站导航
   var wangzhanbox=$(".wangzhanbox")[0];
   var wzdh=$(".wzdh")[0];
   hover(wangzhanbox,function(){
    wzdh.style.display="block";
    wangzhanbox.style.background="#fff";
   },function(){
    wzdh.style.display="none";
    wangzhanbox.style.background="#f1f1f1";
   })
   //购物车
   var shoping=$(".shoping")[0];
   var gwc=$(".gwc")[0];
   hover(shoping,function(){
    shoping.style.background="#fff";
    gwc.style.display="block";
   },function(){
    shoping.style.background="#f1f1f1";
    gwc.style.display="none";
   })
   // 节点轮播
var lun=$(".lun");
lunbo(lun[0],4);
function lunbo(obj,num){
var imgBox=$(".lunbox",obj)[0];
var aa=$(".imgs",imgBox)[0];
var aw=parseInt(getStyle(aa,"width"))+parseInt(getStyle(aa,"marginRight"))
// var t1=setInterval(moveR,2000);
var zuoanniu=$(".zuoyi",obj)[0];
var youanniu=$(".youyi",obj)[0];
var flag1=true;
imgBox.style.width=aw*aa.length+"px"
obj.onmouseover=function(){
  // clearInterval(t1);
  zuoanniu.style.display="block";
  youanniu.style.display="block";
}
obj.onmouseout=function(){
  // t1=setInterval(moveR,2000);
  zuoanniu.style.display="none";
  youanniu.style.display="none";

}
    youanniu.onclick=function(){
      if(flag1){
      moveR();
      flag1=false;
      }
   }      
    zuoanniu.onclick=function(){
      if(flag1){
     moveL();
     flag1=false;
     }
     
  } 
function moveR(){
  animate(imgBox,{left:-num*aw},function(){
       for(var i=0;i<num;i++){
       var first=firstChild(imgBox);
       imgBox.appendChild(first);
       imgBox.style.left=0+"px";
       }
       flag1=true;
  })
}
  function moveL(){
     for(var i=0;i<num;i++){
     var first=firstChild(imgBox);
     var last=lastChild(imgBox);
        imgBox.insertBefore(last,first);
        }
        imgBox.style.left=-aw*num+"px";
        animate(imgBox,{left:0},function(){
        flag1=true;
    });
  }
}
// 每楼的选项卡
var clothesBox=$(".clothesBox")[0];
var f2box=$(".f2box")[0];
var f3box=$(".f3box")[0];
var f3box1=$(".f3box")[1];
var f3box2=$(".f3box")[2];
var f2box6=$(".f2box")[1];
var f2box7=$(".f2box")[2];
var f2box8=$(".f2box")[3];
var f2box9=$(".f2box")[4];
var f2box10=$(".f2box")[5];
var f3box11=$(".f3box")[3];
var cloCRbox1=$(".cloCRbox1",clothesBox);
var cloCRbox2=$(".cloCRbox2",f2box);
var cloCRbox3=$(".cloCRbox3",f3box);
var cloCRbox31=$(".cloCRbox3",f3box1);
var cloCRbox32=$(".cloCRbox3",f3box2);
var cloCRbox26=$(".cloCRbox2",f2box6);
var cloCRbox27=$(".cloCRbox2",f2box7);
var cloCRbox28=$(".cloCRbox2",f2box8);
var cloCRbox29=$(".cloCRbox2",f2box9);
var cloCRbox210=$(".cloCRbox2",f2box10);
var cloCRbox311=$(".cloCRbox3",f3box11);
select(f2box,cloCRbox2);
select(clothesBox,cloCRbox1);
select(f3box,cloCRbox3);
select(f3box1,cloCRbox31);
select(f3box2,cloCRbox32);
select(f2box6,cloCRbox26);
select(f2box7,cloCRbox27);
select(f2box8,cloCRbox28);
select(f2box9,cloCRbox29);
select(f2box10,cloCRbox210);
select(f3box11,cloCRbox311);
function select(obj,range){
var dapai=$(".dapai",obj);
var f1headR=$(".f1headR",obj);
dapai[0].className="dapai active";
range[0].style.zIndex=10;
for(var i=0;i<dapai.length;i++){
  dapai[i].index=i;
  dapai[i].style.width=getStyle(dapai[i],"width");
  dapai[0].style.width="58px";
dapai[i].onmouseover=function(){
  for(var j=0;j<range.length;j++){
    range[j].style.display="none";
    dapai[j].className="dapai ";
  }
    range[this.index].style.display="block";
    dapai[this.index].className="dapai active";
   }
  }
 }
// 每楼小轮播
var DwBox=$(".floorbox");
var arr=[];
for(var i=0;i<DwBox.length;i++){
  arr[i]=i;
}
  function LBTH(obj,num){
  var DwImg=$(".floorimg",obj[num]);
  var lunbotuFLi=$(".anniu",$(".yuanniu")[num]);
  var floorBtnL=$(".leftniu",obj[num])[0];
  var floorBtnR=$(".rightniu",obj[num])[0];
  var now=0;
  var next=0;
  var ft=setInterval(moveF,2000);
  lunbotuFLi[0].classList.add("xin");
  var fw=parseInt(getStyle(DwImg[0],"width"));
  var flag=true; 
  for(var i=0;i<DwImg.length;i++){
    if(i==0){
      continue;
    }else{
    DwImg[i].style.left=fw+"px";
    }
  }
  function moveF(){
    next++;
    if(next==DwImg.length){
      next=0;
    }
    DwImg[next].style.left=fw+"px";
    animate(DwImg[now],{left:-fw});
    animate(DwImg[next],{left:0},function(){
      flag=true;
    });
    lunbotuFLi[now].classList.remove("xin");
    lunbotuFLi[next].classList.add("xin");
    now=next;
}

  function moveFL(){
    next--;
    if(next<0){
      next=DwImg.length-1;
    }
    DwImg[next].style.left=-fw+"px";
    animate(DwImg[now],{left:fw});
    animate(DwImg[next],{left:0},function(){
      flag=true;
    });
    lunbotuFLi[now].classList.remove("xin");
    lunbotuFLi[next].classList.add("xin");
    now=next;
}
  obj[num].onmouseover=function(){
    animate(floorBtnL,{left:0},100);
    animate(floorBtnR,{right:0},100);
    clearInterval(ft);
}
  obj[num].onmouseout=function(){
    animate(floorBtnL,{left:-30},100);
    animate(floorBtnR,{right:-30},100);
    ft=setInterval(moveF,2000);
}

/*
  点击轮波图按钮事件
*/
  for(var i=0;i<lunbotuFLi.length;i++){
    lunbotuFLi[i].index=i;
    lunbotuFLi[i].onmouseover=function(){
      if((parseInt(getStyle(DwImg[next],"left")))==0){
        if(now>this.index){
          DwImg[this.index].style.left=fw+"px";
          animate(DwImg[now],{left:-fw});
          animate(DwImg[this.index],{left:0});
        }else if(now<this.index){
          DwImg[this.index].style.left=-fw+"px";
          animate(DwImg[now],{left:fw});
          animate(DwImg[this.index],{left:0});
        }else{
          return;
      }
        lunbotuFLi[this.index].classList.add("xin");
        lunbotuFLi[now].classList.remove("xin");
        now=this.index;
        next=now;
      }
    }
  }


/*左右两边按钮*/
  floorBtnL.onclick=function(){
    if(flag){
      moveFL();
      flag=false;
    }
  }
  floorBtnR.onclick=function(){
    if(flag){
      moveF();
      flag=false;
    }
  }
}
LBTH(DwBox,arr[0]);
LBTH(DwBox,arr[1]);
LBTH(DwBox,arr[2]);
LBTH(DwBox,arr[3]);
LBTH(DwBox,arr[4]);
LBTH(DwBox,arr[5]);
LBTH(DwBox,arr[6]);
LBTH(DwBox,arr[7]);
LBTH(DwBox,arr[8]);
LBTH(DwBox,arr[9]);
LBTH(DwBox,arr[10]);
LBTH(DwBox,arr[11]);
LBTH(DwBox,arr[12]);

// 左导航
  var floor=$(".floorlist");
  var navlis=$(".floorlis");
  var shangceng=$(".floornum");
  var xiaceng=$(".title");
  var Cheight=document.documentElement.clientHeight;
  var floornav=$(".leftNav")[0];
  var picBox=$(".picBox")[0];
  var n;
  var n1=true;
  for(var i=0;i<floor.length;i++){
    floor[i].h=floor[i].offsetTop;
  }
  window.onscroll=function(){
    if(n1){
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=obj.scrollTop;
    if(top>=floor[0].h-300){
      floornav.style.display="block";
      var nheight=floornav.offsetHeight;
      floornav.style.top=(Cheight-nheight)/2+"px";
    }
    for(var i=0;i<floor.length;i++){
        if(top>=floor[i].h-200){
         for(var j=0;j<floor.length;j++){
          xiaceng[j].style.display="none";
          shangceng[j].style.display="block";
        }
      shangceng[i].style.display="none";
      xiaceng[i].style.display="block";
      xiaceng[i].className="title";
      n=i;
     }
    }
    if(top<floor[0].h-600||top>=picBox.offsetTop-200){
       floornav.style.display="none";
    }
   }
  }
  for(var i=0;i<navlis.length;i++){
    navlis[i].index=i;
    navlis[i].onclick=function(){
      n1=false;
      animate(document.body,{scrollTop:floor[this.index].h},function(){
       n1=true;
      })
      animate(document.documentElement,{scrollTop:floor[this.index].h},function(){
        n1=true;
      })
      n=this.index;
    }
    hover(navlis[i],function(){
      xiaceng[this.index].style.display="block";
      xiaceng[this.index].className="title dianji";
      shangceng[this.index].style.display="none";
    },function(){
         if(n==this.index){
         xiaceng[this.index].style.display="block";
         xiaceng[this.index].className="title";
      }else{
       shangceng[this.index].style.display="block";
       xiaceng[this.index].style.display="none";
       }
    })
  }
  //轮播图左竖导航
  var item=$(".dh");
  var list=$(".zhankai");
  for(var i=0;i<item.length;i++){
    item[i].index=i;
    item[i].onmouseover=function(){
      list[this.index].style.display="block";
    }
  }
  for(var i=0;i<item.length;i++){
    item[i].index=i;
    item[i].onmouseout=function(){
      list[this.index].style.display="none";
    }
  }
  //猜你喜欢
  var nr=$(".nr");
  var xuanze=$(".xuanze");
  var nrn=0;
  var cnxhbox=$(".cnxhbox")[0];
  var p=$("p",cnxhbox)[0];
  var cnNwm=parseInt(getStyle(cnxhbox,"width"));
  var pwm=parseInt(getStyle(p,"width"));
  hover(cnxhbox,function(){
            p.style.left=0;
            animate(p,{left:cnNwm-pwm});
        },function(){
            p.style.left=cnNwm-pwm+"px";
        })
  nr[0].style.display="block";
    xuanze[0].onclick=function(){
      shift();
   }      
    function shift(){
    nrn++;
    if(nrn==nr.length){
      nrn=0;
    }
    for(var i=0;i<nr.length;i++){
      nr[i].style.display="none";
    }
    nr[nrn].style.display="block";
   }  
   //天天低价
var ttRb1=$(".ttRb1");
jiedian(ttRb1[0],1);
function jiedian(obj,num){
var ttRbbox=$(".ttRbbox",obj)[0];
var ttRbnr=$(".ttRbnr",ttRbbox)[0];
var ah=parseInt(getStyle(ttRbnr,"height"))+parseInt(getStyle(ttRbnr,"marginBottom"))
var time=setInterval(moveB,4000);
var flagt=true;
ttRbbox.style.height=ah*ttRbnr.length+"px"
obj.onmouseover=function(){
  clearInterval(time);
}
obj.onmouseout=function(){
  time=setInterval(moveB,4000);
}
function moveB(){
   for(var i=0;i<num;i++){
   var first=firstChild(ttRbbox);
   var last=lastChild(ttRbbox);
      ttRbbox.insertBefore(last,first);
      }
      ttRbbox.style.top=-ah*num+"px";
      animate(ttRbbox,{top:0},function(){
      flagt=true;
  });
 }
}
//右导航
var tab1=$(".tab1");
var ico=$(".ico");
var tab1word=$(".tab1word");
for(var i=0;i<ico.length;i++){
    tab1[i].index=i;
     hover(tab1[i],function(){
    ico[this.index].style.backgroundColor="#c81623";
    animate(tab1word[this.index],{left:-62},600);
    tab1word[this.index].style.background="#c81623";
  },function(){
    ico[this.index].style.backgroundColor="#7a6e6e";
    animate(tab1word[this.index],{left:0},600);
    tab1word[this.index].style.background="#7a6e6e";
  })
}
  tab1[6].onclick=function(){
      animate(document.body,{scrollTop:0},300)
      animate(document.documentElement,{scrollTop:0},300)
  }
}
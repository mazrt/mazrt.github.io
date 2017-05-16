$(function(){

        // nav
        (function changeActive(){
            $('.navbar-nav li').click(function(e){
                $(this).siblings().removeClass('active').end().addClass("active");
            })
        })()

        

        $('.mypopover').popover();



        (function gaodeMap(){
            //地图
            var map = new AMap.Map('map', {
                resizeEnable: true,
                dragEnable: true,
                keyboardEnable: false,
                doubleClickZoom: true,
                zoom: 14,
                center: [117.028104,39.232694]
            });
            map.setCity('天津');

            //标记
            marker = new AMap.Marker({
                icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                position: [117.144306,39.069838]
            });
            marker.setMap(map);

            //重设中心点
            AMap.event.addDomListener(document.getElementById('reset'), 'click', function() {
                // 设置缩放级别和中心点
                map.setZoomAndCenter(14, [117.028104,39.232694]);
                // 在新中心点添加 marker 
                var marker = new AMap.Marker({
                    map: map,
                    position: [117.028104,39.232694]
                });
            });
            //打开信息窗体
             AMap.event.addDomListener(document.getElementById('openInfo'), 'click', openInfo);
             
             function openInfo() {
                    //构建信息窗体中显示的内容
                    var info = [];
                    info.push("<div><div><img style=\"float:left;\" src=\" http://webapi.amap.com/images/autonavi.png \"/></div> ");
                    info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>高德软件</b>");
                    info.push("电话 : 18702258202   邮编 : 300134");
                    info.push("地址 :天津市北辰区四纬路1号辰寰星谷孵化器</div></div>");
                    infoWindow = new AMap.InfoWindow({
                        content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
                    });
                    isClose = false;
                    infoWindow.open(map, map.getCenter());   
            }

            //驾车
            var driving = new AMap.Driving({
                map: map,
                panel: "panel"
            }); 
            // 根据起终点名称规划驾车导航路线
            driving.search([
                {keyword: '天津理工大学',city:'天津'},
                {keyword: '天津站',city:'天津'}
            ]);

        })()
        
})
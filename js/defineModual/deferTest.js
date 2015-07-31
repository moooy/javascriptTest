/**
 * Created by Administrator on 2015/7/29.
 */
define(["dojo/Deferred","dojo/request/script","dojo/promise/Promise","dojo/promise/all"],function (Deferred,script,Promise,all) {
    return {
        test : function(){
            var url = "http://192.168.11.247:6080/arcgis/rest/services/Test/PMZ_WEG_GY_AREA/MapServer/2?returnUpdates=true&f=json";
           var de = script.get(url,{
               jsonp : "callback"
           })/*.then(function(data){
               console.log(data);
           })*/;
            var defer = new Deferred();
            console.log(defer);
            var result = de.then(function (res) {
                return {
                    id : res.id,
                    time : res.timeExtent
                }
            });
            console.log(de);
            console.log(result);
            console.log(de === result);
            result.then(function(res){
                console.log(res);
            });

            all([de,result]).then(function (results) {
                console.log(results);
            })
        }
    };
});
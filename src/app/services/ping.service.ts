/*export class PingService {

  //first you should inject the dependencies
  myApp.module('app',['angular.ping']).controller('testController',['netTesting',function(netTesting){
    netTesting.ping('www.aliyun.com',function(){
      console.log(arguments);
    });

    netTesting.ping('192.168.0.1',function(){
      console.log(arguments);
    });
  }])

  //got the result
  ["www.aliyun.com","connected"]

  //get the result;
  ["192.168.0.1","disconnected"]
}

*/

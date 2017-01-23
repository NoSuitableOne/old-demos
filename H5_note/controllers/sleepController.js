app.controller('sleepController',function($scope,$location,$resultService){
    $scope.title = "睡眠打卡";
    $scope.continue = false;
    $scope.finalResult = false;
    $scope.buttonText = $scope.finalResult === true?"没做到诶，取消打卡":"全部OK，一键打卡";

    $scope.check = function(){
        $scope.continue = !$scope.continue;
        $resultService.change(2,$scope.continue);
        $scope.checkResult();
    };
    $scope.checkResult = function(){
        if($resultService.getFinal()){
            $scope.finalResult = true;
        }else{
            $scope.finalResult = false;
        }
        $scope.buttonText = $scope.finalResult === true?"没做到诶，取消打卡":"全部OK，一键打卡";
    };
});

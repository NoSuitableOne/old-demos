app.controller('dietController',function($scope,$location,$resultService){
    $scope.title="饮食打卡";
    $scope.continue = false;
    $scope.buttonText = $scope.continue === true?"没做到诶，取消打卡":"全部OK，一键打卡";

    $scope.check = function(){
        $scope.continue = !$scope.continue;
        $resultService.change(0,$scope.continue);
        $scope.buttonText = $scope.continue?"没做到诶，取消打卡":"全部OK，一键打卡";
    };
});

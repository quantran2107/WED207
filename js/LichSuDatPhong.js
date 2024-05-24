window.LichSuDatPhong = function($scope, $http){
    $scope.title = "LỊCH SỬ ĐẶT PHÒNG";

    const apiLichSuDatPhong = 'http://localhost:3000/LichSuDatPhong'

    $http.get(apiLichSuDatPhong).then(function (response) {
        if (response.status == 200) {
            $scope.listLichSuDatPhong = response.data
        }
    })
}
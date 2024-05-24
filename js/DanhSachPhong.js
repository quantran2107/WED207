window.DanhSachPhong = function($scope, $http){
    $scope.title = "DANH SÁCH PHÒNG";

    const apiPhong = 'http://localhost:3000/Phong'

    $http.get(apiPhong).then(function (response) {
        if (response.status == 200) {
            $scope.listPhong = response.data
        }
    })
}
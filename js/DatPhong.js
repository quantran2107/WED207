window.DatPhong = function($scope, $http){
    $scope.title = "GIỎ HÀNG";

    const apiGioHang = 'http://localhost:3000/gioHang'

    $http.get(apiGioHang).then(function (response) {
        if (response.status == 200) {
            $scope.listPhongGioHang = response.data
            $scope.tongTien = 0;
            for (let index = 0; index < $scope.listPhongGioHang.length; index++) {
                $scope.gia = parseFloat($scope.listPhongGioHang[index].gia);
                $scope.soDem = parseFloat($scope.listPhongGioHang[index].soDem);
                $scope.tongTien += ($scope.gia * $scope.soDem)
            }
        }
    })

    $scope.xoaPhongGioHang = function (deleteID){
        let confirm = window.confirm("Bạn có muốn xóa không?");
        if (confirm) {
            $http.delete(
                apiGioHang + '/' + deleteID
            ).then(function (response){
                if (response.status == 200) {
                    alert('Bạn đã xóa thành công');
                }
            });
        }
    }

    $scope.xoaPhongGioHangAll = function (){
        let confirm = window.confirm("Bạn có muốn xóa không?");
        if (confirm) {
            $http.get(apiGioHang).then(function (response) {
                if (response.status == 200) {
                    $scope.listPhongGioHang = response.data
                    for (let index = 0; index < $scope.listPhongGioHang.length; index++) {
                        $scope.id = $scope.listPhongGioHang[index].id;                         
                        $http.delete(
                            apiGioHang + '/' + $scope.id
                        ).then(function (response){

                        });
                    }
                    if (response.status == 200) {
                        alert('Bạn đã xóa thành công');
                    }
                }
            })
        }
    }

}
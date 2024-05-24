window.SuaThongTinPhong = function ($scope, $routeParams, $http, $location) {
    $scope.title = "THÔNG TIN CHI TIẾT";

    let gioHangID = $routeParams.id;

    const apiGioHang = 'http://localhost:3000/gioHang'

    $http.get(
        apiGioHang + '/' + gioHangID
    ).then(function (response) {
        if (response.status == 200) {
            $scope.inputValue = {
                id: response.data.id,
                img: response.data.img,
                loaiPhong: response.data.loaiPhong,
                dienTich: response.data.dienTich,
                loaiGiuong: response.data.loaiGiuong,
                tieuChuan: response.data.tieuChuan,
                phongTam: response.data.phongTam,
                cuaSo: response.data.cuaSo,
                gia: response.data.gia,
                ngayNhan: new Date(response.data.ngayNhan),
                ngayTra: new Date(response.data.ngayTra),
                soDem: response.data.soDem,
                thanhTien: response.data.gia * response.data.soDem
            }
        }
    });

    let flag = true;
    $scope.kiemTra = {
        ngayNhan: false,
        ngayTra: false
    }

    if (!$scope.inputValue || !$scope.inputValue.ngayNhan) {
        flag = false;
        $scope.kiemTra.ngayNhan = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.ngayTra) {
        flag = false;
        $scope.kiemTra.ngayTra = true;
    }

    // if ($scope.inputValue.ngayTra < $scope.inputValue.ngayNhan) {
    //     flag = false;
    //     $scope.kiemTra.ngayTra = true;
    //     $scope.kiemTra.ngayNhan = true;
    // }

    if (flag) {
        $scope.suaThongTinPhong = function () {
            let suaThongTinPhong = {
                img: $scope.inputValue.img,
                loaiPhong: $scope.inputValue.loaiPhong,
                dienTich: $scope.inputValue.dienTich,
                loaiGiuong: $scope.inputValue.loaiGiuong,
                tieuChuan: $scope.inputValue.tieuChuan,
                phongTam: $scope.inputValue.phongTam,
                cuaSo: $scope.inputValue.cuaSo,
                gia: $scope.inputValue.gia,
                ngayNhan: $scope.inputValue.ngayNhan,
                ngayTra: $scope.inputValue.ngayTra,
                soDem: Math.floor(($scope.inputValue.ngayTra - $scope.inputValue.ngayNhan) / (1000 * 60 * 60 * 24)),
                thanhTien: $scope.inputValue.gia * Math.floor(($scope.inputValue.ngayTra - $scope.inputValue.ngayNhan) / (1000 * 60 * 60 * 24))
            }
    
            $http.put(
                apiGioHang + '/' + gioHangID,
                suaThongTinPhong
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Chỉnh sửa thành công");
                    $location.path('/DatPhong')
                }
            });
        }
    }
}
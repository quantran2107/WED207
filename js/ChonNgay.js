window.ChonNgay = function($scope, $routeParams, $http, $location){
    const apiPhong = 'http://localhost:3000/Phong'

    let phongID = $routeParams.id;

    $http.get(
        apiPhong + '/' + phongID
    ).then(function (response){
        if (response.status == 200) {
            $scope.id = response.data.id;
            $scope.img = response.data.img;
            $scope.loaiPhong = response.data.loaiPhong;
            $scope.dienTich = response.data.dienTich;
            $scope.loaiGiuong = response.data.loaiGiuong;
            $scope.tieuChuan = response.data.tieuChuan;
            $scope.phongTam = response.data.phongTam;
            $scope.cuaSo = response.data.cuaSo;
            $scope.gia = response.data.gia;
        }
    });

    $scope.themVaoGioHang = function(){
        const apiGioHang = 'http://localhost:3000/gioHang';

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

        if ($scope.inputValue.ngayTra < $scope.inputValue.ngayNhan) {
            flag = false;
            $scope.kiemTra.ngayTra = true;
            $scope.kiemTra.ngayNhan = true;
        }

        if (flag) {
            let newPhong = {
                img: $scope.img,
                loaiPhong: $scope.loaiPhong,
                dienTich: $scope.dienTich,
                loaiGiuong: $scope.loaiGiuong,
                tieuChuan: $scope.tieuChuan,
                phongTam: $scope.phongTam,
                cuaSo: $scope.cuaSo,
                gia: $scope.gia,
                ngayNhan: $scope.inputValue.ngayNhan,
                ngayTra: $scope.inputValue.ngayTra,
                soDem: Math.floor(($scope.inputValue.ngayTra - $scope.inputValue.ngayNhan) / (1000 * 60 * 60 * 24))
            }

            $http.post(
                apiGioHang, // Đường dẫn api
                newPhong //dữ liệu mới nhập vào từ input
            ).then(function (response) {
                if (response.status == 201) {
                    alert('Thêm vào giỏ hàng thành công!');
                    // Quay trở lại trang danh sách
                    $location.path('/DatPhong');
                }
            });
        }
    }
}
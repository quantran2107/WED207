window.ThanhToan = function($scope, $routeParams, $http, $location){
    $scope.title = "THANH TOÁN";

    let gioHangID = $routeParams.id;

    const apiGioHang = 'http://localhost:3000/gioHang'

    $http.get(
        apiGioHang + '/' + gioHangID
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
            $scope.ngayNhan = response.data.ngayNhan;
            $scope.ngayTra = response.data.ngayTra;
            $scope.soDem = response.data.soDem;
        }
    });

    $scope.thanhToan = function(){
        const apiLichSuDatPhong = 'http://localhost:3000/LichSuDatPhong';

        let flag = true;
        $scope.kiemTra = {
            hoTen: false,
            SDT: false,
            CCCD_CMND: false,
            gioiTinh: false,
            email: false,
            httt: false
        }

        if (!$scope.inputValue || !$scope.inputValue.hoTen) {
            flag = false;
            $scope.kiemTra.hoTen = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.SDT) {
            flag = false;
            $scope.kiemTra.SDT = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.CCCD_CMND) {
            flag = false;
            $scope.kiemTra.CCCD_CMND = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.email) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.httt) {
            flag = false;
            $scope.kiemTra.httt = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.gioiTinh) {
            flag = false;
            $scope.kiemTra.gioiTinh = true;
        }

        let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regexEmail.test($scope.inputValue.email)) {
            $scope.kiemTra.email = true;
            flag = false;
        }

        let regexSDT = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (!regexSDT.test($scope.inputValue.SDT)) {
            flag = false;
            $scope.kiemTra.SDT = true
        }
        
        let regexCCCD_CMND = /^\d+$/;
        if (!regexCCCD_CMND.test($scope.inputValue.CCCD_CMND)) {
            $scope.kiemTra.CCCD_CMND = true;
            flag = false;
        }

        if (flag) {
            let newLichSuDatPhong = {
                img: $scope.img,
                loaiPhong: $scope.loaiPhong,
                dienTich: $scope.dienTich,
                loaiGiuong: $scope.loaiGiuong,
                tieuChuan: $scope.tieuChuan,
                phongTam: $scope.phongTam,
                cuaSo: $scope.cuaSo,
                gia: $scope.gia,
                ngayNhan: $scope.ngayNhan,
                ngayTra: $scope.ngayTra,
                soDem: $scope.soDem,
                hoTen: $scope.inputValue.hoTen,
                email: $scope.inputValue.email,
                gioiTinh: $scope.inputValue.gioiTinh,
                SDT: $scope.inputValue.SDT,
                httt: $scope.inputValue.httt,
                CCCD_CMND: $scope.inputValue.CCCD_CMND,
                ycdb: $scope.inputValue.ycdb
            }

            $http.post(
                apiLichSuDatPhong, // Đường dẫn api
                newLichSuDatPhong //dữ liệu mới nhập vào từ input
            ).then(function (response) {
                if (response.status == 201) {
                    alert('Thanh toán thành công!');
                    $http.delete(
                        apiGioHang + '/' + gioHangID
                    ).then(function (response){

                    });
                    $location.path('/DanhSachPhong');
                }
            });
        }
    }
}
window.ThongTinPhong = function ($scope, $routeParams, $http) {
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
}
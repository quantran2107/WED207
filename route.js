let myApp = angular.module('myApp', ['ngRoute']);

    myApp.config(function($routeProvider) {
        $routeProvider
        .when(
            '/DanhSachPhong',
            {
                templateUrl: 'view/DanhSachPhong.html',
                controller: DanhSachPhong
            }
        )

        .when(
            '/LienHe',
            {
                templateUrl: 'view/LienHe.html',
                controller: LienHe
            }
        )

        .when(
            '/ChonNgay/:id',
            {
                templateUrl: 'view/ChonNgay.html',
                controller: ChonNgay
            }
        )

        .when(
            '/DatPhong',
            {
                templateUrl: 'view/DatPhong.html',
                controller: DatPhong
            }
        )

        .when(
            '/ThanhToan/:id',
            {
                templateUrl: 'view/ThanhToan.html',
                controller: ThanhToan
            }
        )

        .when(
            '/LichSuDatPhong',
            {
                templateUrl: 'view/LichSuDatPhong.html',
                controller: LichSuDatPhong
            }
        )

        .when(
            '/ThongTinPhong/:id',
            {
                templateUrl: 'view/ThongTinPhong.html',
                controller: ThongTinPhong
            }
        )

        .when(
            '/SuaThongTinPhong/:id',
            {
                templateUrl: 'view/SuaThongTinPhong.html',
                controller: SuaThongTinPhong
            }
        )

        .otherwise({
            redirectTo: '/DanhSachPhong'
        })
    })
window.LienHe = function($scope){
    $scope.title = "THÔNG TIN LIÊN HỆ";

    $scope.guiLienHe = function(){
        let flag = true;
        $scope.kiemTra = {
            hoTen: false,
            SDT: false,
            email: false,
            diaChi: false
        }

        if (!$scope.inputValue || !$scope.inputValue.hoTen) {
            flag = false;
            $scope.kiemTra.hoTen = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.SDT) {
            flag = false;
            $scope.kiemTra.SDT = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.email) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        if (!$scope.inputValue || !$scope.inputValue.diaChi) {
            flag = false;
            $scope.kiemTra.diaChi = true;
        }

        // let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // if (!regexEmail.test($scope.inputValue.email)) {
        //     $scope.kiemTra.email = true;
        //     flag = false;
        // }

        // let regexSDT = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        // if (!regexSDT.test($scope.inputValue.SDT)) {
        //     flag = false;
        //     $scope.kiemTra.SDT = true
        // }

        if (flag) {
            alert("Gửi thành công");
        }
    }
}
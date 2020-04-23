function phone(pattery , device1, device2, device3) {
    this.pattery=pattery;
    this.device1=device1;
    this.device2=device2;
    this.device3=device3;

    this.isStatus=function () {
            if (this.pattery>0){
                return true;
            }
            else {
                return false;
            }
    }
    this.statusOn=function () {
        alert("Dien thoai dang bat! ");
    }
    this.statusOff=function () {
        alert("Dien thoai da tat! ");
    }
    this.charge=function () {
        alert("Da xac pin! ");
        document.write("Xac pin da xong! ");
    }
    this.message=function () {
        prompt("Viet tin nhan! ");
    }
    this.send=function () {
        alert("gui tin nhan da xong! ");
    }
    this.view=function () {
        alert("Da xem tin! ");
    }
    this.



}
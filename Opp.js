//Phương thức trong javascript là một thuộc tính của một đối tượng có giá trị là một hàm. 

//Sử dụng một Object Literal 
//import { json2xml } from 'xml-js';
let person = {
    first_name:'Mukul',
    last_name:'Latiyan',

    //method
    getFunction:function(){
        return (`The name of the person is ${person.first_name} ${person.last_name}`)
    },
    phone_number : {
        mobile :'12345',
        landline:'6789'
    }
}
console.log(person.getFunction())
console.log(person.phone_number.landline)


//Đối tượng thì sẽ có các thuộc tính, phương thức.
//Các đối tượng giống nhau sẽ có những thuộc tính và phương thức giống nhau.

//Có thể xem như việc sử dụng class và object sẽ giúp chúng ta có cái nhìn chuẩn hơn về code và để những bạn mới tiếp cận lập trình JavaSript cũng thấy gần gũi hơn.

class tenClass{
    constructor(){}
    phuongThuc1(){}
    phuongThuc2(){}
    phuongThuc3(){}
}

let SinhVien = {
    HoTen :'Ngo Minh Trung',
    GioiTinh :'Nam',
    MSSV:'B170486',
    NamSinh:'1999',

    HocBai:function(){
        console.log('Dang hoc bai ...');
    },
    DiNgu:function(){
        console.log('Dang ngu ...')
    },
    XemPhim:function(){
        console.log('Dang xem phim')
    }
}
//Nhưng ở đây, ta chỉ tạo được một đối tượng cụ thể.

//Nếu muốn tạo ra đối tượng khác thì ta lại phải viết code lại gần như từ đầu.

class Students{
    constructor(HoTen,GioiTinh,MSSV,NamSinh){
        this.HoTen=HoTen;
        this.GioiTinh=GioiTinh;
        this.NamSinh=NamSinh;
        this.MSSV=MSSV;
    }
    HocBai(){
        console,log('Dang Hoc Bai ..');
    }
    DiNgu(){
        console.log('Dang nhu ...');
    }
    XemPhim(){
        console.log('Dang xem phim ...');
    }
}
var students1=new Students();
students1.HoTen="Mr Dockore";
students1.GioiTinh="Nam";
students1.MSSV="Ak371";
students1.NamSinh="2001"
const myJson =JSON.stringify(students1)

//const xml=json2xml(myJson,{compact: true,spaces: 4})
//console.log(xml);
console.log(students1);
console.log(myJson);

class MyClass{
    a=1;
    #b=2;
    static #c=-3;
    incB(){
        this.#b++;
    }
}
const m =new MyClass();
let k= m.incB();
console.log(k)


class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        const dx = a.x -b.x;
        const dy = a.y -b.y;
        return Math.hypot(dx,dy);
    }
}
const p1 = new Point(5,5);
const p2 = new Point(10,10);

p1.distance; //underfined
p2.distance; //underfined
console.log(Point.distance(p1,p2));

class Sinhvien1{
    constructor(name){
        this.HoTen = name;
    }
}
var sinhvien1 = new  Sinhvien1("Ngo Minh Trung");

console.log(sinhvien1)

//6. Kế thừa class

class ConNguoi{
    constructor(HoTen,NamSinh){
        this.HoTen=HoTen;
        this.NamSinh=NamSinh;
    }
    getHoTen(){
        return "Ten "+this.HoTen+", Sinh Nam "+this.NamSinh;
    }
}
class SinhVien2 extends ConNguoi{
    constructor(MaSSV,HoTen,NamSinh){
        super(HoTen,NamSinh);//
        this.MaSSV=MaSSV || "unknown"; 
    }
    getInFormation(){
        return this.getHoTen()+",Ma sinh vien ,"+this.MaSSV;
    }
}

var sinhvien2 = new SinhVien2("B1704863","Ngo Minh Trung","1999");
console.log(sinhvien2.getInFormation()) 
console.log(sinhvien2 instanceof SinhVien2)
console.log(sinhvien2 instanceof ConNguoi)

//9. Class và prototypes(t thực hiện trừu tượng hóa các nguyên mẫu (prototypes))


function ConNguoi3(HoTen,NamSinh){
    this.HoTen=HoTen || "unknown";
    this.NamSinh = NamSinh || "unknown";
}
ConNguoi3.prototype.getThongTin = function(){
    return "Ten "+this.HoTen+", Nam sinh "+this.NamSinh; 
}
var sinhven3=new ConNguoi3("Ngo Minh trung ",199)
console.log(sinhven3.getThongTin());
console.log(sinhven3 instanceof ConNguoi3)

//example
class Persons{
    constructor(name){
        this.name=name;
    }
    toString(){
        return (`name of person : ${this.name}`);
    }
}
class Students2 extends Persons{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    toString(){
        return (`${super.toString()},Students2 Id : ${this.id}`);
    }
}
let students2 =  new Students2('Mukul',22);
console.log(students2.toString());










































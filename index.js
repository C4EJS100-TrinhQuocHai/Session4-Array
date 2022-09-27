// Bài 1: nhập chuỗi ngăn cách bởi dấu phẩy ,tính tổng
/* let chuoi=prompt("nhập chuỗi ngăn cách bởi dấu phẩy");
let check= chuoi.split(",");
let sum=0;
for (let i = 0; i < check.length; i++) {
    sum+=Number(check[i])
    
}
console.log(sum); */
//.............................
// Bài 2,3 tương tự
// Bài 4: CRUD
// 2 cách tạo mảng 
// let array=["Chuong","Duc","Nam","Hong","Hoa","Linh"];
// array.filter((value,index)=>{
//     console.log("value",value ,"index",index);
//     console.log("...................");
// })
// length  kiểm tra số phần tử trong mảng 
// index đánh chỉ số phần tử 
//console.log(array.length);
//CRUD 
//1 READ

// for (let index = 0; index < array.length; index++) {
//    //console.log(array[index]);

// }
//2 CREATE
// array[7]="CHUONG";
// console.log("..............",array);
// PUSH Thêm phần tử vào vị trí cuối cùng của mảng
// UNSHIFT Dùng để thêm phần tử vào vị trí đầu tiên của mảng.
// shift dùng để xoá phần tử đầu tiên của mảng.
// pop() dùng để xoá phần tử cuối cùng của mảng.

// console.log(array.pop());
// console.log("................ ",array);

// 3 Update
// array[0]="CHƯƠNG";
// console.log(array);
// 4 DELETE 
// CACH1:
// array.splice(2,2)
// console.log("..........",array);
// copy 1 mảng mới từ mảng cũ.
// let newArray=[];
// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i]) 
// }
// array[0]="nhung"
// console.log("111",newArray);

// let arr1=[2,5,8];
// let arr2=[9,8,5];
// console.log(arr1.concat(arr2));
// tham trị tham chiếu trong JS 
// tham trị là các kiểu dữ liệu nguyên thuỷ(Primitive data)
// tham chiếu là các kiểu dữ liệu phức tạp( complex data);

// let newArray=array.slice()
// array[0]="Tung";
// console.log(newArray);
//spread js  operator
// destructuring js ES6 mới ra.
// destructuring Js 
// let check=[name1,name2,name3,name4,name5,name6]=array;
// console.log(name1);

// let newArray=[...array];
// array[0]="Dao"

// //console.log(newArray);
// let check= [...array]
// console.log(Array.isArray(name1));
// newFunction(); // ?

// function newFunction() {
//     let fruits = ["Apples", "Pear", "Orange"];

//     // push a new value into the "copy"
//     let shoppingCart = fruits;
//     shoppingCart.push("Banana");

//     // what's in fruits?
//     alert(fruits.length);
// }

// Sử dụng những kiến thức thao tác với mảng(C / R / U / D), 
// hỏi người dùng commandmàngười dùng muốn nhập vào thông qua 4 chữ cái C / R / U / D. ❖ C — Create:
// ➢ Cho người dùng nhập vào todo mới
// ➢ Sau đó in ra toàn bộ phần tử có trong todoList theo dạng
// ■ 1. Go to bed at 11pm
// ■ 2. Do homework at 8pm
// ■ 3. New todo
// ❖ R — Read:
// ➢ In ra toàn bộ phần tử có trong todoList giống phần C
// ❖ U — Update:
// ➢ Hỏi người dùng vị trí phần tử muốn update
// ➢ Hỏi người dùng nội dung muốn update → tiến hành update
// ➢ Sau đó in ra toàn bộ phần tử có trong todoList giống phần C❖ D — Delete:
// ➢ Hỏi người dùng vị trí phần tử muốn delete
// ➢ Tiến hành delete
// ➢ Sau đó in ra toàn bộ phần tử có trong todoList giống phần C


/* let todoList = ["Go to bed at 11pm", "Do homework at 8pm"]
let flag = true

while (flag == true) {
    let userInput = prompt("please input C : add task \n R : read task \n U :update D : delete \n Q :Quit");
    const arr = ["C", "R", "U", "D ", "Q"]


    switch (userInput) {
        case "C":
            let newTask = prompt("please input new task")
            let newList = []
            // newList.push(newTask)
            // todoList = todoList.concat(newList)
            todoList.push(newTask)
            console.log(todoList + " ban da input thanh cong ")
            break;
        // userInput = prompt("please input C : add task \n R : read task \n U :update D : delete \n Q :Quit")
        case "R":
            console.log(">>><<<<" + todoList)
            break

        case "U":
           
            let indexofUpdate
            while (true) {
                indexofUpdate = +prompt(" moi nhap vi tri phan tu muon update");
                if (indexofUpdate < todoList.length) {
                    break;
                }
            }

            let newUpdate = prompt(" moi nhap newupate")
            todoList[indexofUpdate] = newUpdate
            console.log("check" + todoList);
            flag == false

            break;
        case "D":
            let indexDelete = +prompt("moi nhap vi tri muon xoa ")
            if (indexDelete <= todoList.length) {
                todoList.splice(indexDelete, 1)
                console.log(todoList + "\nban da xoa thanh cong")

            } else {
                console.log("vi tri muon xoa khong ton tai ")
            }
            break
        case "Q":
            let userChoice = +prompt("nhan 1 : tiep tuc \n nhan 2 de out")
            if (userChoice === 1) {
                userInput = prompt("please input C : add task \n R : read task \n U :update D : delete \n Q :Quit");

            } else if (userChoice === 2) {
                flag = false
            } else {
                console.log('hey bro nham r')
                userChoice = prompt("nhan 1 : tiep tuc \n nhan 2 de out")
            }
            break
        default:
            alert("ban nhap ko hop le")
            console.log("ban nhap ko hop le")

    }

} */
//.........................................
//Bài 56789...không có vấn đề gì.
/*head first h5 programming*/
var prop;
for (prop in fido) { //for(variable in object)以任意顺序遍历一个对象的可枚举属性。
    alert("Fido has a " + prop + "property");
    if (prop == "name") {
        alert("This is " + fido[prop]);
    }
}
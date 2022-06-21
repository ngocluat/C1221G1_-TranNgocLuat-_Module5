var array = ["trần ngọc luật", "trần thị thật ", "trần hoan"];
array.forEach(function (element) {
    console.log(element);
});
array.map(function (element) {
    if (element == "trần ngọc luật") {
        console.log(element + " trụ cột");
    }
});
array.filter(function (element) {
    console.log(element);
});

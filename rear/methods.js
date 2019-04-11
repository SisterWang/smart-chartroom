// function getHello(req, res){
//     res.send("hello")
// }

function login() {
    let userName = "cjp";
    let password = "123456";

    console.log(this.req);
    // res.send(req);

    // if(req.userName === this.userName && req.password === this.password) {
    //     res.send("登陆成功");
    // } else {
    //     res.send("登陆失败");
    // }
}

exports.login = login;
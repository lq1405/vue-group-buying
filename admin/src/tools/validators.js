export function username(rule, value, fn) {
    //验证用户名是否合法，4-8位的字母，数字。下划线
    if (/^\w{4,8}$/.test(value)) {
        return fn();
    }
    fn(new Error("用户名为4-8位的字母数字下划线"));
}
export function password(rule, value, fn) {
    if (/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
        return fn();
    }
    fn(new Error("密码要包含字母和数字"));
}
export function checkValue(data, name, rule, value, fn) {
    if (!value) {
        return fn(new Error(`${name}不能为空`))
    }
    if (data !== value) {
        return fn(new Error(`${name}和新密码不一致`))
    }
    fn();
}
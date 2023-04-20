import requset from "../request"
export function getSliders() {
    return requset({
        url:" http://localhost:3000/img",
    })
}
export function newList() {
    return requset({
        url:"http://localhost:3000/list"
    })
}
export function erlist(params:unknown) {
    return requset({
        params,
        url:"http://localhost:3000/erlist"
    })
}
import requset from "../request"
export function kecheng() {
    return requset({
        url:" http://localhost:3000/kecheng",
    })
}
export function tuijain() {
    return requset({
        url:"http://localhost:3000/tuijian"
    })
}
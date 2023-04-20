import requset from '../request'
export function course() {
    return requset({
        url:"http://localhost:3000/CourseList"
    })
}
export function fen() {
    return requset({
        url:"http://localhost:3000/lists"
    })
}
export function erfen() {
    return requset({
        url:"http://localhost:3000/listimg"
    })
}
export function erfens(params:unknown) {
    return requset({
        params,
        url:"http://localhost:3000/listimgs"
    })
}
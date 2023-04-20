import requset from '../request'
export function about() {
    return requset({
        url:"http://localhost:3000/about",
    })
}
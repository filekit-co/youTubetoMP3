import { youTubeURL } from "@store/data"

const load = async() => {
    let url = ''
    youTubeURL.subscribe(value => {
        url = value
    })

    return url;
}
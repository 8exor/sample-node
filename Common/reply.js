
const success = (message, data = null) => {

    let d = {
        status_code:1,
        message
    }

    if(data != null){
        d.data = data;
    }

    return d;
}


const failed = (message) => {
    let d = {
        status_code:0,
        message
    }

    return d;
}


export {
    success,
    failed
}
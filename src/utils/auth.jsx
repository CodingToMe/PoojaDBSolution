const getLocalUser =()=>{
    const localUser=  JSON.parse(localStorage.getItem('user'))
    return localUser
}

export {
getLocalUser
}
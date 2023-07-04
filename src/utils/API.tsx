import axios from "axios"

const URL = " http://localhost:2001/data"
const URL2 = " http://localhost:2001/process"
const URL3 = " http://localhost:2001/done"

export const createTask = async (data: any)=>{
    try {
     await axios.post(URL, data).then((res)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const createTask2 = async (data: any)=>{
    try {
     await axios.post(URL2, data).then((res)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const createTask3 = async (data: any)=>{
    try {
     await axios.post(URL3, data).then((res)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const readTask = async ()=>{
    try {
    return await axios.get(URL).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const readTask2 = async ()=>{
    try {
    return await axios.get(URL2).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const readTask3 = async ()=>{
    try {
    return await axios.get(URL3).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const updateTask = async (id: string)=>{
    try {
    return await axios.patch(`${URL}/${id}`, {completed: true}).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const updateTask2 = async (id: string)=>{
    try {
    return await axios.patch(`${URL2}/${id}`, {completed: false}).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteTask = async (id: string)=>{
    try {
    return await axios.delete(`${URL}/${id}`).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const deleteTask2 = async (id: string)=>{
    try {
    return await axios.delete(`${URL2}/${id}`).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const deleteTask3 = async (id: string)=>{
    try {
    return await axios.delete(`${URL3}/${id}`).then((res: any)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}
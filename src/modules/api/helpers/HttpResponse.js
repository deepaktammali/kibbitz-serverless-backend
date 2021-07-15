module.exports = {
    OK: (data) => {
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    },
    INTERNAL_SERVER_ERROR: (message = "INTERNAL SERVER ERROR") => {
        return {
            statusCode: 500,
            body: JSON.stringify({message})
        }
    },
    RESOURCE_CREATED: (data)=>{
        return {
            statusCode:201,
            body:JSON.stringify(data)
        }
    },
    UNAUTHORIZED:(message="Unauthorized")=>{
        return {
            statusCode:401,
            body:JSON.stringify({message})
        }
    }
}

// for promise handling type implementation (wrapper function to handle async task)

const asyncHandler = (requestHandler)=>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}

// const asyncHandler = (fn)=> {() => {} } is a higher order function that passes a function to a function


// for try catch block implementation (wrapper function to handle async task)

// const asyncHandler = (fn)=> async ( req, res, next) => {
//     try {
//         await fn(req, res, next)
//     }
//     catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
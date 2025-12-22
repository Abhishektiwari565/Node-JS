export const logger=(req,res,next)=>{
console.log(`request comes from ${req.method} method by this ${req.url}`)
next()
}
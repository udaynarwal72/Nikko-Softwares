import { decode } from 'jsonwebtoken';
const authsrt = "cloudnote";


const fetchuser=(req,res,next)=>{

    const token=req.header('auth-token');

    if(!token){
        res.status(401).send({error:"please authenticatet"})
    }

    const st =decode(token,authsrt)
    console.log(st)
    req.user=st.user;
    // console.log(st.user.id)
    next();

}


export default defaultfetchuser;
import {useState} from 'react';
import {  Link } from "react-router-dom";





const Post = ({auth})=>{

    const [designer, setDesigner] = useState('');
    const [cond, setCond] = useState('');
    const [age, setAge] = useState(0);
    const [style, setStyle] = useState('');
    const [note, setNote] = useState('');

    const onSubmit = async (e)=>{
        e.preventDefault();
       fetch('http://localhost:9000/api/post-item',
        {
          method:'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
    
          body: JSON.stringify({
           designer,cond,age,style,note
          })


        }
       )
       await setDesigner('')
       await setCond('')
       await setAge('')
       await setStyle('')
       await setNote('')
     
    }


    return(
        <>
        {auth ? 
        <div className="col-md-4 card p-3">
            <h3>Post an Item</h3>
            <div>
                <form action="#" onSubmit={onSubmit}>
                <div className="form-group">
                   
                    <input 
                    placeholder="Designer"
                    className="form-control" type="text" name="" id="" 
                    value={designer}
                    onChange={e=>setDesigner(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                    value={cond} onChange={e=>setCond(e.target.value)}
                    placeholder="Condition"
                    className="form-control" type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <input
                    value={age} onChange={e=>setAge(e.target.value)} 
                    placeholder="Age"
                    className="form-control" type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <input 
                    value={style} onChange={e=>setStyle(e.target.value)}
                    placeholder="Style"
                    className="form-control" type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <textarea
                    value={note} onChange={e=>setNote(e.target.value)}
                    placeholder="Addtional Notes"
                    className="form-control" id="" cols="30" rows="10"></textarea>
                </div>
                    <div>
                        <button className="btn btn-primary btn-block">Post</button>
                    </div>
                </form>
            </div>
        </div>
        : <p>You are not authorized. Please Login.</p>}
        </>
    )
}

export default Post;
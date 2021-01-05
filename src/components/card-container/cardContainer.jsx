import React from 'react';
import { useDispatch } from 'react-redux';
import {  addLike, removeLike, addPost,postText } from '../../store/actions/picGram-action';
import './cardContainer.css';

const CardContainer = (props) => {
  
    const dispatch = useDispatch();
    const clickLike = (value) => {dispatch(addLike(value))};
    const clickUnLike = (value) => {dispatch(removeLike(value))};
    const addComment = (obj) => {
        obj.post ? dispatch(addPost({ id: obj.id, post:obj.post })) : alert("Enter your comment");
  
    }
    const openModal = (src) => {
  
        var modal = document.getElementById("myModal");
        if(document.getElementsByClassName("democlass")[0]){
            var myobj = document.getElementsByClassName("democlass")[0];
            myobj.remove();
        }
         modal.style.display = "block";
         var x = document.createElement("IMG");
          x.setAttribute("src", src);
          x.setAttribute("class", "democlass")
          x.setAttribute("alt", "");
          document.getElementsByClassName("modal-content")[0].appendChild(x);
         
          window.onclick = function(event) {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          }
           }
    return ( 
      <div className="card-container" key={props.cardDetails.id}>
            <img onClick={()=>{openModal(props.cardDetails.url)}} src={props.cardDetails.url} alt={props.cardDetails.categogy} />
            <div className="likeSection"><div><span className="like-count">{props.cardDetails.likes}</span >

                {!props.cardDetails.like ? <span className="like" onClick={() => clickLike(props.cardDetails)} >Like</span> :
                    <span className="like" onClick={() => clickUnLike(props.cardDetails)} >Unlike</span>}


            </div><div>{props.cardDetails.category}</div></div>
            <div><input  style={{ "width": "80%" }} placeholder="type your comment here..." value={props.cardDetails.post} onChange={(e) => dispatch(postText(props.cardDetails.id,e.target.value))} /><span onClick={(e) => addComment(props.cardDetails)} className="post">Post</span></div>
            <div style={{ padding: "4px", overflow: "auto", height: "9.5em" }}>
                {props.cardDetails.comments.map((comments, key) =>
                    <div className="list" key={key}>{comments}</div>
                )}

            </div>
        </div>

   );
}
 
export default CardContainer;
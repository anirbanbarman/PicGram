import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import "./picContainer.css";
import { useDispatch } from 'react-redux';
import { mostLiked, mostComment, searchByCategory, addLike, removeLike, addPost } from '../store/actions/picGram-action';


const PicContainer = (props) => {
    const [post, setPost] = useState("");
    const inputElPost = useRef();

    const dispatch = useDispatch();
    const picData = useSelector(state => state.picGramData);

 const addComment = (obj) => {

        post ? dispatch(addPost({ id: obj.id, post })) : alert("Enter your comment");


    }
    const picCard = picData.pics.map((obj) =>
        <div className="card-container" key={obj.id}>
            <img onClick={()=>{openModal(obj.url)}} src={obj.url} alt={obj.categogy} />
            <div className="likeSection"><div><span className="like-count">{obj.likes}</span >

                {!obj.like ? <span className="like" onClick={() => clickLike(obj)} >Like</span> :
                    <span className="like" onClick={() => clickUnLike(obj)} >Unlike</span>}


            </div><div>{obj.category}</div></div>
            <div><input ref={inputElPost} style={{ "width": "80%" }} placeholder="type your comment here..." onChange={(e) => setPost(e.target.value)} /><span onClick={(e) => addComment(obj)} className="post">Post</span></div>
            <div style={{ padding: "4px", overflow: "auto", height: "9.5em" }}>
                {obj.comments.map((comments, key) =>
                    <div className="list" key={key}>{comments}</div>
                )}

            </div>
        </div>

    );

    const search = (value) => {

        dispatch(searchByCategory(value))
    }
    const clickLike = (value) => {

        dispatch(addLike(value))

    }
    const clickUnLike = (value) => {

        dispatch(removeLike(value))

    }
   
    const openModal = (src) => {
// Get the modal
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
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
   

    }
    return (

        <div>
            <div>

                <span className="span" onClick={() => dispatch(mostLiked())} >Most liked</span>
                <span className="span-division">|</span>
                <span className="span" onClick={() => dispatch(mostComment())} >Most Commented</span>
                <input className="input" onChange={(e) => search(e.target.value)} placeholder="Search Images..." />
            </div>
            <div className="pic-cotainer" >
                {picCard}
            </div>

            
            {/*  The Modal */}
            <div id="myModal" className="modal">

              
                <div className="modal-content">
                  
                   
                </div>

            </div>


        </div>
    );
}

export default PicContainer;
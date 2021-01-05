import React from 'react';
import { useSelector } from 'react-redux';
import "./picContainer.css";
import { useDispatch } from 'react-redux';
import { mostLiked, mostComment, searchByCategory } from '../store/actions/picGram-action';
import CardContainer from "./card-container/cardContainer";

const PicContainer = (props) => {
    const dispatch = useDispatch();

    const picData = useSelector(state => state.picGramData);
    const picCard = picData.pics.map((obj) => <CardContainer key={obj.id} cardDetails={obj} />);
    const search = (value) => { dispatch(searchByCategory(value)) }
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


          
            <div id="myModal" className="modal">
             <div className="modal-content">
              </div>

            </div>


        </div>
    );
}

export default PicContainer;
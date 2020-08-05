
           <div className = "grid">
               {
                   movieDeta.map((deta) => 
                   
               <div key ={uuidv4()}>
                   <LazyImage 
                   className="grid-cell"
                  src = {`${IMAGE_URL}${deta.poster_path}`}
                  alt = 'placeHolder'
                   >
        </button>
                       </div>
                        <div className="grid-detail">
                            <samp className = 'grid-detail-title'>{deta.title}</samp>
                            <div className="grid-detail-rating">
                            <Rating rating = {deta.vote_average} totalStars = {10} className ={''}/>
                                &nbsp; &nbsp;
                                <div className="grid-vote-average">{deta.vote_average}</div>
                            </div>
                        </div>
                   </LazyImage>
               </div>
                   )
               }
           </div>
        </>
    )
}
Grid.prototype = {
    list : PropTypes.array
}
export default Grid

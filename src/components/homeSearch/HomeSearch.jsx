import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import "./style.scss";
const HomeSearch = () => {
  return (
    <div  className="heroBanner">
        <ContentWrapper>
                <div className="heroBannerContent">
                    
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            // onChange={(e) => setQuery(e.target.value)}
                            // onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
      
    </div>
  )
}

export default HomeSearch

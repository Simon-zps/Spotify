import './styles/Featured.scss'

function Featured() {

    let songs = [
        {
            "img": "assets/images/kendrick.png",
            "title": "Kendrick Lamar - DAMN",
            "description":"Fourth studio album by American rapper Kendrick Lamar.",
        },
        {
            "img": "assets/images/popsmoke.png",
            "title": "Faith - Pop Smoke",
            "description": "Faith is the second and final studio album by American rapper Pop Smoke. It was released posthumously on July 16, 2021.",
        },
        {
            "img": "assets/images/travis.png",
            "title": "Travis Scott - Astroworld",
            "description": "Third studio album by American rapper Travis Scott. It was released on August 3, 2018 through Cactus Jack Records...",
        },
    ]

  return (
    <>
      <div className="featured-page_container">
        <div className="featured-page_content">
            <div className="songs-section">
                {songs.map((song, index) => {
                    return(
                        <div className="song-card" key={index}>
                            <div className="song-card_img"><img src={song.img} /></div>
                            <h2 className="song-card_title">{song.title}</h2>
                            <p className="song-card_description">{song.description}</p>
                            
                            <div className="song-card_btns">
                                <div className="song-card_img">
                                    <img src="assets/images/playbtn.png" alt="play button" />
                                </div>
                                
                                <p>Start listening</p>
                            </div>

                        </div>
                    )}
                )}
            </div>

            <div className="ad-section">
                <div className="ad-section_img">
                    
                    
                    <div className="ad-section_img_title">
                        <h2>Discover the latest hits with Spotify Premium</h2>
                    </div>

                    <div className="ad-card_btns">
                            <div className="ad-card_img">
                                <img src="assets/images/playbtn.png" alt="play button" />
                            </div>
                                
                            <p>Start listening</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Featured;
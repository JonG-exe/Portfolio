
import "../tutorial.css"
import tempProfilePhoto from "../images/jon-g-profile-picture.png"

function Tutorial() {

    return (
        <main>
            <div class="tutorial-container">
                    
                <div className="title-and-author">
                    <h1 className="h1-tutorial">SEO - A How To Guide</h1>

                    <div className="tutorial-author-profile">
                        <img className="author-img" src={tempProfilePhoto} />
                        <div className="author-name">by Jon.G</div>
                    </div>
                </div>

                {/* This break class is used to force item on new line */}
                <div className="break"></div>
                
                <div className="tutorial-content embedded-neu">

                    <img className="tutorial-content-img" src={tempProfilePhoto} alt="author's profile photo"/>

                    <p>
                        
                    </p>

                    
                </div>

                <div className="right-section"> 
                    <div className="ads embedded-neu"></div>

                    <div className="related-content-and-CV">

                        <div className="related-content embedded-neu"></div>

                        <div className="CV-placeholder embedded-neu"></div>

                    </div>

                </div>
                            
            </div>
        </main>
    )
}

export default Tutorial
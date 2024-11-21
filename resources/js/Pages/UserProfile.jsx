

export default function UserProfile(){
    

    return (
        <div className="user-profile">
            <div className="photo-section">
                <div className="photo-placeholder">
                    <img src="" alt="Uploaded" />
                    <button className="btn upload-btn">Upload Photo</button>
                </div>

                <div className="user-info">
                    <h1>Firstname Surname</h1>
                    <p>Graphic Designer</p>
                    <p>Location</p>
                    <p>Ratings</p>
                    <p>stars here...</p>

                    <div>
                        <h3>Josh's Listings</h3>
                        <div className="listings">
                            <div className="listing-item">Listing 1</div>
                            <div className="listing-item">Listing 2</div>
                            <div className="listing-item">Listing 3</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-about">
                <h3>About Josh</h3>
                <p>Contact: josh@mail.cz</p>
                <p>Email: josh@mail.com</p>
                <p>Biography goes here...</p>
            </div>
        </div>
    );
}
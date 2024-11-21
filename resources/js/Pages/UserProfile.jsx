import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function UserProfile() {
    const { user } = useContext(UserContext);

    const [profileData, setProfileData] = useState(null);

    const getProfileData = async () => {
        try {
            const profileDataResponse = await axios.get(
                `/api/profile/${user.id}`
            );
            setProfileData(profileDataResponse.data);
            console.log(profileDataResponse.data);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    useEffect(() => {
        if (user) {
            getProfileData();
        }
    }, [user]);

    if (!user || !profileData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="user-profile">
            <div className="photo-section">
                <div className="photo-upload">
                    <div className="photo-placeholder">
                        <img src="" alt="Uploaded" />
                    </div>
                    <button className="btn upload-btn">Upload Photo</button>
                    <div className="user-about">
                        <h3>About {user.firstname}</h3>
                        <p>Contact: {user.phone}</p>
                        <p>Email: {user.email}</p>
                        <p>
                            {profileData.bio && <p>Bio: {profileData.bio}</p>}
                        </p>
                    </div>
                </div>

                <div className="user-info">
                    <h2>
                        {user.firstname} {user.surname}
                    </h2>
                    <p>{profileData.job_title || "Job Title not available"}</p>
                    <p>Location: {profileData.location || "Not Provided"}</p>
                    <p>Ratings: {profileData.ratings || "Not Rated"}</p>
                    <div>
                        <h3>{user.firstname}'s Listings</h3>
                        <div className="listings">
                            {user.services?.map((service) => {
                                return (
                                    <div
                                        className="listing-item"
                                        key={service.id}
                                    >
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function UserProfile() {
    const { user } = useContext(UserContext);

    const [profileData, setProfileData] = useState(null);
    const [isEditing, setIsEditing] = useState(false); 
    const [formData, setFormData] = useState({
        firstname: profileData?.user?.firstname,
        surname: profileData?.user?.surname,
        job_title: profileData?.job_title,
        bio: profileData?.bio,
        location: profileData?.location
    });

    const getProfileData = async () => {
        try {
            const profileDataResponse = await axios.get(
                `/api/profile/${user.id}`
            );
            setProfileData(profileDataResponse.data);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };


    useEffect(() => {
        if (user) {
            getProfileData();
        }
    }, [user]);



    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`api/profile/${user.id}/update`, formData);
            setIsEditing(false);
            getProfileData();
        } catch (error) {
            console.error('Error updating profile', error);
            
        }
    }




    if (!user || !profileData) {
        return <p>Loading...</p>;
    }



    return (
        <div className="profile-container">
            <div className="photo-section">
                <div className="photo-upload">
                    <div className="photo-placeholder">
                        <img src="" alt="Uploaded" />
                    </div>
                    <button className="btn upload-btn">Upload Photo</button>
                </div>

                <div className="user-info">
                    {!isEditing ? (
                        <>
                            <h2>
                                {user.firstname} {user.surname}
                            </h2>
                            <p className="job_title">
                                {profileData.job_title ||
                                    "Job Title not available"}
                            </p>
                            <p>
                                <strong>Location: </strong>
                                {profileData.location || "Not Provided"}
                            </p>
                            <p>
                                <strong>Ratings:</strong>{" "}
                                {profileData.ratings || "Not Rated"}
                            </p>
                            <p>
                                <strong>Contact:</strong> {user.phone}
                            </p>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                            <p>
                                {profileData.bio && (
                                    <span>Bio: {profileData.bio}</span>
                                )}
                            </p>

                            <button
                                onClick={() => setIsEditing(true)}
                                className="btn"
                            >
                                Edit Profile
                            </button>
                        </>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="edit-profile-form"
                        >
                            <h2>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleInputChange}
                                    placeholder="Last Name"
                                />
                            </h2>
                            <p>
                                <input
                                    type="text"
                                    name="job_title"
                                    value={formData.job_title}
                                    onChange={handleInputChange}
                                    placeholder="Job Title"
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="Location"
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    placeholder="Write something about yourself"
                                />
                            </p>

                            <button type="submit" className="btn save-btn">
                                Save Changes
                            </button>
                            <button
                                type="button"
                                className="btn"
                                onClick={() => setIsEditing(false)}
                            >
                                Cancel
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <div>
                <h3 className="listing-title">{user.firstname}'s Listings</h3>
                <div className="listings">
                    {profileData.user?.services?.map((service) => {
                        return (
                            <div className="listing-item" key={service.id}>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


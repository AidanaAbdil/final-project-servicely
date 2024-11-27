import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function UserProfile() {
    const { user } = useContext(UserContext);

    const [profileData, setProfileData] = useState(null);
    const [isEditing, setIsEditing] = useState(false); 
    const [formData, setFormData] = useState({
        firstname: '',
        surname: '',
        job_title: '',
        bio: '',
        location: ''
    });

    const [image, setImage] = useState('');


    const getProfileData = async () => {
        try {
            const profileDataResponse = await axios.get(
                `/api/profile/${user.id}`
            );
            setProfileData(profileDataResponse.data);
            setImage(profileDataResponse.data.image_url)
            
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };


    useEffect(() => {
        if (user) {
            getProfileData();
        }
    }, [user]);


    const handleImageChange = async (e) =>{
        const target = e.target;

        if (target.files.length) {
            const image = e.target.files[0];

            const imageFormData = new FormData();
            imageFormData.append('image', image);

            const response = await axios.post(`/api/profile/${user.id}/update-image`, imageFormData);

            setImage(response.data);
        }
    }
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        for (const key in formData) {
            if (!formData[key]) {
                formData[key] = profileData[key] ?? profileData.user[key];
            }
        }

        try {
            const response = await axios.post(`/api/profile/${user.id}/update`, formData);
            console.log(response.data);
            
            setIsEditing(false);
            setProfileData(response.data)
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
                        {image && (
                            <img
                                className="profile-picture"
                                src={"/" + image}
                                alt="profile_picture"
                            />
                        )}
                    </div>
                    <label className="image-submit" htmlFor="image">
                        Update photo
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        className="btn"
                        onChange={handleImageChange}
                        hidden
                    />
                </div>

                <div className="user-info">
                    {!isEditing ? (
                        <>
                            <h2>
                                {profileData.user.firstname}{" "}
                                {profileData.user.surname}
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
                                <label htmlFor="firstname"> Update Name:</label>
                                <input
                                    className="edit-profile-input"
                                    type="text"
                                    name="firstname"
                                    defaultValue={profileData.user.firstname}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                />
                                <input
                                    className="edit-profile-input"
                                    type="text"
                                    name="surname"
                                    defaultValue={profileData.user.surname}
                                    onChange={handleInputChange}
                                    placeholder="Last Name"
                                />
                            </h2>

                            <label htmlFor="job_title">Job title: </label>
                            <input
                                className="edit-profile-input"
                                type="text"
                                name="job_title"
                                defaultValue={profileData.job_title}
                                onChange={handleInputChange}
                                placeholder="Job Title"
                            />

                            <label htmlFor="location">Location: </label>
                            <input
                                className="edit-profile-input"
                                type="text"
                                name="location"
                                defaultValue={profileData.location}
                                onChange={handleInputChange}
                                placeholder="Location"
                            />

                            <label htmlFor="bio">Bio: </label>
                            <input
                                className="edit-profile-input"
                                type="text"
                                name="bio"
                                defaultValue={profileData.bio}
                                onChange={handleInputChange}
                                placeholder="Write something about yourself"
                            />
                            <br />
                            <br />

                           
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


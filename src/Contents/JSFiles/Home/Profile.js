import React from 'react';
import '../../../Contents/CSSFiles/Skills.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

export const Profile = () => {

    const [noProfileFound,
        setNoProfileFound] = useState("");
    const [profiles,
        setProfiles] = useState([]);
    let url = "https://www.google.com/search?q="

    // Get Profile Summary
    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/profiles`).then((res) => {
            if (res) 
                setProfiles(res.data);
            return
        }).catch(err => {
            setNoProfileFound("No profile summary added. Admin check if database exist");
            console.log(err);
        })
    }, []);
    return (
        <div>

            {noProfileFound || profiles
                ?.map((profile) => (
                    <div>
                        <div>
                            <h2>
                                <a
                                    href={url + profile.profiletitle}
                                    target="blank"
                                    style={{
                                    textDecoration: 'none',
                                    color: "white",
                                    backgroundColor: 'midnightblue',
                                    marginTop: '30px',
                                    borderRadius: '30px',
                                    padding: '10px'
                                }}>
                                    {profile.profiletitle}
                                </a>
                            </h2>
                        </div>
                        <hr size="10"/>
                        <div class="profile">
                            <strong >
                                {profile.profile}
                            </strong>
                        </div>
                    </div>
                ))}
        </div>
    )

}
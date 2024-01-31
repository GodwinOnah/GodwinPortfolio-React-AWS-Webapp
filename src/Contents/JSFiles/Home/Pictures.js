// import axios from 'axios';
import {useState, useEffect} from 'react';
import {Fade} from 'react-slideshow-image';
import '../../../Contents/CSSFiles/HeroSection.css';

export const Pictures = () => {

    const [pictures,
        setPictures] = useState([]);
    const [noPhotoFound,
        setNoPhotoFound] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/photos`).then(res => {
            return res.json();
        }).then((data) => {
            setPictures(data);
        }).catch(err => {
            setNoPhotoFound('No photo added. Check of database exist');

        })
    }, []);

    return (
        <div className="slide-container">
            <Fade>
                {noPhotoFound || pictures
                    ?.map((picture) => (
                        <div class="slideshow">
                            {< img src = {
                                `${process.env.REACT_APP_URL}/photo_images/` + picture.photo
                            }
                            alt = "This is not an image"
                            onerror = "this.onerror=null; this.src='/Resources/images/default_img.png'" />
}</div>
                    ))}
            </Fade>
        </div>
    )
};
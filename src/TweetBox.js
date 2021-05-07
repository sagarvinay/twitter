import { Button, Avatar } from '@material-ui/core'
import React, { useState } from 'react';
import "./TweetBox.css";

import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [imageURL, setImageURL] = useState("");
    
    const sendTweet = (e) => {
        e.preventDefault(); 
        db.collection("posts").add({
            displayName: "Rafeh Qazi",
            userName: "cleverqazi",
            verified: true,
            text: tweetMessage,
            avatar: "https://t3.ftcdn.net/jpg/02/45/28/14/360_F_245281469_8BxP6VT7st0gj6qNfLUVVq1UJt0NfFEd.jpg",
            image: imageURL
        })
        setTweetMessage(' ');
        setImageURL(' ');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar alt="avatar photo" src="https://t3.ftcdn.net/jpg/02/45/28/14/360_F_245281469_8BxP6VT7st0gj6qNfLUVVq1UJt0NfFEd.jpg" />
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?"></input>
                </div>
                <input onChange={e => setImageURL(e.target.value)} value={imageURL} className="tweetBox__inputImage" placeholder="Enter Image URL" ></input>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox

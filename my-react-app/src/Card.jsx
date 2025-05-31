import profilePic from '/src/assets/small_weddingphoto.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Tim & Emily</h2>
            <p className="card-text">06/11/2022</p>

        </div>
    )

}

export default Card;
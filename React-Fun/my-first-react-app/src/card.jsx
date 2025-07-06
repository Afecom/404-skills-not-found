import myProfile from './assets/Profile-pic.jpeg'

function Card(){
    return(
        <div className="card-container">
            <img src={myProfile} alt="my profile picture" />
            <h2>Nuru Kamil</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quidem id autem aut eius culpa ab rerum, atque ipsam necessitatibus sit voluptate ipsum officiis! Consectetur voluptatem repellendus amet repudiandae modi?</p>
        </div>
    );
}

export default Card
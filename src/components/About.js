
function About({ image="https://via.placeholder.com/215", about }) {
    // console.log(props)
    return (<aside>
        <img src={image} alt="blog logo"></img>
        <p>{about}</p>
    </aside>)
}

export default About
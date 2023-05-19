import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("../skill");
    };
    return (
        <>
            <h3>ini halaman about</h3>
            <button onClick={handleClick}>klik untuk ke halaman skill</button>
        </>
    );
};

export default About;

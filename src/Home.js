import './App.css';
import LoginField  from './LoginField'
import MatrixBG from './MatrixBG';


const Home = () => {


    return (
        <div id="container">
            <div id="bg">
                <MatrixBG />
            </div>
            <div >
                <LoginField />
            </div>
        </div>
    );
};

export default Home;
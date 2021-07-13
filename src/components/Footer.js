import './styles/Footer.css'
import logo from './images/githubLogo.png'
function Footer() {
    return (
        <div className='footer'>
            <div>
                <a href='https://github.com/ChaonengTan/FEW2.3-PizzaOrder'>
                    <img src={logo}/>
                </a>
            </div>
        </div>
    )
}

export default Footer
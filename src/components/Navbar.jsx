import { Search, ShoppingCartOutlined } from 'material-ui/icons';
import ''
import { Badge } from 'material-ui';
//import


const Navbar = () => {
  return(
<div className="navbar">
  <div className="narWrapper">
    <div className="narLeft">
      <span className ="navLanguage">KR</span>
       <div className= "navSearchContainer">
        <input type="text" className='navInput'/>
         <search/>
       </div>
    </div >
    <div className="navCenter">
      <h1 className="navLogo">Goldman</h1>
    </div>
    <div className="navRight">
      <div className="navMenuItem">Profile</div>
      <div className="navMenuItem">Logout</div>
      <Badge badgeContent = {1} color='secondary'>
        <ShoppingCartOutlined/>
      </Badge>
    </div>
  </div>
</div>
  )
}

export default Navbar;
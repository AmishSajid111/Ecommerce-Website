import { Selector, useSelector } from "react-redux";
const mapState=({user})=>({
    currentUser:user.currentUser
});
const useAuth=props=>{
    const {currentUser}=useSelector(mapState)
return currentUser;
}
export default useAuth;
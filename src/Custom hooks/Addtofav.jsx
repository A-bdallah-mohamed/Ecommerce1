
import { useAuth } from '../config/authcontext'
import useScrollToTop from './ScrolltoTop';
export  function useAddtofav() {
    const scrollToTop = useScrollToTop();
     const { currentUser } = useAuth();

     const AddtoFavourite = (producttt) => {

        if(currentUser == null){
            const key = "items";
            const existingArray = JSON.parse(localStorage.getItem(key)) || [];

            const isalreadyinthearray = existingArray.some(product => product.name === producttt.name)
            if(!isalreadyinthearray){
                existingArray.push(producttt);
                localStorage.setItem(key, JSON.stringify(existingArray));
                console.log("Item added:", producttt);
                console.log("Updated array:", existingArray);
                window.location.reload() 
                scrollToTop()
            }
else{
    console.log("item already in wishlist")
}
 //   const { currentUser, loading } = useAuth();
 //   {currentUser ? (
 //   <p>Welcome, {currentUser.displayName || currentUser.email}!</p>
 //    ) : (
 //     <p>No user is signed in.</p>
 //   )}

        }
        else{

        }

     }
  return AddtoFavourite;
}

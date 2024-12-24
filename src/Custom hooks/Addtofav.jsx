
import { useAuth } from '../config/authcontext'
export  function useAddtofav() {
     const { currentUser, loading } = useAuth();

     const AddtoFavourite = (producttt) => {

        if(!currentUser){
            const key = "items";
            const existingArray = JSON.parse(localStorage.getItem(key)) || [];

            const isalreadyinthearray = existingArray.some(product => product.name === producttt.name)
            if(!isalreadyinthearray){
                existingArray.push(producttt);
                localStorage.setItem(key, JSON.stringify(existingArray));
                console.log("Item added:", producttt);
                console.log("Updated array:", existingArray);
            }
else{
    console.log("item already in wishlist")
}
 //   {currentUser ? (
 //   <p>Welcome, {currentUser.displayName || currentUser.email}!</p>
 //    ) : (
 //     <p>No user is signed in.</p>
 //   )}

        }
     }
  return AddtoFavourite;
}

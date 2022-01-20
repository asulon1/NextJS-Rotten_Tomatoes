import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"

const Comments = () => {
    // const [comments,setComments] = useState([])

//     const q = query(collection(db, "Comments"));

//   console.log("result", db);

    // useEffect(() => {
    //     const collectionRef = collection (db, "Comments")
    //     const q = query(collectionRef, orderBy ("timestamp", "desc"));

    //     const unsubscribe = onSnapshot (q, (querySnapshot) => {
    //         setComments(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, timestamp: doc.data().
    //         timestamp?.toDate().getTime() })))
    //      });

    // return unsubscribe;

    //     },[])
async function test({db}) {
    const q = query(collection(db, "Comments"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

  console.log(doc.id, " => ", doc.data());
})}
    // useEffect(
    //     () =>
    //       onSnapshot(
    //         query(collection(db, 'Comments'), orderBy("timestamp", "desc")),
    //         (snapshot) => {
    //           setComments(snapshot.docs);
    //         }
    //       ),
    //     [db]
    //   );
    // //   console.log(comments);
    return (
        <div>
            {/* {comments.map(comment=><div key={comment.id}>{comment.data().title}</div>)} */}
        </div>
    )

}
export default Comments



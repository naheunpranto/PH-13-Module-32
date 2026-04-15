import { use } from "react";

export default function Friends({friendsPromise}) {

    const friends = use(friendsPromise);
    console.log(friends);

    return(
        <div>
            <h1 className="card">Friends {friends.length}</h1>
        </div>
    )
}
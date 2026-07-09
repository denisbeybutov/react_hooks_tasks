
import useDefault from "../hooks/useDefault";

export default function Default(){
    const initialUser = { name: 'Marshall' };
    const defaultUser = { name: 'Mathers' };
    const [user, setUser] = useDefault(defaultUser, initialUser);

    return (
        <div>
        <div>User: {user.name}</div>
        <input onChange={(e) => setUser({ name: e.target.value })} />
        <button onClick={() => setUser(null)}>reset</button>
        </div>
    );
}
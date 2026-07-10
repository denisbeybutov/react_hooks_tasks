import { useState } from "react";

export default function useDefault(defaultUser, initialUser){
    const [user, setUser] = useState(initialUser)

    return [user ?? defaultUser, setUser]
}
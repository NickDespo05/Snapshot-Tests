import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

export default function GitHubCard() {
    const [gitHubStuff, setGitHubStuff] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/NickDespo05")
            .then((res) => res.json())
            .then((data) => {
                setGitHubStuff(
                    <div>
                        <p>{data.name} </p>
                        <p>{data.bio}</p>
                        <img src={data.avatar_url} />
                    </div>
                );
            });
    }, []);

    return (
        <div>
            <Card>{gitHubStuff}</Card>
        </div>
    );
}

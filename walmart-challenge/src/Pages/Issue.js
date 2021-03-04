import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../Css/Issue.css';

export default function Issue(props) {
    const location = useLocation();
    const history = useHistory();
    const data = location.state.data;
    const [repo, setRepo] = useState({});

    const getRepo = (repo) => {
        let obj = {};
        fetch(repo)
        .then(res => res.json())
        .then(data => {
            obj.url = data.html_url;
            obj.repo_name = data.full_name;
            setRepo(obj);

        })
        .catch(err => console.log(err));

        return obj;
    }

    useEffect(() => {
        getRepo(data.repository_url)
    }, [])

    return (
        <div className="issue-page">
            <div className="left-divider">
                <div className="important-info">
                    <h2 id="title-issue">{data.title}</h2>
                    <hr />

                    <div className="details-container">
                        <div className="details-issue-label">
                            <h4>State: </h4>
                            <h4>Issue Number: </h4>
                            <h4>User: </h4>
                            <h4>Locked: </h4>
                            <h4>Comments: </h4>
                            <h4>Author: </h4>
                            <h4>Created at: </h4>
                            <h4>Last Updated at: </h4>
                        </div>
                        <div className="details-issue">
                            <h4>{data.state}</h4>
                            <h4>{data.number} </h4>
                            <h4>{data.user.login}</h4>
                            <h4>{data.locked ? 'Yes' : 'No'}</h4>
                            <h4>{data.comments} </h4>
                            <h4>{data.author_association}</h4>
                            <h4>{new Date(data.created_at).toString().split(" ").slice(0, 4).toString().replaceAll(",", " ")}</h4>
                            <h4>{new Date(data.updated_at).toString().split(" ").slice(0, 4).toString().replaceAll(",", " ")}</h4>
                        </div>
                    </div>

                    <hr />

                    <div className="avatar-image">
                        <img src={data.user.avatar_url} width={200} height={200} alt="avatar"></img>
                    </div>
                </div>
            </div>

            <div className="url-issue">
                <div className="main-url-section">
                    <section className="body">
                        <h1>Current Issue in detail</h1>
                        <h4>{data.body ? data.body : "There is currently no body to this issue."}</h4>
                    </section>

                    <section className="issue-url">
                        <h1>URL to the Issue: </h1>
                        <h4><a href={data.html_url}>{data.html_url}</a></h4>
                    </section>

                    <section className="repo-url">
                        <h1>URL to the Repo: </h1>
                        <h4><a href={repo.url}>{repo.url}</a></h4>
                    </section>

                    <section className="repo-name">
                        <h1>Full name of the Repo: </h1>
                        <h4>{repo.repo_name}</h4>
                    </section>
                </div>
            </div>

            <div className="main-menu-button">
                <Button variant="primary" id="return-button" 
                    onClick={() => history.push("/")}>Return to main page</Button>
            </div>
        </div>
    )
}
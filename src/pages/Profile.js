import React, { Fragment, useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContext';
import {Link} from 'react-router-dom';
import {Repos} from '../components/Repos';

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  },[])

  if(loading){
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url, location,
    bio, blog, login, html_url, followers,
    following, public_repos, public_gists 
  } = user;


  return (
    <>
      <Link to="/" className="btn btn-link">Go home</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img 
                src={avatar_url}
                alt={name}
                style={{width:'200px'}}
                />
                <a 
                href={html_url}
                target="_blank"
                rel="noreferrer" 
                className="btn btn-primary d-block mt-1"
                >Github profile</a>
            </div>
            <div className="col">
              <h2>{name}</h2>
              {location && <p>{location}</p>}
              {bio && <p>{bio}</p>}
                <ul style={{listStyle:'none'}} className="p-0">
                  {login && <li>
                    <strong>Username: </strong>{login}
                    </li>}

                    {company && <li>
                    <strong>Company: </strong>{company}
                    </li>}

                    {blog && <li>
                    <strong>Website: </strong>{blog}
                    </li>}
                </ul>
                <div className="badge badge-primary mr-1">Followers: {followers}</div>
                <div className="badge badge-success mr-1">Following: {following}</div>
                <div className="badge badge-info mr-1">Repos: {public_repos}</div>
                <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
     <Repos repos={repos} />
    </>
  )
}
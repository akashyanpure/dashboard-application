import React from 'react'
import './Card.css';
import './AnimateCard.jsx'

export const Users = ({users}) => {
    console.log("user",users)
    if (users.length === 0) return null
    const Row = (user) => {
        return (
            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-8">
            <article class="material-card Red">
                <h2>
                    <span><i class="fa fa-fw fa-star"></i>{user.title}</span>
                    <div style={{ textAlign: 'justify' }}>
                    <h6>{user.description}</h6>
                    </div>
                        
                </h2>
                <div class="mc-content">
                    <div class="img-container">
                    <a href={user.dashboard_url} rel="noreferrer noopener">
                        <img class="img-responsive img-thumbnail" src={user.image_url}/>
                    </a>
                    </div>
                    {/* <div class="mc-description">
                        He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
                    </div> */}
                </div>
                {/* <a class="mc-btn-action">
                    <i class="fa fa-bars"></i>
                </a> */}
                <div class="mc-footer">
                    <h4>
                        Social
                    </h4>
                    <a class="fa fa-fw fa-facebook"></a>
                    <a class="fa fa-fw fa-twitter"></a>
                    <a class="fa fa-fw fa-linkedin"></a>
                    <a class="fa fa-fw fa-google-plus"></a>
                </div>
            </article>
        </div>
        )
}
                                   


    const userTable = users.map((user,index) => Row(user,index))
    console.log('userTable', userTable)

    return(
        <section class="container">
        <div class="row">
            {userTable}
        </div>
    </section>
    )
}
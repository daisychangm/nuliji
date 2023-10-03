import React from 'react';

function Profile() {
    return (
        <div class="navbar">
            <ul>
                <li><Link to="/App">
                    <button class="btn btn-home"></button>
                </Link></li>
                <li><Link to="/Profile">
                    <button class="btn btn-profile"></button>
                </Link></li>
                <li><Link to="/Avatar">
                    <button class="btn btn-avatar"></button>
                </Link></li>
            </ul>
        </div>
    );
  }

export default Profile
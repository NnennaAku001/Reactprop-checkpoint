import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({fullName , bio , profession ,children }) => {
    Profile.defaultProps = { fullName: 'Nnenna D Nwaenyi',  bio: "Fashion Euthasim",  profession: 'Fashion stylist',
     children: `<img src="./Pic/Photo.jpg" alt="MyProfile"/>`}

     Profile.propTypes = {fullName: PropTypes.string, bio: PropTypes.string, profession: PropTypes.string, children: PropTypes.string }

 return (
    <div>
        <h1>
            FullName: {fullName}.
            <br />
            
            Bio: {bio}.
            <br />
            
            Profession: {profession}.
        </h1>

        {children}
        <br />
        
    </div>
)
}


export default Profile;

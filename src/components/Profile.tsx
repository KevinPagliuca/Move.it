import React from 'react';
import { useSession } from 'next-auth/client';
import { useChallenges } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


const Profile: React.FC = () => {
    const { level, accumulatedExperience } = useChallenges();
    const [session] = useSession();

    const { image, name } = session.user;

    return (
        <div className={styles.profileContainer}>
            <img src={image} alt={name} />
            <div>
                <header>
                    <strong>{name}</strong>
                    <p><img src="icons/level.svg" alt="Level Up Icon" />Level {level}</p>
                    <p><span>{accumulatedExperience}</span> xp</p>
                </header>                
            </div>
        </div>
    );
}

export default Profile;
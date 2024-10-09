import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'marlo',
        name: 'Marlon',
        isFolowing: true
    },
    {
        userName: 'sure',
        name: 'Elias',
        isFolowing: false
    },
    {
        userName: 'chepe',
        name: 'Jose',
        isFolowing: true
    }
]

export function App() {
    return <>
        {
            users.map(user => {
                const { userName, name, isFolowing } = user
                return (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFolowing}
                    />
                )
            })
        }
    </>
}
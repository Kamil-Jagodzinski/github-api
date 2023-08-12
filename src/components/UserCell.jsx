import { Avatar, Typography, Stack, Link, IconButton, Box } from '@mui/material'
import { loadRepositories } from '../api/githubAPI'
import { selectUser } from '../api/githubAPI'
import { GitContext } from '../GitContext'
import { useContext } from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'

const UserCell = (props) => {
    const {
        setSelectedUser,
        setRepositories,
        setUpper,
        setMain,
        isLoggedIn,
        followingList,
        setFollowingList,
    } = useContext(GitContext)

    const switchToUser = async (user) => {
        let selected = await selectUser(user)
        let repos = await loadRepositories(user)
        setSelectedUser(selected)
        setRepositories(repos)
        setUpper('card')
        setMain('repos')
    }

    const isOnFollowingList = (user) => {
        return followingList.includes(user)
    }

    const addToFollowingList = async () => {
        const newUser = {
            login: props.login,
            url: props.url,
            avatar: props.avatar,
        }

        setFollowingList([...followingList, newUser])
    }

    const dropFromFollowingList = async () => {
        const updatedFollowingList = followingList.filter(
            (user) => user.login !== props.login
        )

        setFollowingList(updatedFollowingList)
    }

    return (
        <Stack
            direction="row"
            gap={3}
            onClick={() => switchToUser(props.login)}
            sx={{
                m: 1,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: 'white',
                borderRadius: '10px',
                boxSizing: 'border-box',
                height: '3rem',
                px: 4,
                alignItems: 'center',
                ':hover': {
                    scale: '1.02',
                    boxShadow: 'inset 1px 1px 28px 0px #2861F3;',
                },
            }}
        >
            <Avatar src={props.avatar} />
            <Typography variant="h5"> {props.login} </Typography>

            <Box sx={{ ml: 'auto' }}>
                <IconButton
                    variant="outlined"
                    sx={{
                        cursor: 'pointer',
                        borderColor: 'white',
                        borderRadius: '10px',
                        boxSizing: 'border-box',
                        mx: 2,
                        ':hover': {
                            scale: '1.02',
                            boxShadow: 'inset 1px 1px 28px 0px #888888;',
                        },
                        color: 'white',
                    }}
                >
                    {isLoggedIn === false ? (
                        <></>
                    ) : isOnFollowingList(props.login) ? (
                        <PersonRemoveIcon onClick={dropFromFollowingList} />
                    ) : (
                        <PersonAddAlt1Icon onClick={addToFollowingList} />
                    )}
                </IconButton>

                <Link
                    href={props.url}
                    target="_blank"
                    variant="caption"
                    underline="hover"
                >
                    {' '}
                    Github Profile{' '}
                </Link>
            </Box>
        </Stack>
    )
}

export { UserCell }

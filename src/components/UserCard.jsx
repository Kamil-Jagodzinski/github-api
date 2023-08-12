import { Stack, Avatar, Typography, Link, IconButton, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { GitContext } from '../GitContext'
import { useContext } from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'

const UserCard = (props) => {
    const { setUpper } = useContext(GitContext)

    return (
        <>
            {props.user !== null ? (
                <Box
                    sx={{
                        m: 'auto',
                        p: 1,
                        boxSizing: 'border-box',
                        width: '100%',
                    }}
                    variant="outlined"
                >
                    <Stack
                        direction="row"
                        sx={{ height: '11vmin', alignItems: 'center' }}
                    >
                        <Avatar
                            src={props.user.avatar_url}
                            alt={props.user.login}
                            sx={{
                                width: '10vmin',
                                height: '10vmin',
                                m: 1,
                                border: '3px solid',
                                borderColor: 'primary.main',
                            }}
                        />
                        <Typography variant="h4">{props.user.login}</Typography>
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
                                    boxShadow:
                                        'inset 1px 1px 28px 0px #888888;',
                                },
                                color: 'white',
                            }}
                        >
                            {1 ? <PersonAddAlt1Icon /> : <PersonRemoveIcon />}
                        </IconButton>
                        <IconButton
                            onClick={() => setUpper('list')}
                            sx={{
                                ml: 'auto',
                                mb: 'auto',
                                backgroundColor: 'gray',
                                ':hover': {
                                    scale: '1.02',
                                    backgroundColor: 'primary.main',
                                },
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Stack>

                    <Stack sx={{ ml: 3, my: 2 }}>
                        <Link
                            href={props.user.html_url}
                            target="_blank"
                            variant="body2"
                            underline="hover"
                        >
                            {'Github account: ' + props.user.name}
                        </Link>
                        <Typography variant="body2">
                            {props.user.bio}
                        </Typography>
                    </Stack>

                    <Stack sx={{ ml: 3, my: 1, gap: 0.5 }}>
                        <Typography variant="body2">
                            {'Public repos: ' + props.user.public_repos}
                        </Typography>
                        <Typography variant="body2">
                            {'Followers: ' + props.user.followers}
                        </Typography>
                        <Typography variant="body2">
                            {'Following: ' + props.user.following}
                        </Typography>
                        <Typography variant="body2">
                            {'Last activity: ' + props.user.updated_at}
                        </Typography>
                    </Stack>
                </Box>
            ) : (
                <Typography variant="h3">Ups!? No users found </Typography>
            )}
        </>
    )
}

export { UserCard }

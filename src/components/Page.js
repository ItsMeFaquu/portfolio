import { Container, Box } from '@mui/material'
import Navbar from './Navbar'

export default function Page(props) {
    const { children, sx } = props

    return <Container
        maxWidth="100vw"
        height= '100vw'
        sx={{
            ...sx,
            p: 10
        }}>
        {children}
    </Container >
}
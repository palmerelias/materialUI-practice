import { Container } from "@mui/material";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Socials() {
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            mt: 3
          }} >
            <RssFeedIcon color="disabled" sx={{ mr: 1}}/>
            <TwitterIcon color="disabled" sx={{ mr: 1}}/>
            <LinkedInIcon color="disabled" sx={{ mr: 1}}/>
            <YouTubeIcon color="disabled" sx={{ mr: 0}}/>
        </Container>
    )
}
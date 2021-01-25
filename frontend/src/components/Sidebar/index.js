import React from 'react';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FindInPageIcon from '@material-ui/icons/FindInPage';

import { SidebarContainer, UnorderedList, ListItem, Separator } from './styles';
import { Link } from 'react-router-dom';

export default function Sidebar({ sidebarStatus }){
    return(
        <SidebarContainer sidebarStatus={sidebarStatus === true && window.innerWidth > 1000 ? 'block' : 'none'}>
            {/* <UnorderedList>
                <ListItem><LocalOfferIcon fontSize='large' color='inherit'/> Tags</ListItem>
                <ListItem><EmojiEmotionsIcon fontSize='large' color='inherit'/> Parodys</ListItem>
                <ListItem><PersonIcon fontSize='large' color='inherit'/> Character</ListItem>
                <ListItem><BubbleChartIcon fontSize='large' color='inherit'/> Artists</ListItem>
                <ListItem><PeopleAltIcon fontSize='large' color='inherit'/> Group</ListItem>
            </UnorderedList>
            <Separator /> */}
            <UnorderedList>
                <Link to="/s/views"><ListItem><VisibilityIcon fontSize='large' color='inherit'/> Most Viewed</ListItem></Link>
                <Link to="/s/highscore"><ListItem><FavoriteIcon fontSize='large' color='inherit'/> Most Liked</ListItem></Link>
                <ListItem><FindInPageIcon fontSize='large' color='inherit'/> Most Searched</ListItem>
            </UnorderedList>
        </SidebarContainer>
    );
}
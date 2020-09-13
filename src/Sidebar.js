import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, InsertCommentRounded, PeopleAlt } from '@material-ui/icons';
import React, {useState, useEffect} from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import db from './firebase';
import {useStateValue} from "./StateProvider";

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => (
                setChannels(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        name: doc.data().name
                    })))
            )
        )
    }, []);

    return (
        <div className="sidebar">
            <div class="sidebar__header">
                <div class="sidebar__info">
                    <h2>Programmers world</h2>
                    <h3>
                        <FiberManualRecord/>
                        {user?.displayName}
                    </h3>
                </div>
                <Create/>
            </div>
            <SidebarOption Icon={InsertComment} title="thread"/>
            <SidebarOption Icon={Inbox} title="Mentions and reactions"/>
            <SidebarOption Icon={Drafts} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
            <SidebarOption Icon={PeopleAlt} title="People"/>
            <SidebarOption Icon={Apps} title="Apps"/>
            <SidebarOption Icon={FileCopy} title="File browser"/>
            <SidebarOption Icon={ExpandLess} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMore} title="Channels"/>
            <hr/>
            <SidebarOption Icon={Add} addChannelOption title="Add channel"/>
            {
                channels.map(channel => {
                    return (
                        <SidebarOption title={channel.name} id={channel.id}/>)
                })
            }         
        </div>
    );
}

export default Sidebar

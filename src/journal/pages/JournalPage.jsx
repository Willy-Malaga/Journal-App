import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (

    <JournalLayout>
      {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, atque, omnis perspiciatis voluptatibus error, laudantium mollitia nobis nihil sequi eveniet libero reprehenderit ea eius nulla dolore corrupti quidem voluptate vitae.</Typography>      */}
    
      <NothingSelectedView/>
      {/* <NoteView/> */}
     
      
      <IconButton
        size='large'
        sx={ {
          color: 'white',
          backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >

        <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>
      
    </JournalLayout>

    
  )
}

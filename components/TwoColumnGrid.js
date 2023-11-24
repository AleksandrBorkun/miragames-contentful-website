import Grid from '@mui/material/Grid';
import { renderComponent } from 'contentful/utils';

const TwoColumnGrid = ({content, isHorizontal = false})=>(
    <Grid container sx={{marginTop: 4, columns: {xs: 1, md: 2}}}>
        {content && content.map((component, key) => 
            <Grid maxWidth={{xs: '100%', md:'50%'}} key={key} item>{renderComponent(component)}</Grid>)}
    </Grid>
)

export default TwoColumnGrid
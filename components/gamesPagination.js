import { Pagination, Grid, Container } from 'semantic-ui-react'

const GamesPagination = (prop) => {
    console.log(prop.activePage);
    return (
    <Container><Grid columns='equal'>
        <Grid.Column/>
        <Grid.Column>
            <Pagination
            centered = {"true"}
            activePage={prop.activePage ? prop.activePage : 1 }
            onPageChange={prop.handlePaginationChange ? prop.handlePaginationChange : ()=>console.log(4) }
            totalPages={prop.count}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            />
        </Grid.Column>
    <Grid.Column/>
    </Grid></Container>)  

}


export default GamesPagination
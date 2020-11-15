import { Pagination, Grid, Container } from 'semantic-ui-react'

const GamesPagination = (prop) => {
    
  function handlePaginationChange(index){
    if(index.target.text == '⟨') prop.setPage(parseInt(prop.activePage) - 1)
    else if(index.target.text == '⟩') prop.setPage(parseInt(prop.activePage) + 1)
    else prop.setPage(index.target.text)
  }

    console.log(prop.activePage);
    return (
    <Container><Grid columns='equal'>
        <Grid.Column/>
        <Grid.Column>
            <Pagination
            centered = {"true"}
            activePage={prop.activePage ? prop.activePage : 1 }
            onPageChange={handlePaginationChange}
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
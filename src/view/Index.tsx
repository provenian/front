import React from "react";
import { Header, Image, Grid } from "semantic-ui-react";

const Index: React.FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h2">ようこそ</Header>
          <Image src={`${process.env.PUBLIC_URL}/top_neko.jpg`} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Index;

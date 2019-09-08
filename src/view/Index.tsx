import React from "react";
import { Header, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h2">ようこそ</Header>
          <Image src={`${process.env.PUBLIC_URL}/top_neko.jpg`} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h2">Provenianとは</Header>
          <p>
            Provenianは定理証明オンラインジャッジサイトです。証明問題を掲載しています。連絡等は
            <a href="https://twitter.com/myuon_myon">@myuon_myon</a>
            までお願いします。
          </p>

          <p>
            初めての方や言語ごとの環境などについて知りたい方は
            <Link to="/how-to-use">問題の解き方</Link>のページをご覧ください。
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Index;

import React from "react";
import { Grid, Header, List, Container } from "semantic-ui-react";

const HowToUse: React.FC = () => {
  return (
    <Container text>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">環境について</Header>
            <p>現在サポートされている言語は次のとおりです</p>

            <Header as="h3">Isabelle</Header>
            <List bulleted>
              <List.Item>バージョン: 2019</List.Item>
              <List.Item>Library: HOL(デフォルト)</List.Item>
              <List.Item>
                ビルドコマンド: <code>isabelle build -D [ディレクトリ名]</code>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Header as="h2">問題の解き方について</Header>
            <p>言語ごとに問題の解き方について解説します。</p>

            <Header as="h3">Isabelle</Header>
            <p>
              Isabelleでは通常、次のようなファイルが用意された状態でジャッジが行われます。
            </p>

            <List bulleted>
              <List.Item>
                ROOT: このtheoryをビルドするために必要なファイル
              </List.Item>
              <List.Item>Goal.thy: 示すべき定理が書かれたファイル</List.Item>
              <List.Item>Submitted.thy: 提出されるファイル</List.Item>
              <List.Item>
                Definitions.thy等:
                その他、問題で指定する定義が書かれたファイル(存在する場合)
              </List.Item>
            </List>

            <p>
              提出されたファイルはSubmitted.thyという名前で保存されます。Goal.thyは通常、
              <code>by (rule goal)</code>
              の形で与えられるので、次を満たすようなtheoryファイルを提出することで正解となります。
            </p>

            <List bulleted>
              <List.Item>
                theoryは<code>Submitted</code>とすること
              </List.Item>
              <List.Item>
                必要があれば指定されたファイル(Definitions.thyなど)をimportすること。特に指定がなければMainをimportしてよい。
              </List.Item>
              <List.Item>
                goalという名前をもつ定理を1つ含む証明を提出すること。その際goalの命題は問題で要求されているものと同じものとすること。(命題そのものは問題ごとに与えられるGoal.thyを確認してください。)
              </List.Item>
              <List.Item>
                証明は完全なものであること(sorryやoopsを含まないこと)。
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default HowToUse;

import React, { useState, useEffect } from "react";
import { Form, Segment, Button, Table, Message } from "semantic-ui-react";
import TextareaAutosize from "react-textarea-autosize";
import remark from "remark";
import reactRenderer from "remark-react";

interface ProblemDetail {
  title: string;
  content: string;
  content_type: string;
  files: [string, string[]][];
  tags?: string[];
}

const ProblemForm: React.FC<{
  problem?: ProblemDetail;
  draft: boolean;
  onSubmit: (arg: {
    title: string;
    content: string;
    files: string[];
    tags: string[];
  }) => void;
  onPublish?: () => void;
}> = props => {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (!props.problem) return;

    setContent(props.problem.content);
    setTitle(props.problem.title);

    if (props.problem.tags) {
      setTags(props.problem.tags);
    }

    if (props.problem.files) {
      setFiles(
        Object.entries(props.problem.files)
          .map(([language, filenames]) =>
            filenames.map(filename => [language, filename])
          )
          .flat()
      );
    }
  }, [props.problem]);

  return (
    <Form>
      {props.draft && (
        <Message>
          <p>この問題は現在下書きの状態です。</p>
        </Message>
      )}

      <Form.Input
        label="タイトル"
        defaultValue={title}
        onChange={event => setTitle(event.target.value)}
      />
      <Form.Field>
        <label>本文</label>
        <TextareaAutosize
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <Segment secondary>
          {
            remark()
              .use(reactRenderer, {
                sanitize: false
              })
              .processSync(content).contents
          }
        </Segment>
      </Form.Field>
      <Form.Input
        label="タグ"
        defaultValue={tags.join(",")}
        onChange={event => setTags(event.target.value.split(","))}
      />
      <Form.Field>
        <label>添付ファイル</label>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>言語</Table.HeaderCell>
              <Table.HeaderCell>ファイル名</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {files.map(([language, filename]) => (
              <Table.Row>
                <Table.Cell>{language}</Table.Cell>
                <Table.Cell>{filename}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Form.Field>
      {props.draft && props.onPublish && (
        <Button secondary onClick={() => props.onPublish()}>
          問題を公開
        </Button>
      )}
      <Button
        primary
        onClick={() =>
          props.onSubmit({
            title,
            content,
            files,
            tags
          })
        }
      >
        保存
      </Button>
    </Form>
  );
};

export default ProblemForm;

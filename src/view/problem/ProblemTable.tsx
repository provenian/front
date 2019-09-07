import React from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProblemDetail } from "../../types";

const ProblemTable: React.FC<{ problems: ProblemDetail[] }> = props => {
  return (
    <Table celled compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>問題タイトル</Table.HeaderCell>
          <Table.HeaderCell>更新日時</Table.HeaderCell>
          <Table.HeaderCell>問題タグ</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.problems.map(problem => (
          <Table.Row key={problem.updated_at}>
            <Table.Cell>
              <Link to={`/problems/${problem.id}/draft`}>{problem.title}</Link>
            </Table.Cell>
            <Table.Cell>
              {new Date(problem.updated_at * 1000).toLocaleString()}
            </Table.Cell>
            <Table.Cell>{problem.tags && problem.tags.join(",")}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProblemTable;
